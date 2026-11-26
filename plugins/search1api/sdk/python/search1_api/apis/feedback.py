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
from ..errors.feedback_error import FeedbackErrorBody, feedback_error_mapper
from ..models.feedback_request import FeedbackRequest, FeedbackRequestDict
from ..models.feedback_response import FeedbackResponse
from ..server.server import Server


class Feedback:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FeedbackWithRawResponse(client, server, auth)

    def feedback(
        self, body: FeedbackRequest | FeedbackRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> FeedbackResponse:
        """Report a Search1API problem, missing capability, or confusing documentation encountered during a task. Only
        message is required. Optional request_id refers to the original problem request. Do not include credentials,
        personal data, or private user content. Reports are stored in Agent Feedback and linked to an opaque account
        reference. Do not report every empty result or retry the same report automatically; feedback should not block
        the main task. Returns 201 only after storage succeeds. Maximum JSON body size: 16 KiB. Limited to 10
        submissions per account per minute at a Cloudflare location. Free to call.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Payload Too Large Unsupported Media Type Too Many Requests
                Internal Server Error Service Unavailable ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.feedback(body, request_options=request_options))

    @property
    def with_raw_response(self) -> FeedbackWithRawResponse:
        return self._with_raw_response


class AsyncFeedback:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFeedbackWithRawResponse(client, server, auth)

    async def feedback(
        self, body: FeedbackRequest | FeedbackRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> FeedbackResponse:
        """Report a Search1API problem, missing capability, or confusing documentation encountered during a task. Only
        message is required. Optional request_id refers to the original problem request. Do not include credentials,
        personal data, or private user content. Reports are stored in Agent Feedback and linked to an opaque account
        reference. Do not report every empty result or retry the same report automatically; feedback should not block
        the main task. Returns 201 only after storage succeeds. Maximum JSON body size: 16 KiB. Limited to 10
        submissions per account per minute at a Cloudflare location. Free to call.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Payload Too Large Unsupported Media Type Too Many Requests
                Internal Server Error Service Unavailable ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.feedback(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncFeedbackWithRawResponse:
        return self._with_raw_response


class FeedbackWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def feedback(
        self, body: FeedbackRequest | FeedbackRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FeedbackResponse, FeedbackErrorBody]:
        """Report a Search1API problem, missing capability, or confusing documentation encountered during a task. Only
        message is required. Optional request_id refers to the original problem request. Do not include credentials,
        personal data, or private user content. Reports are stored in Agent Feedback and linked to an opaque account
        reference. Do not report every empty result or retry the same report automatically; feedback should not block
        the main task. Returns 201 only after storage succeeds. Maximum JSON body size: 16 KiB. Limited to 10
        submissions per account per minute at a Cloudflare location. Free to call.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/feedback"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FeedbackRequest | FeedbackRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[FeedbackResponse],
            error_mapper=feedback_error_mapper,
            request_options=request_options,
        )


class AsyncFeedbackWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def feedback(
        self, body: FeedbackRequest | FeedbackRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[FeedbackResponse, FeedbackErrorBody]:
        """Report a Search1API problem, missing capability, or confusing documentation encountered during a task. Only
        message is required. Optional request_id refers to the original problem request. Do not include credentials,
        personal data, or private user content. Reports are stored in Agent Feedback and linked to an opaque account
        reference. Do not report every empty result or retry the same report automatically; feedback should not block
        the main task. Returns 201 only after storage succeeds. Maximum JSON body size: 16 KiB. Limited to 10
        submissions per account per minute at a Cloudflare location. Free to call.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/feedback"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FeedbackRequest | FeedbackRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[FeedbackResponse],
            error_mapper=feedback_error_mapper,
            request_options=request_options,
        )
