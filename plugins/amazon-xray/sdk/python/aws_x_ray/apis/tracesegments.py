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
from ..errors.put_trace_segments_error import PutTraceSegmentsErrorBody, put_trace_segments_error_mapper
from ..models.put_trace_segments_result import PutTraceSegmentsResult
from ..models.trace_segments_request import TraceSegmentsRequest, TraceSegmentsRequestDict
from ..server.server import Server


class Tracesegments:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TracesegmentsWithRawResponse(client, server, auth)

    def put_trace_segments(
        self,
        *,
        body: TraceSegmentsRequest | TraceSegmentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PutTraceSegmentsResult:
        """Uploads segment documents to Amazon Web Services X-Ray. A segment document can be a completed segment, an
        in-progress segment, or an array of subsegments. Segments must include the following fields. For the full
        segment document schema, see Amazon Web Services X-Ray Segment Documents in the Amazon Web Services X-Ray
        Developer Guide. Required segment document fields name - The name of the service that handled the request. id -
        A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits. trace_id
        - A unique identifier that connects all segments and subsegments originating from a single client request.
        start_time - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to
        milliseconds. For example, 1480615200.010 or 1.480615200010E9. end_time - Time the segment or subsegment was
        closed. For example, 1480615200.090 or 1.480615200090E9. Specify either an end_time or in_progress. in_progress
        - Set to true instead of specifying an end_time to record that a segment has been started, but is not complete.
        Send an in-progress segment when your application receives a request that will take a long time to serve, t

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.put_trace_segments(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> TracesegmentsWithRawResponse:
        return self._with_raw_response


class AsyncTracesegments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTracesegmentsWithRawResponse(client, server, auth)

    async def put_trace_segments(
        self,
        *,
        body: TraceSegmentsRequest | TraceSegmentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PutTraceSegmentsResult:
        """Uploads segment documents to Amazon Web Services X-Ray. A segment document can be a completed segment, an
        in-progress segment, or an array of subsegments. Segments must include the following fields. For the full
        segment document schema, see Amazon Web Services X-Ray Segment Documents in the Amazon Web Services X-Ray
        Developer Guide. Required segment document fields name - The name of the service that handled the request. id -
        A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits. trace_id
        - A unique identifier that connects all segments and subsegments originating from a single client request.
        start_time - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to
        milliseconds. For example, 1480615200.010 or 1.480615200010E9. end_time - Time the segment or subsegment was
        closed. For example, 1480615200.090 or 1.480615200090E9. Specify either an end_time or in_progress. in_progress
        - Set to true instead of specifying an end_time to record that a segment has been started, but is not complete.
        Send an in-progress segment when your application receives a request that will take a long time to serve, t

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.put_trace_segments(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTracesegmentsWithRawResponse:
        return self._with_raw_response


class TracesegmentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def put_trace_segments(
        self,
        *,
        body: TraceSegmentsRequest | TraceSegmentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PutTraceSegmentsResult, PutTraceSegmentsErrorBody]:
        """Uploads segment documents to Amazon Web Services X-Ray. A segment document can be a completed segment, an
        in-progress segment, or an array of subsegments. Segments must include the following fields. For the full
        segment document schema, see Amazon Web Services X-Ray Segment Documents in the Amazon Web Services X-Ray
        Developer Guide. Required segment document fields name - The name of the service that handled the request. id -
        A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits. trace_id
        - A unique identifier that connects all segments and subsegments originating from a single client request.
        start_time - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to
        milliseconds. For example, 1480615200.010 or 1.480615200010E9. end_time - Time the segment or subsegment was
        closed. For example, 1480615200.090 or 1.480615200090E9. Specify either an end_time or in_progress. in_progress
        - Set to true instead of specifying an end_time to record that a segment has been started, but is not complete.
        Send an in-progress segment when your application receives a request that will take a long time to serve, t

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/TraceSegments"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TraceSegmentsRequest | TraceSegmentsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[PutTraceSegmentsResult],
            error_mapper=put_trace_segments_error_mapper,
            request_options=request_options,
        )


class AsyncTracesegmentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def put_trace_segments(
        self,
        *,
        body: TraceSegmentsRequest | TraceSegmentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PutTraceSegmentsResult, PutTraceSegmentsErrorBody]:
        """Uploads segment documents to Amazon Web Services X-Ray. A segment document can be a completed segment, an
        in-progress segment, or an array of subsegments. Segments must include the following fields. For the full
        segment document schema, see Amazon Web Services X-Ray Segment Documents in the Amazon Web Services X-Ray
        Developer Guide. Required segment document fields name - The name of the service that handled the request. id -
        A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits. trace_id
        - A unique identifier that connects all segments and subsegments originating from a single client request.
        start_time - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to
        milliseconds. For example, 1480615200.010 or 1.480615200010E9. end_time - Time the segment or subsegment was
        closed. For example, 1480615200.090 or 1.480615200090E9. Specify either an end_time or in_progress. in_progress
        - Set to true instead of specifying an end_time to record that a segment has been started, but is not complete.
        Send an in-progress segment when your application receives a request that will take a long time to serve, t

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/TraceSegments"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TraceSegmentsRequest | TraceSegmentsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[PutTraceSegmentsResult],
            error_mapper=put_trace_segments_error_mapper,
            request_options=request_options,
        )
