from __future__ import annotations

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
    async_json_decoder,
    json_decoder,
    raw_error_response,
    unwrap,
)
from ..models.response import Response
from ..server.server import Server


class Meta:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MetaWithRawResponse(client, server, auth)

    def get_api_meta(self, *, request_options: RequestOptionsOrDict | None = None) -> Response:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API metadata

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_meta(request_options=request_options))

    @property
    def with_raw_response(self) -> MetaWithRawResponse:
        return self._with_raw_response


class AsyncMeta:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMetaWithRawResponse(client, server, auth)

    async def get_api_meta(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Response:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API metadata

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_meta(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMetaWithRawResponse:
        return self._with_raw_response


class MetaWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_meta(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Response, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/"),
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[Response],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncMetaWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_meta(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Response, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[Response],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
