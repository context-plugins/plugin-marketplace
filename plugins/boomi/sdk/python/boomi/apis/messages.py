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
from ..errors.publish_messages_error import PublishMessagesErrorBody, publish_messages_error_mapper
from ..models.multi_message_request import MultiMessageRequest, MultiMessageRequestDict
from ..models.publish_response import PublishResponse
from ..server.server import Server


class Messages:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MessagesWithRawResponse(client, server, auth)

    def publish_messages(
        self,
        body: MultiMessageRequest | MultiMessageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublishResponse:
        """Publishes one or more messages to the event topic. Supports two operational modes: multiple messages mode
        (predefined JSON format with payload and properties fields) and single message mode (original format in plain
        text, JSON, or XML). Messages may be up to 5 MB each and the total HTTP request must not exceed 10 MB. Rate
        limited to 60,000 requests per IP per 5-minute window.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Messages accepted and published successfully.

        Raises:
            ApiError: The request payload is invalid or malformed. Authentication token is missing or invalid. Payload
                too large. Maximum message size is 5 MB. Rate limit exceeded. Maximum 60,000 requests per IP per
                5-minute window. ``error`` is ``ErrorResponseBoomiEventStreamsRestMessagesApi | RawError``."""
        return unwrap(self._with_raw_response.publish_messages(body, request_options=request_options))

    @property
    def with_raw_response(self) -> MessagesWithRawResponse:
        return self._with_raw_response


class AsyncMessages:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMessagesWithRawResponse(client, server, auth)

    async def publish_messages(
        self,
        body: MultiMessageRequest | MultiMessageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublishResponse:
        """Publishes one or more messages to the event topic. Supports two operational modes: multiple messages mode
        (predefined JSON format with payload and properties fields) and single message mode (original format in plain
        text, JSON, or XML). Messages may be up to 5 MB each and the total HTTP request must not exceed 10 MB. Rate
        limited to 60,000 requests per IP per 5-minute window.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Messages accepted and published successfully.

        Raises:
            ApiError: The request payload is invalid or malformed. Authentication token is missing or invalid. Payload
                too large. Maximum message size is 5 MB. Rate limit exceeded. Maximum 60,000 requests per IP per
                5-minute window. ``error`` is ``ErrorResponseBoomiEventStreamsRestMessagesApi | RawError``."""
        return unwrap(await self._with_raw_response.publish_messages(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMessagesWithRawResponse:
        return self._with_raw_response


class MessagesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def publish_messages(
        self,
        body: MultiMessageRequest | MultiMessageRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublishResponse, PublishMessagesErrorBody]:
        """Publishes one or more messages to the event topic. Supports two operational modes: multiple messages mode
        (predefined JSON format with payload and properties fields) and single message mode (original format in plain
        text, JSON, or XML). Messages may be up to 5 MB each and the total HTTP request must not exceed 10 MB. Rate
        limited to 60,000 requests per IP per 5-minute window.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_boomi_event_streams_rest_messages_api("/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MultiMessageRequest | MultiMessageRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PublishResponse],
            error_mapper=publish_messages_error_mapper,
            request_options=request_options,
        )


class AsyncMessagesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def publish_messages(
        self,
        body: MultiMessageRequest | MultiMessageRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublishResponse, PublishMessagesErrorBody]:
        """Publishes one or more messages to the event topic. Supports two operational modes: multiple messages mode
        (predefined JSON format with payload and properties fields) and single message mode (original format in plain
        text, JSON, or XML). Messages may be up to 5 MB each and the total HTTP request must not exceed 10 MB. Rate
        limited to 60,000 requests per IP per 5-minute window.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_boomi_event_streams_rest_messages_api("/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MultiMessageRequest | MultiMessageRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PublishResponse],
            error_mapper=publish_messages_error_mapper,
            request_options=request_options,
        )
