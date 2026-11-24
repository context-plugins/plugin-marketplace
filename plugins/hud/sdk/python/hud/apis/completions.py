from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.post_completion_v2_completions_post_error import (
    PostCompletionV2CompletionsPostErrorBody,
    post_completion_v2_completions_post_error_mapper,
)
from ..models.completion_request import CompletionRequest, CompletionRequestDict
from ..models.completion_response import CompletionResponse
from ..server.server import Server


class Completions:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = CompletionsWithRawResponse(client, server)

    def post_completion_v2_completions_post(
        self, body: CompletionRequest | CompletionRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompletionResponse:
        """One-shot chat completion proxied to the inference gateway.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.post_completion_v2_completions_post(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> CompletionsWithRawResponse:
        return self._with_raw_response


class AsyncCompletions:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncCompletionsWithRawResponse(client, server)

    async def post_completion_v2_completions_post(
        self,
        body: CompletionRequest | CompletionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompletionResponse:
        """One-shot chat completion proxied to the inference gateway.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Invalid or malformed request Missing or invalid credentials Caller may not access this resource
                Referenced entity does not exist Resource already exists Validation Error Rate limit exceeded; wait at
                least Retry-After seconds The server is at capacity; retry after Retry-After seconds ``error`` is
                ``ErrorResponse | HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.post_completion_v2_completions_post(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCompletionsWithRawResponse:
        return self._with_raw_response


class CompletionsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def post_completion_v2_completions_post(
        self, body: CompletionRequest | CompletionRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompletionResponse, PostCompletionV2CompletionsPostErrorBody]:
        """One-shot chat completion proxied to the inference gateway.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/completions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompletionRequest | CompletionRequestDict](body),
            decoder=json_decoder[CompletionResponse],
            error_mapper=post_completion_v2_completions_post_error_mapper,
            request_options=request_options,
        )


class AsyncCompletionsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def post_completion_v2_completions_post(
        self,
        body: CompletionRequest | CompletionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompletionResponse, PostCompletionV2CompletionsPostErrorBody]:
        """One-shot chat completion proxied to the inference gateway.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/completions"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompletionRequest | CompletionRequestDict](body),
            decoder=async_json_decoder[CompletionResponse],
            error_mapper=post_completion_v2_completions_post_error_mapper,
            request_options=request_options,
        )
