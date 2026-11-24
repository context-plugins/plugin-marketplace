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
from ..errors.get_insight_events_error import GetInsightEventsErrorBody, get_insight_events_error_mapper
from ..models.get_insight_events_result import GetInsightEventsResult
from ..models.insight_events_request import InsightEventsRequest, InsightEventsRequestDict
from ..server.server import Server


class Insightevents:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InsighteventsWithRawResponse(client, server, auth)

    def get_insight_events(
        self,
        *,
        body: InsightEventsRequest | InsightEventsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetInsightEventsResult:
        """X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an
        event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.get_insight_events(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> InsighteventsWithRawResponse:
        return self._with_raw_response


class AsyncInsightevents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInsighteventsWithRawResponse(client, server, auth)

    async def get_insight_events(
        self,
        *,
        body: InsightEventsRequest | InsightEventsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetInsightEventsResult:
        """X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an
        event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.get_insight_events(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncInsighteventsWithRawResponse:
        return self._with_raw_response


class InsighteventsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_insight_events(
        self,
        *,
        body: InsightEventsRequest | InsightEventsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetInsightEventsResult, GetInsightEventsErrorBody]:
        """X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an
        event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/InsightEvents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InsightEventsRequest | InsightEventsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetInsightEventsResult],
            error_mapper=get_insight_events_error_mapper,
            request_options=request_options,
        )


class AsyncInsighteventsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_insight_events(
        self,
        *,
        body: InsightEventsRequest | InsightEventsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetInsightEventsResult, GetInsightEventsErrorBody]:
        """X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an
        event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/InsightEvents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InsightEventsRequest | InsightEventsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetInsightEventsResult],
            error_mapper=get_insight_events_error_mapper,
            request_options=request_options,
        )
