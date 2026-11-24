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
from ..errors.get_chat_messages_error import GetChatMessagesErrorBody, get_chat_messages_error_mapper
from ..errors.send_chat_message_error import SendChatMessageErrorBody, send_chat_message_error_mapper
from ..models.chat_message import ChatMessage
from ..models.chat_messages_response import ChatMessagesResponse
from ..models.send_message_request import SendMessageRequest, SendMessageRequestDict
from ..server.server import Server


class Chat:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ChatWithRawResponse(client, server, auth)

    def get_chat_messages(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ChatMessagesResponse:
        """Retrieves all chat messages associated with an order between the customer and the shopper. Messages are
        returned in chronological order.

        Args:
            order_id: The unique identifier for the order in the chat context.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of chat messages

        Raises:
            ApiError: Unauthorized Order not found ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_chat_messages(order_id, request_options=request_options))

    def send_chat_message(
        self,
        order_id: str,
        body: SendMessageRequest | SendMessageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ChatMessage:
        """Sends a chat message from the customer to the shopper associated with the order. Used for communicating about
        replacements, additions, or delivery instructions.

        Args:
            order_id: The unique identifier for the order in the chat context.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Message sent successfully

        Raises:
            ApiError: Bad request Unauthorized Order not found ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.send_chat_message(order_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> ChatWithRawResponse:
        return self._with_raw_response


class AsyncChat:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncChatWithRawResponse(client, server, auth)

    async def get_chat_messages(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ChatMessagesResponse:
        """Retrieves all chat messages associated with an order between the customer and the shopper. Messages are
        returned in chronological order.

        Args:
            order_id: The unique identifier for the order in the chat context.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of chat messages

        Raises:
            ApiError: Unauthorized Order not found ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_chat_messages(order_id, request_options=request_options))

    async def send_chat_message(
        self,
        order_id: str,
        body: SendMessageRequest | SendMessageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ChatMessage:
        """Sends a chat message from the customer to the shopper associated with the order. Used for communicating about
        replacements, additions, or delivery instructions.

        Args:
            order_id: The unique identifier for the order in the chat context.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Message sent successfully

        Raises:
            ApiError: Bad request Unauthorized Order not found ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.send_chat_message(order_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncChatWithRawResponse:
        return self._with_raw_response


class ChatWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_chat_messages(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ChatMessagesResponse, GetChatMessagesErrorBody]:
        """Retrieves all chat messages associated with an order between the customer and the shopper. Messages are
        returned in chronological order.

        Args:
            order_id: The unique identifier for the order in the chat context.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/post_checkout/chat/{order_id}/messages"),
            path_params=[param[str]("order_id", order_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ChatMessagesResponse],
            error_mapper=get_chat_messages_error_mapper,
            request_options=request_options,
        )

    def send_chat_message(
        self,
        order_id: str,
        body: SendMessageRequest | SendMessageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ChatMessage, SendChatMessageErrorBody]:
        """Sends a chat message from the customer to the shopper associated with the order. Used for communicating about
        replacements, additions, or delivery instructions.

        Args:
            order_id: The unique identifier for the order in the chat context.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/post_checkout/chat/{order_id}/messages"),
            path_params=[param[str]("order_id", order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SendMessageRequest | SendMessageRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ChatMessage],
            error_mapper=send_chat_message_error_mapper,
            request_options=request_options,
        )


class AsyncChatWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_chat_messages(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ChatMessagesResponse, GetChatMessagesErrorBody]:
        """Retrieves all chat messages associated with an order between the customer and the shopper. Messages are
        returned in chronological order.

        Args:
            order_id: The unique identifier for the order in the chat context.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/post_checkout/chat/{order_id}/messages"),
            path_params=[param[str]("order_id", order_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ChatMessagesResponse],
            error_mapper=get_chat_messages_error_mapper,
            request_options=request_options,
        )

    async def send_chat_message(
        self,
        order_id: str,
        body: SendMessageRequest | SendMessageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ChatMessage, SendChatMessageErrorBody]:
        """Sends a chat message from the customer to the shopper associated with the order. Used for communicating about
        replacements, additions, or delivery instructions.

        Args:
            order_id: The unique identifier for the order in the chat context.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/post_checkout/chat/{order_id}/messages"),
            path_params=[param[str]("order_id", order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SendMessageRequest | SendMessageRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ChatMessage],
            error_mapper=send_chat_message_error_mapper,
            request_options=request_options,
        )
