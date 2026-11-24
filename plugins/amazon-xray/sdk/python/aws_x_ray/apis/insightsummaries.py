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
from ..errors.get_insight_summaries_error import GetInsightSummariesErrorBody, get_insight_summaries_error_mapper
from ..models.get_insight_summaries_result import GetInsightSummariesResult
from ..models.insight_summaries_request import InsightSummariesRequest, InsightSummariesRequestDict
from ..server.server import Server


class Insightsummaries:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InsightsummariesWithRawResponse(client, server, auth)

    def get_insight_summaries(
        self,
        *,
        body: InsightSummariesRequest | InsightSummariesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetInsightSummariesResult:
        """Retrieves the summaries of all insights in the specified group matching the provided filter values.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.get_insight_summaries(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> InsightsummariesWithRawResponse:
        return self._with_raw_response


class AsyncInsightsummaries:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInsightsummariesWithRawResponse(client, server, auth)

    async def get_insight_summaries(
        self,
        *,
        body: InsightSummariesRequest | InsightSummariesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetInsightSummariesResult:
        """Retrieves the summaries of all insights in the specified group matching the provided filter values.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.get_insight_summaries(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncInsightsummariesWithRawResponse:
        return self._with_raw_response


class InsightsummariesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_insight_summaries(
        self,
        *,
        body: InsightSummariesRequest | InsightSummariesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetInsightSummariesResult, GetInsightSummariesErrorBody]:
        """Retrieves the summaries of all insights in the specified group matching the provided filter values.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/InsightSummaries"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InsightSummariesRequest | InsightSummariesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetInsightSummariesResult],
            error_mapper=get_insight_summaries_error_mapper,
            request_options=request_options,
        )


class AsyncInsightsummariesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_insight_summaries(
        self,
        *,
        body: InsightSummariesRequest | InsightSummariesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetInsightSummariesResult, GetInsightSummariesErrorBody]:
        """Retrieves the summaries of all insights in the specified group matching the provided filter values.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/InsightSummaries"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InsightSummariesRequest | InsightSummariesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetInsightSummariesResult],
            error_mapper=get_insight_summaries_error_mapper,
            request_options=request_options,
        )
