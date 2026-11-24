from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncEventStream,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    EventStream,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    async_text_event_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    text_event_decoder,
    unwrap,
)
from ..errors.ask_ava_streaming_error import AskAvaStreamingErrorBody, ask_ava_streaming_error_mapper
from ..errors.ask_ava_sync_error import AskAvaSyncErrorBody, ask_ava_sync_error_mapper
from ..errors.ava_feedback_error import AvaFeedbackErrorBody, ava_feedback_error_mapper
from ..errors.delete_ava_conversation_error import DeleteAvaConversationErrorBody, delete_ava_conversation_error_mapper
from ..models.ava_ask_request import AvaAskRequest, AvaAskRequestDict
from ..models.ava_ask_sync_request import AvaAskSyncRequest, AvaAskSyncRequestDict
from ..models.ava_ask_sync_response import AvaAskSyncResponse
from ..models.ava_feedback_request import AvaFeedbackRequest, AvaFeedbackRequestDict
from ..server.server import Server


class Ava:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AvaWithRawResponse(client, server, auth)

    def ask_ava_streaming(
        self, body: AvaAskRequest | AvaAskRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> EventStream[str]:
        """Send a question to Ava and receive a streaming response via Server-Sent Events (SSE). The response streams
        back events containing the answer text, conversation ID, and message metadata.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - SSE stream of Ava response events.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.ask_ava_streaming(body, request_options=request_options))

    def ask_ava_sync(
        self, body: AvaAskSyncRequest | AvaAskSyncRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> AvaAskSyncResponse:
        """Send a question to Ava and receive a synchronous response. Set ``ephemeral`` to ``true`` to skip conversation
        persistence (recommended for programmatic consumers). When ``ephemeral`` is ``false`` (default), the response
        includes a ``conversationId`` that can be used with the delete endpoint.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Ava response returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.ask_ava_sync(body, request_options=request_options))

    def ava_feedback(
        self, body: AvaFeedbackRequest | AvaFeedbackRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Submit feedback on an Ava answer to help improve response quality.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Feedback submitted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.ava_feedback(body, request_options=request_options))

    def delete_ava_conversation(
        self, conversation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes an Ava conversation by its ID.

        Args:
            conversation_id: The ID of the conversation to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Conversation deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.delete_ava_conversation(conversation_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AvaWithRawResponse:
        return self._with_raw_response


class AsyncAva:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAvaWithRawResponse(client, server, auth)

    async def ask_ava_streaming(
        self, body: AvaAskRequest | AvaAskRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncEventStream[str]:
        """Send a question to Ava and receive a streaming response via Server-Sent Events (SSE). The response streams
        back events containing the answer text, conversation ID, and message metadata.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - SSE stream of Ava response events.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.ask_ava_streaming(body, request_options=request_options))

    async def ask_ava_sync(
        self,
        body: AvaAskSyncRequest | AvaAskSyncRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AvaAskSyncResponse:
        """Send a question to Ava and receive a synchronous response. Set ``ephemeral`` to ``true`` to skip conversation
        persistence (recommended for programmatic consumers). When ``ephemeral`` is ``false`` (default), the response
        includes a ``conversationId`` that can be used with the delete endpoint.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Ava response returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.ask_ava_sync(body, request_options=request_options))

    async def ava_feedback(
        self,
        body: AvaFeedbackRequest | AvaFeedbackRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Submit feedback on an Ava answer to help improve response quality.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Feedback submitted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.ava_feedback(body, request_options=request_options))

    async def delete_ava_conversation(
        self, conversation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes an Ava conversation by its ID.

        Args:
            conversation_id: The ID of the conversation to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Conversation deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_ava_conversation(conversation_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAvaWithRawResponse:
        return self._with_raw_response


class AvaWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def ask_ava_streaming(
        self, body: AvaAskRequest | AvaAskRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EventStream[str], AskAvaStreamingErrorBody]:
        """Send a question to Ava and receive a streaming response via Server-Sent Events (SSE). The response streams
        back events containing the answer text, conversation ID, and message metadata.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ava/v1/ask"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AvaAskRequest | AvaAskRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=text_event_decoder[str](),
            error_mapper=ask_ava_streaming_error_mapper,
            request_options=request_options,
        )

    def ask_ava_sync(
        self, body: AvaAskSyncRequest | AvaAskSyncRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AvaAskSyncResponse, AskAvaSyncErrorBody]:
        """Send a question to Ava and receive a synchronous response. Set ``ephemeral`` to ``true`` to skip conversation
        persistence (recommended for programmatic consumers). When ``ephemeral`` is ``false`` (default), the response
        includes a ``conversationId`` that can be used with the delete endpoint.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ava/v1/askSync"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AvaAskSyncRequest | AvaAskSyncRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AvaAskSyncResponse],
            error_mapper=ask_ava_sync_error_mapper,
            request_options=request_options,
        )

    def ava_feedback(
        self, body: AvaFeedbackRequest | AvaFeedbackRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, AvaFeedbackErrorBody]:
        """Submit feedback on an Ava answer to help improve response quality.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ava/v1/feedback"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AvaFeedbackRequest | AvaFeedbackRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=ava_feedback_error_mapper,
            request_options=request_options,
        )

    def delete_ava_conversation(
        self, conversation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAvaConversationErrorBody]:
        """Deletes an Ava conversation by its ID.

        Args:
            conversation_id: The ID of the conversation to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/ava/v1/deleteConversation"),
            query_params=[param[str]("conversationId", conversation_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=delete_ava_conversation_error_mapper,
            request_options=request_options,
        )


class AsyncAvaWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def ask_ava_streaming(
        self, body: AvaAskRequest | AvaAskRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncEventStream[str], AskAvaStreamingErrorBody]:
        """Send a question to Ava and receive a streaming response via Server-Sent Events (SSE). The response streams
        back events containing the answer text, conversation ID, and message metadata.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ava/v1/ask"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AvaAskRequest | AvaAskRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_text_event_decoder[str](),
            error_mapper=ask_ava_streaming_error_mapper,
            request_options=request_options,
        )

    async def ask_ava_sync(
        self,
        body: AvaAskSyncRequest | AvaAskSyncRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AvaAskSyncResponse, AskAvaSyncErrorBody]:
        """Send a question to Ava and receive a synchronous response. Set ``ephemeral`` to ``true`` to skip conversation
        persistence (recommended for programmatic consumers). When ``ephemeral`` is ``false`` (default), the response
        includes a ``conversationId`` that can be used with the delete endpoint.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ava/v1/askSync"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AvaAskSyncRequest | AvaAskSyncRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AvaAskSyncResponse],
            error_mapper=ask_ava_sync_error_mapper,
            request_options=request_options,
        )

    async def ava_feedback(
        self,
        body: AvaFeedbackRequest | AvaFeedbackRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AvaFeedbackErrorBody]:
        """Submit feedback on an Ava answer to help improve response quality.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ava/v1/feedback"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AvaFeedbackRequest | AvaFeedbackRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=ava_feedback_error_mapper,
            request_options=request_options,
        )

    async def delete_ava_conversation(
        self, conversation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteAvaConversationErrorBody]:
        """Deletes an Ava conversation by its ID.

        Args:
            conversation_id: The ID of the conversation to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/ava/v1/deleteConversation"),
            query_params=[param[str]("conversationId", conversation_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=delete_ava_conversation_error_mapper,
            request_options=request_options,
        )
