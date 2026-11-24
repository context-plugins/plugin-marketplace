from __future__ import annotations

from typing import Any
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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.batch_request import BatchRequest, BatchRequestDict
from ..server.server import Server


class Batch:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BatchWithRawResponse(client, server, auth)

    def batch(
        self, body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Per-op results (partial success)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.batch(body, request_options=request_options))

    @property
    def with_raw_response(self) -> BatchWithRawResponse:
        return self._with_raw_response


class AsyncBatch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBatchWithRawResponse(client, server, auth)

    async def batch(
        self, body: BatchRequest | BatchRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Per-op results (partial success)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.batch(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBatchWithRawResponse:
        return self._with_raw_response


class BatchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def batch(
        self, body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchRequest | BatchRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncBatchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def batch(
        self, body: BatchRequest | BatchRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/batch"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchRequest | BatchRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
