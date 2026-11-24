from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    param,
    raw_error_response,
    unwrap,
)
from ..server.server import Server


class Zones:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ZonesWithRawResponse(client, server, auth)

    def list_zones(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of zones

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_zones(request_options=request_options))

    def lookup_zones(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Zones

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.lookup_zones(request_options=request_options))

    def modify_zones(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Modified zones

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.modify_zones(request_options=request_options))

    def zone_changes(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Changes

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.zone_changes(request_options=request_options))

    @property
    def with_raw_response(self) -> ZonesWithRawResponse:
        return self._with_raw_response


class AsyncZones:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncZonesWithRawResponse(client, server, auth)

    async def list_zones(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of zones

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_zones(request_options=request_options))

    async def lookup_zones(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Zones

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.lookup_zones(request_options=request_options))

    async def modify_zones(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Modified zones

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.modify_zones(request_options=request_options))

    async def zone_changes(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Changes

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.zone_changes(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncZonesWithRawResponse:
        return self._with_raw_response


class ZonesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_zones(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/zones/list"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.cloud_kit_api_token, self._auth.server_to_server),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def lookup_zones(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/zones/lookup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.cloud_kit_api_token, self._auth.server_to_server),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def modify_zones(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/zones/modify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.cloud_kit_api_token, self._auth.server_to_server),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def zone_changes(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/zones/changes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.cloud_kit_api_token, self._auth.server_to_server),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncZonesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_zones(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/zones/list"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.cloud_kit_api_token, self._auth.server_to_server),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def lookup_zones(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/zones/lookup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.cloud_kit_api_token, self._auth.server_to_server),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def modify_zones(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/zones/modify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.cloud_kit_api_token, self._auth.server_to_server),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def zone_changes(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/zones/changes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.cloud_kit_api_token, self._auth.server_to_server),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
