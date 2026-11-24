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
from ..errors.messages_show_error import MessagesShowErrorBody, messages_show_error_mapper
from ..models.message_resource import MessageResource
from ..models.v1_messages_response import V1MessagesResponse
from ..server.server import Server


class Messages:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MessagesWithRawResponse(client, server, auth)

    def messages_index(self, *, request_options: RequestOptionsOrDict | None = None) -> V1MessagesResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``MessageResource``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.messages_index(request_options=request_options))

    def messages_show(self, message: int, *, request_options: RequestOptionsOrDict | None = None) -> MessageResource:
        """Send a ``GET`` request.

        Args:
            message: The message ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``MessageResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(self._with_raw_response.messages_show(message, request_options=request_options))

    @property
    def with_raw_response(self) -> MessagesWithRawResponse:
        return self._with_raw_response


class AsyncMessages:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMessagesWithRawResponse(client, server, auth)

    async def messages_index(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1MessagesResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``MessageResource``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.messages_index(request_options=request_options))

    async def messages_show(
        self, message: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResource:
        """Send a ``GET`` request.

        Args:
            message: The message ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``MessageResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(await self._with_raw_response.messages_show(message, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMessagesWithRawResponse:
        return self._with_raw_response


class MessagesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def messages_index(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1MessagesResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/messages"),
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1MessagesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def messages_show(
        self, message: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResource, MessagesShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            message: The message ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/messages/{message}"),
            path_params=[param[int]("message", message)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[MessageResource],
            error_mapper=messages_show_error_mapper,
            request_options=request_options,
        )


class AsyncMessagesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def messages_index(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1MessagesResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/messages"),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1MessagesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def messages_show(
        self, message: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResource, MessagesShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            message: The message ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/messages/{message}"),
            path_params=[param[int]("message", message)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[MessageResource],
            error_mapper=messages_show_error_mapper,
            request_options=request_options,
        )
