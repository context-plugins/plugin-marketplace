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
from ..errors.get_insight_error import GetInsightErrorBody, get_insight_error_mapper
from ..models.get_insight_result import GetInsightResult
from ..models.insight_request import InsightRequest, InsightRequestDict
from ..server.server import Server


class InsightApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InsightApiWithRawResponse(client, server, auth)

    def get_insight(
        self,
        *,
        body: InsightRequest | InsightRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetInsightResult:
        """Retrieves the summary information of an insight. This includes impact to clients and root cause services, the
        top anomalous services, the category, the state of the insight, and the start and end time of the insight.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.get_insight(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> InsightApiWithRawResponse:
        return self._with_raw_response


class AsyncInsightApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInsightApiWithRawResponse(client, server, auth)

    async def get_insight(
        self,
        *,
        body: InsightRequest | InsightRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetInsightResult:
        """Retrieves the summary information of an insight. This includes impact to clients and root cause services, the
        top anomalous services, the category, the state of the insight, and the start and end time of the insight.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.get_insight(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncInsightApiWithRawResponse:
        return self._with_raw_response


class InsightApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_insight(
        self,
        *,
        body: InsightRequest | InsightRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetInsightResult, GetInsightErrorBody]:
        """Retrieves the summary information of an insight. This includes impact to clients and root cause services, the
        top anomalous services, the category, the state of the insight, and the start and end time of the insight.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Insight"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InsightRequest | InsightRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetInsightResult],
            error_mapper=get_insight_error_mapper,
            request_options=request_options,
        )


class AsyncInsightApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_insight(
        self,
        *,
        body: InsightRequest | InsightRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetInsightResult, GetInsightErrorBody]:
        """Retrieves the summary information of an insight. This includes impact to clients and root cause services, the
        top anomalous services, the category, the state of the insight, and the start and end time of the insight.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Insight"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InsightRequest | InsightRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetInsightResult],
            error_mapper=get_insight_error_mapper,
            request_options=request_options,
        )
