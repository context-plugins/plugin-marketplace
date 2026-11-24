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
from ..errors.batch_get_traces_error import BatchGetTracesErrorBody, batch_get_traces_error_mapper
from ..errors.get_trace_summaries_error import GetTraceSummariesErrorBody, get_trace_summaries_error_mapper
from ..models.batch_get_traces_result import BatchGetTracesResult
from ..models.get_trace_summaries_result import GetTraceSummariesResult
from ..models.trace_summaries_request import TraceSummariesRequest, TraceSummariesRequestDict
from ..models.traces_request import TracesRequest, TracesRequestDict
from ..server.server import Server


class Traces:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TracesWithRawResponse(client, server, auth)

    def batch_get_traces(
        self,
        *,
        body: TracesRequest | TracesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BatchGetTracesResult:
        """You cannot find traces through this API if Transaction Search is enabled since trace is not indexed in X-Ray.
        Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from
        a single request. Use GetTraceSummaries to get a list of trace IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.batch_get_traces(body=body, request_options=request_options))

    def get_trace_summaries(
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
        return unwrap(self._with_raw_response.get_trace_summaries(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> TracesWithRawResponse:
        return self._with_raw_response


class AsyncTraces:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTracesWithRawResponse(client, server, auth)

    async def batch_get_traces(
        self,
        *,
        body: TracesRequest | TracesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BatchGetTracesResult:
        """You cannot find traces through this API if Transaction Search is enabled since trace is not indexed in X-Ray.
        Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from
        a single request. Use GetTraceSummaries to get a list of trace IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.batch_get_traces(body=body, request_options=request_options))

    async def get_trace_summaries(
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
        return unwrap(await self._with_raw_response.get_trace_summaries(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTracesWithRawResponse:
        return self._with_raw_response


class TracesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def batch_get_traces(
        self,
        *,
        body: TracesRequest | TracesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchGetTracesResult, BatchGetTracesErrorBody]:
        """You cannot find traces through this API if Transaction Search is enabled since trace is not indexed in X-Ray.
        Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from
        a single request. Use GetTraceSummaries to get a list of trace IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Traces"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TracesRequest | TracesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[BatchGetTracesResult],
            error_mapper=batch_get_traces_error_mapper,
            request_options=request_options,
        )

    def get_trace_summaries(
        self,
        *,
        body: TraceSummariesRequest | TraceSummariesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetTraceSummariesResult, GetTraceSummariesErrorBody]:
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
            error_mapper=get_trace_summaries_error_mapper,
            request_options=request_options,
        )


class AsyncTracesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def batch_get_traces(
        self,
        *,
        body: TracesRequest | TracesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchGetTracesResult, BatchGetTracesErrorBody]:
        """You cannot find traces through this API if Transaction Search is enabled since trace is not indexed in X-Ray.
        Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from
        a single request. Use GetTraceSummaries to get a list of trace IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/Traces"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TracesRequest | TracesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[BatchGetTracesResult],
            error_mapper=batch_get_traces_error_mapper,
            request_options=request_options,
        )

    async def get_trace_summaries(
        self,
        *,
        body: TraceSummariesRequest | TraceSummariesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetTraceSummariesResult, GetTraceSummariesErrorBody]:
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
            error_mapper=get_trace_summaries_error_mapper,
            request_options=request_options,
        )
