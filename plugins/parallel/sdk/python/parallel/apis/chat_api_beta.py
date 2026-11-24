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
from ..errors.chat_completions_v1_beta_chat_completions_post_error import (
    ChatCompletionsV1BetaChatCompletionsPostErrorBody,
    chat_completions_v1_beta_chat_completions_post_error_mapper,
)
from ..models.chat_completion import ChatCompletion
from ..models.chat_completion_request import ChatCompletionRequest, ChatCompletionRequestDict
from ..server.server import Server


class ChatApiBeta:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ChatApiBetaWithRawResponse(client, server, auth)

    def chat_completions_v1beta_chat_completions_post(
        self,
        body: ChatCompletionRequest | ChatCompletionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ChatCompletion:
        """Chat completions.

        This endpoint can be used to get realtime chat completions. It can also be used with the Task API processors to
        get structured, research outputs via a chat interface.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a ChatCompletion object for non-streaming requests (application/json), or a stream of
            ChatCompletionResponseChunk objects for streaming requests (text/event-stream) when ``stream=true`` is set
            in the request.

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.chat_completions_v1beta_chat_completions_post(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ChatApiBetaWithRawResponse:
        return self._with_raw_response


class AsyncChatApiBeta:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncChatApiBetaWithRawResponse(client, server, auth)

    async def chat_completions_v1beta_chat_completions_post(
        self,
        body: ChatCompletionRequest | ChatCompletionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ChatCompletion:
        """Chat completions.

        This endpoint can be used to get realtime chat completions. It can also be used with the Task API processors to
        get structured, research outputs via a chat interface.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a ChatCompletion object for non-streaming requests (application/json), or a stream of
            ChatCompletionResponseChunk objects for streaming requests (text/event-stream) when ``stream=true`` is set
            in the request.

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.chat_completions_v1beta_chat_completions_post(
                body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncChatApiBetaWithRawResponse:
        return self._with_raw_response


class ChatApiBetaWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def chat_completions_v1beta_chat_completions_post(
        self,
        body: ChatCompletionRequest | ChatCompletionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ChatCompletion, ChatCompletionsV1BetaChatCompletionsPostErrorBody]:
        """Chat completions.

        This endpoint can be used to get realtime chat completions. It can also be used with the Task API processors to
        get structured, research outputs via a chat interface.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/chat/completions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ChatCompletionRequest | ChatCompletionRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ChatCompletion],
            error_mapper=chat_completions_v1_beta_chat_completions_post_error_mapper,
            request_options=request_options,
        )


class AsyncChatApiBetaWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def chat_completions_v1beta_chat_completions_post(
        self,
        body: ChatCompletionRequest | ChatCompletionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ChatCompletion, ChatCompletionsV1BetaChatCompletionsPostErrorBody]:
        """Chat completions.

        This endpoint can be used to get realtime chat completions. It can also be used with the Task API processors to
        get structured, research outputs via a chat interface.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1beta/chat/completions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ChatCompletionRequest | ChatCompletionRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ChatCompletion],
            error_mapper=chat_completions_v1_beta_chat_completions_post_error_mapper,
            request_options=request_options,
        )
