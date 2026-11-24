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


class Assets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AssetsWithRawResponse(client, server, auth)

    def rereference_assets(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Re-referenced

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.rereference_assets(request_options=request_options))

    def upload_assets(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload URLs

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.upload_assets(request_options=request_options))

    @property
    def with_raw_response(self) -> AssetsWithRawResponse:
        return self._with_raw_response


class AsyncAssets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAssetsWithRawResponse(client, server, auth)

    async def rereference_assets(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Re-referenced

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.rereference_assets(request_options=request_options))

    async def upload_assets(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload URLs

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.upload_assets(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAssetsWithRawResponse:
        return self._with_raw_response


class AssetsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def rereference_assets(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/assets/rereference"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.cloud_kit_api_token, self._auth.server_to_server),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def upload_assets(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/assets/upload"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.cloud_kit_api_token, self._auth.server_to_server),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncAssetsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def rereference_assets(
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
            url_template=self._server.default("/assets/rereference"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.cloud_kit_api_token, self._auth.server_to_server),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def upload_assets(
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
            url_template=self._server.default("/assets/upload"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.cloud_kit_api_token, self._auth.server_to_server),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
