from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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


class Images:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ImagesWithRawResponse(client, server, auth)

    def post_images(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Image uploaded

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_images(request_options=request_options))

    @property
    def with_raw_response(self) -> ImagesWithRawResponse:
        return self._with_raw_response


class AsyncImages:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncImagesWithRawResponse(client, server, auth)

    async def post_images(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Image uploaded

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_images(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncImagesWithRawResponse:
        return self._with_raw_response


class ImagesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_images(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_read_me_api_keys_api("/images"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncImagesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_images(
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
            url_template=self._server.default_read_me_api_keys_api("/images"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
