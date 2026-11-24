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
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.api_v1_uploads_response import ApiV1UploadsResponse
from ..server.server import Server


class Uploads:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UploadsWithRawResponse(client, server, auth)

    def post_api_v1_uploads(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1UploadsResponse:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload ticket

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_uploads(request_options=request_options))

    @property
    def with_raw_response(self) -> UploadsWithRawResponse:
        return self._with_raw_response


class AsyncUploads:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUploadsWithRawResponse(client, server, auth)

    async def post_api_v1_uploads(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1UploadsResponse:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload ticket

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_uploads(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUploadsWithRawResponse:
        return self._with_raw_response


class UploadsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_api_v1_uploads(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1UploadsResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/uploads"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1UploadsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncUploadsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_api_v1_uploads(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1UploadsResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/uploads"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1UploadsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
