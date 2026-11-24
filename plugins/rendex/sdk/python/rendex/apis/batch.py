from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.post_screenshot_batch_error import PostScreenshotBatchErrorBody, post_screenshot_batch_error_mapper
from ..models.batch_request import BatchRequest, BatchRequestDict
from ..models.batch_response import BatchResponse
from ..server.server import Server


class Batch:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BatchWithRawResponse(client, server, auth)

    def post_screenshot_batch(
        self, body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> BatchResponse:
        """Submit up to 500 URLs for capture in a single request. Each URL is processed asynchronously. Returns a
        ``batchId`` that can be polled via ``GET /v1/batches/{batchId}``. Shared defaults apply to all URLs unless
        overridden per-item.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Batch accepted for processing

        Raises:
            ApiError: Invalid request parameters Missing or invalid API key Rate limit exceeded ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_screenshot_batch(body, request_options=request_options))

    @property
    def with_raw_response(self) -> BatchWithRawResponse:
        return self._with_raw_response


class AsyncBatch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBatchWithRawResponse(client, server, auth)

    async def post_screenshot_batch(
        self, body: BatchRequest | BatchRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BatchResponse:
        """Submit up to 500 URLs for capture in a single request. Each URL is processed asynchronously. Returns a
        ``batchId`` that can be polled via ``GET /v1/batches/{batchId}``. Shared defaults apply to all URLs unless
        overridden per-item.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Batch accepted for processing

        Raises:
            ApiError: Invalid request parameters Missing or invalid API key Rate limit exceeded ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_screenshot_batch(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBatchWithRawResponse:
        return self._with_raw_response


class BatchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_screenshot_batch(
        self, body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BatchResponse, PostScreenshotBatchErrorBody]:
        """Submit up to 500 URLs for capture in a single request. Each URL is processed asynchronously. Returns a
        ``batchId`` that can be polled via ``GET /v1/batches/{batchId}``. Shared defaults apply to all URLs unless
        overridden per-item.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/screenshot/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchRequest | BatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BatchResponse],
            error_mapper=post_screenshot_batch_error_mapper,
            request_options=request_options,
        )


class AsyncBatchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_screenshot_batch(
        self, body: BatchRequest | BatchRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BatchResponse, PostScreenshotBatchErrorBody]:
        """Submit up to 500 URLs for capture in a single request. Each URL is processed asynchronously. Returns a
        ``batchId`` that can be polled via ``GET /v1/batches/{batchId}``. Shared defaults apply to all URLs unless
        overridden per-item.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/screenshot/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchRequest | BatchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BatchResponse],
            error_mapper=post_screenshot_batch_error_mapper,
            request_options=request_options,
        )
