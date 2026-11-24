from __future__ import annotations

from typing import Any
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
from ..errors.describe_feedback_error import DescribeFeedbackErrorBody, describe_feedback_error_mapper
from ..errors.put_feedback_error import PutFeedbackErrorBody, put_feedback_error_mapper
from ..models.describe_feedback_response import DescribeFeedbackResponse, DescribeFeedbackResponseDict
from ..models.feedback_request import FeedbackRequest, FeedbackRequestDict
from ..server.server import Server


class FeedbackApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FeedbackApiWithRawResponse(client, server, auth)

    def describe_feedback(
        self,
        *,
        body: FeedbackRequest | FeedbackRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DescribeFeedbackResponse:
        """Returns the most recent feedback submitted in the current Amazon Web Services account and Region.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(self._with_raw_response.describe_feedback(body=body, request_options=request_options))

    def put_feedback(
        self,
        *,
        body: DescribeFeedbackResponse | DescribeFeedbackResponseDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Collects customer feedback about the specified insight.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ResourceNotFoundException
                ThrottlingException ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ConflictException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(self._with_raw_response.put_feedback(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> FeedbackApiWithRawResponse:
        return self._with_raw_response


class AsyncFeedbackApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFeedbackApiWithRawResponse(client, server, auth)

    async def describe_feedback(
        self,
        *,
        body: FeedbackRequest | FeedbackRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DescribeFeedbackResponse:
        """Returns the most recent feedback submitted in the current Amazon Web Services account and Region.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException InternalServerException ResourceNotFoundException ThrottlingException
                ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ThrottlingException | InternalServerException | RawError``."""
        return unwrap(await self._with_raw_response.describe_feedback(body=body, request_options=request_options))

    async def put_feedback(
        self,
        *,
        body: DescribeFeedbackResponse | DescribeFeedbackResponseDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Collects customer feedback about the specified insight.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: AccessDeniedException ConflictException InternalServerException ResourceNotFoundException
                ThrottlingException ValidationException ``error`` is ``ValidationException | AccessDeniedException |
                ResourceNotFoundException | ConflictException | ThrottlingException | InternalServerException |
                RawError``."""
        return unwrap(await self._with_raw_response.put_feedback(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncFeedbackApiWithRawResponse:
        return self._with_raw_response


class FeedbackApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def describe_feedback(
        self,
        *,
        body: FeedbackRequest | FeedbackRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeFeedbackResponse, DescribeFeedbackErrorBody]:
        """Returns the most recent feedback submitted in the current Amazon Web Services account and Region.

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
            body=json_body[FeedbackRequest | FeedbackRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[DescribeFeedbackResponse],
            error_mapper=describe_feedback_error_mapper,
            request_options=request_options,
        )

    def put_feedback(
        self,
        *,
        body: DescribeFeedbackResponse | DescribeFeedbackResponseDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, PutFeedbackErrorBody]:
        """Collects customer feedback about the specified insight.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/feedback"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DescribeFeedbackResponse | DescribeFeedbackResponseDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=put_feedback_error_mapper,
            request_options=request_options,
        )


class AsyncFeedbackApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def describe_feedback(
        self,
        *,
        body: FeedbackRequest | FeedbackRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DescribeFeedbackResponse, DescribeFeedbackErrorBody]:
        """Returns the most recent feedback submitted in the current Amazon Web Services account and Region.

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
            body=json_body[FeedbackRequest | FeedbackRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[DescribeFeedbackResponse],
            error_mapper=describe_feedback_error_mapper,
            request_options=request_options,
        )

    async def put_feedback(
        self,
        *,
        body: DescribeFeedbackResponse | DescribeFeedbackResponseDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, PutFeedbackErrorBody]:
        """Collects customer feedback about the specified insight.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/feedback"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DescribeFeedbackResponse | DescribeFeedbackResponseDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=put_feedback_error_mapper,
            request_options=request_options,
        )
