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
from ..errors.create_response_v1_responses_post_error import (
    CreateResponseV1ResponsesPostErrorBody,
    create_response_v1_responses_post_error_mapper,
)
from ..models.response import Response
from ..models.response_create_request import ResponseCreateRequest, ResponseCreateRequestDict
from ..server.server import Server


class ResponsesApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ResponsesApiWithRawResponse(client, server, auth)

    def create_response_v1_responses_post(
        self,
        body: ResponseCreateRequest | ResponseCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Response:
        """Create a response.

        Generates an answer to the given input, grounded in live web research and annotated with URL citations. Set
        ``model`` to ``parallel``; ``reasoning.effort`` (``low``/``medium``/``high``) controls how much research is
        performed, trading response time for answer quality. Returns an OpenAI-format ``Response`` as
        ``application/json``, or a ``text/event-stream`` of OpenAI Responses SSE events when ``stream=true``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a Response object for non-streaming requests (application/json), or a stream of OpenAI Responses
            streaming events (text/event-stream) when ``stream=true`` is set in the request.

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(self._with_raw_response.create_response_v1_responses_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ResponsesApiWithRawResponse:
        return self._with_raw_response


class AsyncResponsesApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncResponsesApiWithRawResponse(client, server, auth)

    async def create_response_v1_responses_post(
        self,
        body: ResponseCreateRequest | ResponseCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Response:
        """Create a response.

        Generates an answer to the given input, grounded in live web research and annotated with URL citations. Set
        ``model`` to ``parallel``; ``reasoning.effort`` (``low``/``medium``/``high``) controls how much research is
        performed, trading response time for answer quality. Returns an OpenAI-format ``Response`` as
        ``application/json``, or a ``text/event-stream`` of OpenAI Responses SSE events when ``stream=true``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a Response object for non-streaming requests (application/json), or a stream of OpenAI Responses
            streaming events (text/event-stream) when ``stream=true`` is set in the request.

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.create_response_v1_responses_post(body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncResponsesApiWithRawResponse:
        return self._with_raw_response


class ResponsesApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_response_v1_responses_post(
        self,
        body: ResponseCreateRequest | ResponseCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Response, CreateResponseV1ResponsesPostErrorBody]:
        """Create a response.

        Generates an answer to the given input, grounded in live web research and annotated with URL citations. Set
        ``model`` to ``parallel``; ``reasoning.effort`` (``low``/``medium``/``high``) controls how much research is
        performed, trading response time for answer quality. Returns an OpenAI-format ``Response`` as
        ``application/json``, or a ``text/event-stream`` of OpenAI Responses SSE events when ``stream=true``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/responses"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ResponseCreateRequest | ResponseCreateRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[Response],
            error_mapper=create_response_v1_responses_post_error_mapper,
            request_options=request_options,
        )


class AsyncResponsesApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_response_v1_responses_post(
        self,
        body: ResponseCreateRequest | ResponseCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Response, CreateResponseV1ResponsesPostErrorBody]:
        """Create a response.

        Generates an answer to the given input, grounded in live web research and annotated with URL citations. Set
        ``model`` to ``parallel``; ``reasoning.effort`` (``low``/``medium``/``high``) controls how much research is
        performed, trading response time for answer quality. Returns an OpenAI-format ``Response`` as
        ``application/json``, or a ``text/event-stream`` of OpenAI Responses SSE events when ``stream=true``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/responses"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ResponseCreateRequest | ResponseCreateRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[Response],
            error_mapper=create_response_v1_responses_post_error_mapper,
            request_options=request_options,
        )
