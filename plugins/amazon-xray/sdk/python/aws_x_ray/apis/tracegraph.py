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
from ..errors.get_trace_graph_error import GetTraceGraphErrorBody, get_trace_graph_error_mapper
from ..models.get_trace_graph_result import GetTraceGraphResult
from ..models.trace_graph_request import TraceGraphRequest, TraceGraphRequestDict
from ..server.server import Server


class Tracegraph:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TracegraphWithRawResponse(client, server, auth)

    def get_trace_graph(
        self,
        *,
        body: TraceGraphRequest | TraceGraphRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetTraceGraphResult:
        """Retrieves a service graph for one or more specific trace IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.get_trace_graph(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> TracegraphWithRawResponse:
        return self._with_raw_response


class AsyncTracegraph:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTracegraphWithRawResponse(client, server, auth)

    async def get_trace_graph(
        self,
        *,
        body: TraceGraphRequest | TraceGraphRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetTraceGraphResult:
        """Retrieves a service graph for one or more specific trace IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.get_trace_graph(body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTracegraphWithRawResponse:
        return self._with_raw_response


class TracegraphWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_trace_graph(
        self,
        *,
        body: TraceGraphRequest | TraceGraphRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetTraceGraphResult, GetTraceGraphErrorBody]:
        """Retrieves a service graph for one or more specific trace IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/TraceGraph"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TraceGraphRequest | TraceGraphRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetTraceGraphResult],
            error_mapper=get_trace_graph_error_mapper,
            request_options=request_options,
        )


class AsyncTracegraphWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_trace_graph(
        self,
        *,
        body: TraceGraphRequest | TraceGraphRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetTraceGraphResult, GetTraceGraphErrorBody]:
        """Retrieves a service graph for one or more specific trace IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/TraceGraph"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TraceGraphRequest | TraceGraphRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetTraceGraphResult],
            error_mapper=get_trace_graph_error_mapper,
            request_options=request_options,
        )
