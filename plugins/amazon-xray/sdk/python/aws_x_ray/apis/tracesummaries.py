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
from ..errors.get_trace_summaries2_error import GetTraceSummaries2ErrorBody, get_trace_summaries2_error_mapper
from ..models.get_trace_summaries_result import GetTraceSummariesResult
from ..models.trace_summaries_request import TraceSummariesRequest, TraceSummariesRequestDict
from ..server.server import Server


class Tracesummaries:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TracesummariesWithRawResponse(client, server, auth)

    def get_trace_summaries2(
        self,
        *,
        body: TraceSummariesRequest | TraceSummariesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetTraceSummariesResult:
        """Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To
        get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can target traced requests that
        hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter
        expression targets traces that pass through api.example.com: service("api.example.com") This filter expression
        finds traces that have an annotation named account with the value 12345: annotation.account = "12345" For a full
        list of indexed fields and keywords that you can use in filter expressions, see Use filter expressions in the
        Amazon Web Services X-Ray Developer Guide.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.get_trace_summaries2(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> TracesummariesWithRawResponse:
        return self._with_raw_response


class AsyncTracesummaries:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTracesummariesWithRawResponse(client, server, auth)

    async def get_trace_summaries2(
        self,
        *,
        body: TraceSummariesRequest | TraceSummariesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetTraceSummariesResult:
        """Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To
        get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can target traced requests that
        hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter
        expression targets traces that pass through api.example.com: service("api.example.com") This filter expression
        finds traces that have an annotation named account with the value 12345: annotation.account = "12345" For a full
        list of indexed fields and keywords that you can use in filter expressions, see Use filter expressions in the
        Amazon Web Services X-Ray Developer Guide.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.get_trace_summaries2(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTracesummariesWithRawResponse:
        return self._with_raw_response


class TracesummariesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_trace_summaries2(
        self,
        *,
        body: TraceSummariesRequest | TraceSummariesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetTraceSummariesResult, GetTraceSummaries2ErrorBody]:
        """Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To
        get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can target traced requests that
        hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter
        expression targets traces that pass through api.example.com: service("api.example.com") This filter expression
        finds traces that have an annotation named account with the value 12345: annotation.account = "12345" For a full
        list of indexed fields and keywords that you can use in filter expressions, see Use filter expressions in the
        Amazon Web Services X-Ray Developer Guide.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/TraceSummaries"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TraceSummariesRequest | TraceSummariesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetTraceSummariesResult],
            error_mapper=get_trace_summaries2_error_mapper,
            request_options=request_options,
        )


class AsyncTracesummariesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_trace_summaries2(
        self,
        *,
        body: TraceSummariesRequest | TraceSummariesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetTraceSummariesResult, GetTraceSummaries2ErrorBody]:
        """Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To
        get the full traces, pass the trace IDs to BatchGetTraces. A filter expression can target traced requests that
        hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter
        expression targets traces that pass through api.example.com: service("api.example.com") This filter expression
        finds traces that have an annotation named account with the value 12345: annotation.account = "12345" For a full
        list of indexed fields and keywords that you can use in filter expressions, see Use filter expressions in the
        Amazon Web Services X-Ray Developer Guide.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/TraceSummaries"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TraceSummariesRequest | TraceSummariesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetTraceSummariesResult],
            error_mapper=get_trace_summaries2_error_mapper,
            request_options=request_options,
        )
