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
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.json_rpc_request import JsonRpcRequest, JsonRpcRequestDict
from ..models.json_rpc_response import JsonRpcResponse
from ..server.server import Server


class Blob:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BlobWithRawResponse(client, server, auth)

    def post_root(
        self, body: JsonRpcRequest | JsonRpcRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> JsonRpcResponse:
        """Single JSON-RPC entrypoint exposing the ``blob.*`` namespace including ``blob.Submit``, ``blob.Get``,
        ``blob.GetAll``, ``blob.GetProof``, ``blob.Included``, and ``blob.Subscribe``. Authenticate with a bearer token
        generated via ``celestia auth ``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            JSON-RPC response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.post_root(body, request_options=request_options))

    @property
    def with_raw_response(self) -> BlobWithRawResponse:
        return self._with_raw_response


class AsyncBlob:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBlobWithRawResponse(client, server, auth)

    async def post_root(
        self, body: JsonRpcRequest | JsonRpcRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> JsonRpcResponse:
        """Single JSON-RPC entrypoint exposing the ``blob.*`` namespace including ``blob.Submit``, ``blob.Get``,
        ``blob.GetAll``, ``blob.GetProof``, ``blob.Included``, and ``blob.Subscribe``. Authenticate with a bearer token
        generated via ``celestia auth ``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            JSON-RPC response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.post_root(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBlobWithRawResponse:
        return self._with_raw_response


class BlobWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_root(
        self, body: JsonRpcRequest | JsonRpcRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[JsonRpcResponse, RawError]:
        """Single JSON-RPC entrypoint exposing the ``blob.*`` namespace including ``blob.Submit``, ``blob.Get``,
        ``blob.GetAll``, ``blob.GetProof``, ``blob.Included``, and ``blob.Subscribe``. Authenticate with a bearer token
        generated via ``celestia auth ``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JsonRpcRequest | JsonRpcRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[JsonRpcResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncBlobWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_root(
        self, body: JsonRpcRequest | JsonRpcRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[JsonRpcResponse, RawError]:
        """Single JSON-RPC entrypoint exposing the ``blob.*`` namespace including ``blob.Submit``, ``blob.Get``,
        ``blob.GetAll``, ``blob.GetProof``, ``blob.Included``, and ``blob.Subscribe``. Authenticate with a bearer token
        generated via ``celestia auth ``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[JsonRpcRequest | JsonRpcRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[JsonRpcResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
