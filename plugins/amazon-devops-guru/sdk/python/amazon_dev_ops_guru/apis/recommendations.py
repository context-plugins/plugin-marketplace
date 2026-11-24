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
from ..errors.list_recommendations_error import ListRecommendationsErrorBody, list_recommendations_error_mapper
from ..models.list_recommendations_response import ListRecommendationsResponse
from ..models.recommendations_request import RecommendationsRequest, RecommendationsRequestDict
from ..server.server import Server


class Recommendations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RecommendationsWithRawResponse(client, server, auth)

    def list_recommendations(
        self,
        *,
        body: RecommendationsRequest | RecommendationsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListRecommendationsResponse:
        """Returns a list of a specified insight's recommendations. Each recommendation includes a list of related
        metrics and a list of related events.

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
        return unwrap(self._with_raw_response.list_recommendations(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> RecommendationsWithRawResponse:
        return self._with_raw_response


class AsyncRecommendations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRecommendationsWithRawResponse(client, server, auth)

    async def list_recommendations(
        self,
        *,
        body: RecommendationsRequest | RecommendationsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListRecommendationsResponse:
        """Returns a list of a specified insight's recommendations. Each recommendation includes a list of related
        metrics and a list of related events.

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
        return unwrap(await self._with_raw_response.list_recommendations(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncRecommendationsWithRawResponse:
        return self._with_raw_response


class RecommendationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_recommendations(
        self,
        *,
        body: RecommendationsRequest | RecommendationsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListRecommendationsResponse, ListRecommendationsErrorBody]:
        """Returns a list of a specified insight's recommendations. Each recommendation includes a list of related
        metrics and a list of related events.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/recommendations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecommendationsRequest | RecommendationsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListRecommendationsResponse],
            error_mapper=list_recommendations_error_mapper,
            request_options=request_options,
        )


class AsyncRecommendationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_recommendations(
        self,
        *,
        body: RecommendationsRequest | RecommendationsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListRecommendationsResponse, ListRecommendationsErrorBody]:
        """Returns a list of a specified insight's recommendations. Each recommendation includes a list of related
        metrics and a list of related events.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/recommendations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecommendationsRequest | RecommendationsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListRecommendationsResponse],
            error_mapper=list_recommendations_error_mapper,
            request_options=request_options,
        )
