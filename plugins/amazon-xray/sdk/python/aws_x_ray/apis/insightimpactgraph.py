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
from ..errors.get_insight_impact_graph_error import (
    GetInsightImpactGraphErrorBody,
    get_insight_impact_graph_error_mapper,
)
from ..models.get_insight_impact_graph_result import GetInsightImpactGraphResult
from ..models.insight_impact_graph_request import InsightImpactGraphRequest, InsightImpactGraphRequestDict
from ..server.server import Server


class Insightimpactgraph:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InsightimpactgraphWithRawResponse(client, server, auth)

    def get_insight_impact_graph(
        self,
        *,
        body: InsightImpactGraphRequest | InsightImpactGraphRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetInsightImpactGraphResult:
        """Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only
        structural information. For a complete service graph, use this API with the GetServiceGraph API.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.get_insight_impact_graph(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> InsightimpactgraphWithRawResponse:
        return self._with_raw_response


class AsyncInsightimpactgraph:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInsightimpactgraphWithRawResponse(client, server, auth)

    async def get_insight_impact_graph(
        self,
        *,
        body: InsightImpactGraphRequest | InsightImpactGraphRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetInsightImpactGraphResult:
        """Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only
        structural information. For a complete service graph, use this API with the GetServiceGraph API.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(
            await self._with_raw_response.get_insight_impact_graph(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncInsightimpactgraphWithRawResponse:
        return self._with_raw_response


class InsightimpactgraphWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_insight_impact_graph(
        self,
        *,
        body: InsightImpactGraphRequest | InsightImpactGraphRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetInsightImpactGraphResult, GetInsightImpactGraphErrorBody]:
        """Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only
        structural information. For a complete service graph, use this API with the GetServiceGraph API.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/InsightImpactGraph"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InsightImpactGraphRequest | InsightImpactGraphRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetInsightImpactGraphResult],
            error_mapper=get_insight_impact_graph_error_mapper,
            request_options=request_options,
        )


class AsyncInsightimpactgraphWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_insight_impact_graph(
        self,
        *,
        body: InsightImpactGraphRequest | InsightImpactGraphRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetInsightImpactGraphResult, GetInsightImpactGraphErrorBody]:
        """Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only
        structural information. For a complete service graph, use this API with the GetServiceGraph API.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/InsightImpactGraph"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InsightImpactGraphRequest | InsightImpactGraphRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetInsightImpactGraphResult],
            error_mapper=get_insight_impact_graph_error_mapper,
            request_options=request_options,
        )
