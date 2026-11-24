from __future__ import annotations

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
from ..models.binary import Binary
from ..server.server import Server


class BinaryApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BinaryApiWithRawResponse(client, server, auth)

    def read_binary(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Binary:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The document content (CCDA, PDF, or other format).

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.read_binary(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> BinaryApiWithRawResponse:
        return self._with_raw_response


class AsyncBinaryApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBinaryApiWithRawResponse(client, server, auth)

    async def read_binary(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Binary:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The document content (CCDA, PDF, or other format).

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.read_binary(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBinaryApiWithRawResponse:
        return self._with_raw_response


class BinaryApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def read_binary(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Binary, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Binary/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Binary],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncBinaryApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def read_binary(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Binary, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: The logical id of the resource.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/Binary/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Binary],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
