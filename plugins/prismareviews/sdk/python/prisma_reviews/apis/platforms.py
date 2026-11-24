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
    param,
    unwrap,
)
from ..errors.get_platform_error import GetPlatformErrorBody, get_platform_error_mapper
from ..errors.list_platforms_error import ListPlatformsErrorBody, list_platforms_error_mapper
from ..models.enums.platform_id import PlatformIdOrStr
from ..models.platform import Platform
from ..models.platform_list import PlatformList
from ..server.server import Server


class Platforms:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PlatformsWithRawResponse(client, server, auth)

    def get_platform(self, id_: PlatformIdOrStr, *, request_options: RequestOptionsOrDict | None = None) -> Platform:
        """One platform of ``GET /v1/platforms``.

        Args:
            id_: Platform ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The platform.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No platform with that ID. More requests
                this minute than the plan allows for this key. Not counted in usage. Something failed on Prisma's side.
                Retryable. Prisma is under maintenance and the API is paused. Retryable. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.get_platform(id_, request_options=request_options))

    def list_platforms(self, *, request_options: RequestOptionsOrDict | None = None) -> PlatformList:
        """Every platform with how it connects, the exact fields ``POST /v1/connections`` expects, setup steps for the
        account owner, an example body and whether this workspace can connect it now. Enough to connect a platform
        without reading the docs.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All platforms.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. More requests this minute than the plan
                allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_platforms(request_options=request_options))

    @property
    def with_raw_response(self) -> PlatformsWithRawResponse:
        return self._with_raw_response


class AsyncPlatforms:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPlatformsWithRawResponse(client, server, auth)

    async def get_platform(
        self, id_: PlatformIdOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Platform:
        """One platform of ``GET /v1/platforms``.

        Args:
            id_: Platform ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The platform.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No platform with that ID. More requests
                this minute than the plan allows for this key. Not counted in usage. Something failed on Prisma's side.
                Retryable. Prisma is under maintenance and the API is paused. Retryable. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.get_platform(id_, request_options=request_options))

    async def list_platforms(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> PlatformList:
        """Every platform with how it connects, the exact fields ``POST /v1/connections`` expects, setup steps for the
        account owner, an example body and whether this workspace can connect it now. Enough to connect a platform
        without reading the docs.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All platforms.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. More requests this minute than the plan
                allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_platforms(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPlatformsWithRawResponse:
        return self._with_raw_response


class PlatformsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_platform(
        self, id_: PlatformIdOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Platform, GetPlatformErrorBody]:
        """One platform of ``GET /v1/platforms``.

        Args:
            id_: Platform ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/platforms/{id}"),
            path_params=[param[PlatformIdOrStr]("id", id_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[Platform],
            error_mapper=get_platform_error_mapper,
            request_options=request_options,
        )

    def list_platforms(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PlatformList, ListPlatformsErrorBody]:
        """Every platform with how it connects, the exact fields ``POST /v1/connections`` expects, setup steps for the
        account owner, an example body and whether this workspace can connect it now. Enough to connect a platform
        without reading the docs.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/platforms"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[PlatformList],
            error_mapper=list_platforms_error_mapper,
            request_options=request_options,
        )


class AsyncPlatformsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_platform(
        self, id_: PlatformIdOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Platform, GetPlatformErrorBody]:
        """One platform of ``GET /v1/platforms``.

        Args:
            id_: Platform ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/platforms/{id}"),
            path_params=[param[PlatformIdOrStr]("id", id_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[Platform],
            error_mapper=get_platform_error_mapper,
            request_options=request_options,
        )

    async def list_platforms(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PlatformList, ListPlatformsErrorBody]:
        """Every platform with how it connects, the exact fields ``POST /v1/connections`` expects, setup steps for the
        account owner, an example body and whether this workspace can connect it now. Enough to connect a platform
        without reading the docs.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/platforms"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[PlatformList],
            error_mapper=list_platforms_error_mapper,
            request_options=request_options,
        )
