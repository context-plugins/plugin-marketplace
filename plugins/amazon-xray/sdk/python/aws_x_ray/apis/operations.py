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
from ..errors.cancel_trace_retrieval_error import CancelTraceRetrievalErrorBody, cancel_trace_retrieval_error_mapper
from ..errors.get_indexing_rules_error import GetIndexingRulesErrorBody, get_indexing_rules_error_mapper
from ..errors.get_retrieved_traces_graph_error import (
    GetRetrievedTracesGraphErrorBody,
    get_retrieved_traces_graph_error_mapper,
)
from ..errors.get_trace_segment_destination_error import (
    GetTraceSegmentDestinationErrorBody,
    get_trace_segment_destination_error_mapper,
)
from ..errors.list_retrieved_traces_error import ListRetrievedTracesErrorBody, list_retrieved_traces_error_mapper
from ..errors.start_trace_retrieval_error import StartTraceRetrievalErrorBody, start_trace_retrieval_error_mapper
from ..errors.update_indexing_rule_error import UpdateIndexingRuleErrorBody, update_indexing_rule_error_mapper
from ..errors.update_trace_segment_destination_error import (
    UpdateTraceSegmentDestinationErrorBody,
    update_trace_segment_destination_error_mapper,
)
from ..models.cancel_trace_retrieval_request import CancelTraceRetrievalRequest, CancelTraceRetrievalRequestDict
from ..models.get_indexing_rules_request import GetIndexingRulesRequest, GetIndexingRulesRequestDict
from ..models.get_indexing_rules_result import GetIndexingRulesResult
from ..models.get_retrieved_traces_graph_request import (
    GetRetrievedTracesGraphRequest,
    GetRetrievedTracesGraphRequestDict,
)
from ..models.get_retrieved_traces_graph_result import GetRetrievedTracesGraphResult
from ..models.get_trace_segment_destination_result import GetTraceSegmentDestinationResult
from ..models.list_retrieved_traces_request import ListRetrievedTracesRequest, ListRetrievedTracesRequestDict
from ..models.list_retrieved_traces_result import ListRetrievedTracesResult
from ..models.start_trace_retrieval_request import StartTraceRetrievalRequest, StartTraceRetrievalRequestDict
from ..models.start_trace_retrieval_result import StartTraceRetrievalResult
from ..models.update_indexing_rule_request import UpdateIndexingRuleRequest, UpdateIndexingRuleRequestDict
from ..models.update_indexing_rule_result import UpdateIndexingRuleResult
from ..models.update_trace_segment_destination_request import (
    UpdateTraceSegmentDestinationRequest,
    UpdateTraceSegmentDestinationRequestDict,
)
from ..models.update_trace_segment_destination_result import UpdateTraceSegmentDestinationResult
from ..server.server import Server


class Operations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OperationsWithRawResponse(client, server, auth)

    def cancel_trace_retrieval(
        self,
        *,
        body: CancelTraceRetrievalRequest | CancelTraceRetrievalRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Cancels an ongoing trace retrieval job initiated by StartTraceRetrieval using the provided RetrievalToken. A
        successful cancellation will return an HTTP 200 response.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ResourceNotFoundException ThrottledException ``error`` is
                ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.cancel_trace_retrieval(body=body, request_options=request_options))

    def get_indexing_rules(
        self,
        *,
        body: GetIndexingRulesRequest | GetIndexingRulesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetIndexingRulesResult:
        """Retrieves all indexing rules. Indexing rules are used to determine the server-side sampling rate for spans
        ingested through the CloudWatchLogs destination and indexed by X-Ray. For more information, see Transaction
        Search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.get_indexing_rules(body=body, request_options=request_options))

    def get_retrieved_traces_graph(
        self,
        *,
        body: GetRetrievedTracesGraphRequest | GetRetrievedTracesGraphRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetRetrievedTracesGraphResult:
        """Retrieves a service graph for traces based on the specified RetrievalToken from the CloudWatch log group
        generated by Transaction Search. This API does not initiate a retrieval job. You must first execute
        StartTraceRetrieval to obtain the required RetrievalToken. The trace graph describes services that process
        incoming requests and any downstream services they call, which may include Amazon Web Services resources,
        external APIs, or databases. The response is empty until the RetrievalStatus is COMPLETE. Retry the request
        after the status changes from RUNNING or SCHEDULED to COMPLETE to access the full service graph. When CloudWatch
        log is the destination, this API can support cross-account observability and service graph retrieval across
        linked accounts. For retrieving graphs from X-Ray directly as opposed to the Transaction-Search Log group, see
        GetTraceGraph.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ResourceNotFoundException ThrottledException ``error`` is
                ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.get_retrieved_traces_graph(body=body, request_options=request_options))

    def get_trace_segment_destination(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetTraceSegmentDestinationResult:
        """Retrieves the current destination of data sent to PutTraceSegments and OpenTelemetry protocol (OTLP)
        endpoint. The Transaction Search feature requires a CloudWatchLogs destination. For more information, see
        Transaction Search and OpenTelemetry.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.get_trace_segment_destination(request_options=request_options))

    def list_retrieved_traces(
        self,
        *,
        body: ListRetrievedTracesRequest | ListRetrievedTracesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListRetrievedTracesResult:
        """Retrieves a list of traces for a given RetrievalToken from the CloudWatch log group generated by Transaction
        Search. For information on what each trace returns, see BatchGetTraces. This API does not initiate a retrieval
        process. To start a trace retrieval, use StartTraceRetrieval, which generates the required RetrievalToken. When
        the RetrievalStatus is not COMPLETE, the API will return an empty response. Retry the request once the retrieval
        has completed to access the full list of traces. For cross-account observability, this API can retrieve traces
        from linked accounts when CloudWatch log is set as the destination across relevant accounts. For more details,
        see CloudWatch cross-account observability. For retrieving data from X-Ray directly as opposed to the
        Transaction Search generated log group, see BatchGetTraces.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ResourceNotFoundException ThrottledException ``error`` is
                ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.list_retrieved_traces(body=body, request_options=request_options))

    def start_trace_retrieval(
        self,
        *,
        body: StartTraceRetrievalRequest | StartTraceRetrievalRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartTraceRetrievalResult:
        """Initiates a trace retrieval process using the specified time range and for the given trace IDs in the
        Transaction Search generated CloudWatch log group. For more information, see Transaction Search. API returns a
        RetrievalToken, which can be used with ListRetrievedTraces or GetRetrievedTracesGraph to fetch results.
        Retrievals will time out after 60 minutes. To execute long time ranges, consider segmenting into multiple
        retrievals. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring
        account to retrieve data from a linked source account, as long as both accounts have transaction search enabled.
        For retrieving data from X-Ray directly as opposed to the Transaction-Search Log group, see BatchGetTraces.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ResourceNotFoundException ThrottledException ``error`` is
                ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.start_trace_retrieval(body=body, request_options=request_options))

    def update_indexing_rule(
        self,
        *,
        body: UpdateIndexingRuleRequest | UpdateIndexingRuleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateIndexingRuleResult:
        """Modifies an indexing rule’s configuration. Indexing rules are used for determining the sampling rate for
        spans indexed from CloudWatch Logs. For more information, see Transaction Search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ResourceNotFoundException ThrottledException ``error`` is
                ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(self._with_raw_response.update_indexing_rule(body=body, request_options=request_options))

    def update_trace_segment_destination(
        self,
        *,
        body: UpdateTraceSegmentDestinationRequest | UpdateTraceSegmentDestinationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateTraceSegmentDestinationResult:
        """Modifies the destination of data sent to PutTraceSegments. The Transaction Search feature requires the
        CloudWatchLogs destination. For more information, see Transaction Search.

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
            self._with_raw_response.update_trace_segment_destination(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> OperationsWithRawResponse:
        return self._with_raw_response


class AsyncOperations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOperationsWithRawResponse(client, server, auth)

    async def cancel_trace_retrieval(
        self,
        *,
        body: CancelTraceRetrievalRequest | CancelTraceRetrievalRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Cancels an ongoing trace retrieval job initiated by StartTraceRetrieval using the provided RetrievalToken. A
        successful cancellation will return an HTTP 200 response.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ResourceNotFoundException ThrottledException ``error`` is
                ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.cancel_trace_retrieval(body=body, request_options=request_options))

    async def get_indexing_rules(
        self,
        *,
        body: GetIndexingRulesRequest | GetIndexingRulesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetIndexingRulesResult:
        """Retrieves all indexing rules. Indexing rules are used to determine the server-side sampling rate for spans
        ingested through the CloudWatchLogs destination and indexed by X-Ray. For more information, see Transaction
        Search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.get_indexing_rules(body=body, request_options=request_options))

    async def get_retrieved_traces_graph(
        self,
        *,
        body: GetRetrievedTracesGraphRequest | GetRetrievedTracesGraphRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetRetrievedTracesGraphResult:
        """Retrieves a service graph for traces based on the specified RetrievalToken from the CloudWatch log group
        generated by Transaction Search. This API does not initiate a retrieval job. You must first execute
        StartTraceRetrieval to obtain the required RetrievalToken. The trace graph describes services that process
        incoming requests and any downstream services they call, which may include Amazon Web Services resources,
        external APIs, or databases. The response is empty until the RetrievalStatus is COMPLETE. Retry the request
        after the status changes from RUNNING or SCHEDULED to COMPLETE to access the full service graph. When CloudWatch
        log is the destination, this API can support cross-account observability and service graph retrieval across
        linked accounts. For retrieving graphs from X-Ray directly as opposed to the Transaction-Search Log group, see
        GetTraceGraph.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ResourceNotFoundException ThrottledException ``error`` is
                ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(
            await self._with_raw_response.get_retrieved_traces_graph(body=body, request_options=request_options)
        )

    async def get_trace_segment_destination(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetTraceSegmentDestinationResult:
        """Retrieves the current destination of data sent to PutTraceSegments and OpenTelemetry protocol (OTLP)
        endpoint. The Transaction Search feature requires a CloudWatchLogs destination. For more information, see
        Transaction Search and OpenTelemetry.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ThrottledException ``error`` is ``InvalidRequestException |
                ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.get_trace_segment_destination(request_options=request_options))

    async def list_retrieved_traces(
        self,
        *,
        body: ListRetrievedTracesRequest | ListRetrievedTracesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListRetrievedTracesResult:
        """Retrieves a list of traces for a given RetrievalToken from the CloudWatch log group generated by Transaction
        Search. For information on what each trace returns, see BatchGetTraces. This API does not initiate a retrieval
        process. To start a trace retrieval, use StartTraceRetrieval, which generates the required RetrievalToken. When
        the RetrievalStatus is not COMPLETE, the API will return an empty response. Retry the request once the retrieval
        has completed to access the full list of traces. For cross-account observability, this API can retrieve traces
        from linked accounts when CloudWatch log is set as the destination across relevant accounts. For more details,
        see CloudWatch cross-account observability. For retrieving data from X-Ray directly as opposed to the
        Transaction Search generated log group, see BatchGetTraces.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ResourceNotFoundException ThrottledException ``error`` is
                ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.list_retrieved_traces(body=body, request_options=request_options))

    async def start_trace_retrieval(
        self,
        *,
        body: StartTraceRetrievalRequest | StartTraceRetrievalRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartTraceRetrievalResult:
        """Initiates a trace retrieval process using the specified time range and for the given trace IDs in the
        Transaction Search generated CloudWatch log group. For more information, see Transaction Search. API returns a
        RetrievalToken, which can be used with ListRetrievedTraces or GetRetrievedTracesGraph to fetch results.
        Retrievals will time out after 60 minutes. To execute long time ranges, consider segmenting into multiple
        retrievals. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring
        account to retrieve data from a linked source account, as long as both accounts have transaction search enabled.
        For retrieving data from X-Ray directly as opposed to the Transaction-Search Log group, see BatchGetTraces.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ResourceNotFoundException ThrottledException ``error`` is
                ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.start_trace_retrieval(body=body, request_options=request_options))

    async def update_indexing_rule(
        self,
        *,
        body: UpdateIndexingRuleRequest | UpdateIndexingRuleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateIndexingRuleResult:
        """Modifies an indexing rule’s configuration. Indexing rules are used for determining the sampling rate for
        spans indexed from CloudWatch Logs. For more information, see Transaction Search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: InvalidRequestException ResourceNotFoundException ThrottledException ``error`` is
                ``InvalidRequestException | ResourceNotFoundException | ThrottledException | RawError``."""
        return unwrap(await self._with_raw_response.update_indexing_rule(body=body, request_options=request_options))

    async def update_trace_segment_destination(
        self,
        *,
        body: UpdateTraceSegmentDestinationRequest | UpdateTraceSegmentDestinationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateTraceSegmentDestinationResult:
        """Modifies the destination of data sent to PutTraceSegments. The Transaction Search feature requires the
        CloudWatchLogs destination. For more information, see Transaction Search.

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
            await self._with_raw_response.update_trace_segment_destination(body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncOperationsWithRawResponse:
        return self._with_raw_response


class OperationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_trace_retrieval(
        self,
        *,
        body: CancelTraceRetrievalRequest | CancelTraceRetrievalRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CancelTraceRetrievalErrorBody]:
        """Cancels an ongoing trace retrieval job initiated by StartTraceRetrieval using the provided RetrievalToken. A
        successful cancellation will return an HTTP 200 response.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/CancelTraceRetrieval"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CancelTraceRetrievalRequest | CancelTraceRetrievalRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=cancel_trace_retrieval_error_mapper,
            request_options=request_options,
        )

    def get_indexing_rules(
        self,
        *,
        body: GetIndexingRulesRequest | GetIndexingRulesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetIndexingRulesResult, GetIndexingRulesErrorBody]:
        """Retrieves all indexing rules. Indexing rules are used to determine the server-side sampling rate for spans
        ingested through the CloudWatchLogs destination and indexed by X-Ray. For more information, see Transaction
        Search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/GetIndexingRules"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetIndexingRulesRequest | GetIndexingRulesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetIndexingRulesResult],
            error_mapper=get_indexing_rules_error_mapper,
            request_options=request_options,
        )

    def get_retrieved_traces_graph(
        self,
        *,
        body: GetRetrievedTracesGraphRequest | GetRetrievedTracesGraphRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetRetrievedTracesGraphResult, GetRetrievedTracesGraphErrorBody]:
        """Retrieves a service graph for traces based on the specified RetrievalToken from the CloudWatch log group
        generated by Transaction Search. This API does not initiate a retrieval job. You must first execute
        StartTraceRetrieval to obtain the required RetrievalToken. The trace graph describes services that process
        incoming requests and any downstream services they call, which may include Amazon Web Services resources,
        external APIs, or databases. The response is empty until the RetrievalStatus is COMPLETE. Retry the request
        after the status changes from RUNNING or SCHEDULED to COMPLETE to access the full service graph. When CloudWatch
        log is the destination, this API can support cross-account observability and service graph retrieval across
        linked accounts. For retrieving graphs from X-Ray directly as opposed to the Transaction-Search Log group, see
        GetTraceGraph.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/GetRetrievedTracesGraph"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetRetrievedTracesGraphRequest | GetRetrievedTracesGraphRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetRetrievedTracesGraphResult],
            error_mapper=get_retrieved_traces_graph_error_mapper,
            request_options=request_options,
        )

    def get_trace_segment_destination(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetTraceSegmentDestinationResult, GetTraceSegmentDestinationErrorBody]:
        """Retrieves the current destination of data sent to PutTraceSegments and OpenTelemetry protocol (OTLP)
        endpoint. The Transaction Search feature requires a CloudWatchLogs destination. For more information, see
        Transaction Search and OpenTelemetry.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/GetTraceSegmentDestination"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetTraceSegmentDestinationResult],
            error_mapper=get_trace_segment_destination_error_mapper,
            request_options=request_options,
        )

    def list_retrieved_traces(
        self,
        *,
        body: ListRetrievedTracesRequest | ListRetrievedTracesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListRetrievedTracesResult, ListRetrievedTracesErrorBody]:
        """Retrieves a list of traces for a given RetrievalToken from the CloudWatch log group generated by Transaction
        Search. For information on what each trace returns, see BatchGetTraces. This API does not initiate a retrieval
        process. To start a trace retrieval, use StartTraceRetrieval, which generates the required RetrievalToken. When
        the RetrievalStatus is not COMPLETE, the API will return an empty response. Retry the request once the retrieval
        has completed to access the full list of traces. For cross-account observability, this API can retrieve traces
        from linked accounts when CloudWatch log is set as the destination across relevant accounts. For more details,
        see CloudWatch cross-account observability. For retrieving data from X-Ray directly as opposed to the
        Transaction Search generated log group, see BatchGetTraces.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ListRetrievedTraces"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListRetrievedTracesRequest | ListRetrievedTracesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListRetrievedTracesResult],
            error_mapper=list_retrieved_traces_error_mapper,
            request_options=request_options,
        )

    def start_trace_retrieval(
        self,
        *,
        body: StartTraceRetrievalRequest | StartTraceRetrievalRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartTraceRetrievalResult, StartTraceRetrievalErrorBody]:
        """Initiates a trace retrieval process using the specified time range and for the given trace IDs in the
        Transaction Search generated CloudWatch log group. For more information, see Transaction Search. API returns a
        RetrievalToken, which can be used with ListRetrievedTraces or GetRetrievedTracesGraph to fetch results.
        Retrievals will time out after 60 minutes. To execute long time ranges, consider segmenting into multiple
        retrievals. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring
        account to retrieve data from a linked source account, as long as both accounts have transaction search enabled.
        For retrieving data from X-Ray directly as opposed to the Transaction-Search Log group, see BatchGetTraces.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/StartTraceRetrieval"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartTraceRetrievalRequest | StartTraceRetrievalRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartTraceRetrievalResult],
            error_mapper=start_trace_retrieval_error_mapper,
            request_options=request_options,
        )

    def update_indexing_rule(
        self,
        *,
        body: UpdateIndexingRuleRequest | UpdateIndexingRuleRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateIndexingRuleResult, UpdateIndexingRuleErrorBody]:
        """Modifies an indexing rule’s configuration. Indexing rules are used for determining the sampling rate for
        spans indexed from CloudWatch Logs. For more information, see Transaction Search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/UpdateIndexingRule"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateIndexingRuleRequest | UpdateIndexingRuleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateIndexingRuleResult],
            error_mapper=update_indexing_rule_error_mapper,
            request_options=request_options,
        )

    def update_trace_segment_destination(
        self,
        *,
        body: UpdateTraceSegmentDestinationRequest | UpdateTraceSegmentDestinationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateTraceSegmentDestinationResult, UpdateTraceSegmentDestinationErrorBody]:
        """Modifies the destination of data sent to PutTraceSegments. The Transaction Search feature requires the
        CloudWatchLogs destination. For more information, see Transaction Search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/UpdateTraceSegmentDestination"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTraceSegmentDestinationRequest | UpdateTraceSegmentDestinationRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateTraceSegmentDestinationResult],
            error_mapper=update_trace_segment_destination_error_mapper,
            request_options=request_options,
        )


class AsyncOperationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_trace_retrieval(
        self,
        *,
        body: CancelTraceRetrievalRequest | CancelTraceRetrievalRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CancelTraceRetrievalErrorBody]:
        """Cancels an ongoing trace retrieval job initiated by StartTraceRetrieval using the provided RetrievalToken. A
        successful cancellation will return an HTTP 200 response.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/CancelTraceRetrieval"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CancelTraceRetrievalRequest | CancelTraceRetrievalRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=cancel_trace_retrieval_error_mapper,
            request_options=request_options,
        )

    async def get_indexing_rules(
        self,
        *,
        body: GetIndexingRulesRequest | GetIndexingRulesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetIndexingRulesResult, GetIndexingRulesErrorBody]:
        """Retrieves all indexing rules. Indexing rules are used to determine the server-side sampling rate for spans
        ingested through the CloudWatchLogs destination and indexed by X-Ray. For more information, see Transaction
        Search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/GetIndexingRules"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetIndexingRulesRequest | GetIndexingRulesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetIndexingRulesResult],
            error_mapper=get_indexing_rules_error_mapper,
            request_options=request_options,
        )

    async def get_retrieved_traces_graph(
        self,
        *,
        body: GetRetrievedTracesGraphRequest | GetRetrievedTracesGraphRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetRetrievedTracesGraphResult, GetRetrievedTracesGraphErrorBody]:
        """Retrieves a service graph for traces based on the specified RetrievalToken from the CloudWatch log group
        generated by Transaction Search. This API does not initiate a retrieval job. You must first execute
        StartTraceRetrieval to obtain the required RetrievalToken. The trace graph describes services that process
        incoming requests and any downstream services they call, which may include Amazon Web Services resources,
        external APIs, or databases. The response is empty until the RetrievalStatus is COMPLETE. Retry the request
        after the status changes from RUNNING or SCHEDULED to COMPLETE to access the full service graph. When CloudWatch
        log is the destination, this API can support cross-account observability and service graph retrieval across
        linked accounts. For retrieving graphs from X-Ray directly as opposed to the Transaction-Search Log group, see
        GetTraceGraph.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/GetRetrievedTracesGraph"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetRetrievedTracesGraphRequest | GetRetrievedTracesGraphRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetRetrievedTracesGraphResult],
            error_mapper=get_retrieved_traces_graph_error_mapper,
            request_options=request_options,
        )

    async def get_trace_segment_destination(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetTraceSegmentDestinationResult, GetTraceSegmentDestinationErrorBody]:
        """Retrieves the current destination of data sent to PutTraceSegments and OpenTelemetry protocol (OTLP)
        endpoint. The Transaction Search feature requires a CloudWatchLogs destination. For more information, see
        Transaction Search and OpenTelemetry.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/GetTraceSegmentDestination"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetTraceSegmentDestinationResult],
            error_mapper=get_trace_segment_destination_error_mapper,
            request_options=request_options,
        )

    async def list_retrieved_traces(
        self,
        *,
        body: ListRetrievedTracesRequest | ListRetrievedTracesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListRetrievedTracesResult, ListRetrievedTracesErrorBody]:
        """Retrieves a list of traces for a given RetrievalToken from the CloudWatch log group generated by Transaction
        Search. For information on what each trace returns, see BatchGetTraces. This API does not initiate a retrieval
        process. To start a trace retrieval, use StartTraceRetrieval, which generates the required RetrievalToken. When
        the RetrievalStatus is not COMPLETE, the API will return an empty response. Retry the request once the retrieval
        has completed to access the full list of traces. For cross-account observability, this API can retrieve traces
        from linked accounts when CloudWatch log is set as the destination across relevant accounts. For more details,
        see CloudWatch cross-account observability. For retrieving data from X-Ray directly as opposed to the
        Transaction Search generated log group, see BatchGetTraces.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ListRetrievedTraces"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ListRetrievedTracesRequest | ListRetrievedTracesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListRetrievedTracesResult],
            error_mapper=list_retrieved_traces_error_mapper,
            request_options=request_options,
        )

    async def start_trace_retrieval(
        self,
        *,
        body: StartTraceRetrievalRequest | StartTraceRetrievalRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartTraceRetrievalResult, StartTraceRetrievalErrorBody]:
        """Initiates a trace retrieval process using the specified time range and for the given trace IDs in the
        Transaction Search generated CloudWatch log group. For more information, see Transaction Search. API returns a
        RetrievalToken, which can be used with ListRetrievedTraces or GetRetrievedTracesGraph to fetch results.
        Retrievals will time out after 60 minutes. To execute long time ranges, consider segmenting into multiple
        retrievals. If you are using CloudWatch cross-account observability, you can use this operation in a monitoring
        account to retrieve data from a linked source account, as long as both accounts have transaction search enabled.
        For retrieving data from X-Ray directly as opposed to the Transaction-Search Log group, see BatchGetTraces.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/StartTraceRetrieval"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StartTraceRetrievalRequest | StartTraceRetrievalRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartTraceRetrievalResult],
            error_mapper=start_trace_retrieval_error_mapper,
            request_options=request_options,
        )

    async def update_indexing_rule(
        self,
        *,
        body: UpdateIndexingRuleRequest | UpdateIndexingRuleRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateIndexingRuleResult, UpdateIndexingRuleErrorBody]:
        """Modifies an indexing rule’s configuration. Indexing rules are used for determining the sampling rate for
        spans indexed from CloudWatch Logs. For more information, see Transaction Search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/UpdateIndexingRule"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateIndexingRuleRequest | UpdateIndexingRuleRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateIndexingRuleResult],
            error_mapper=update_indexing_rule_error_mapper,
            request_options=request_options,
        )

    async def update_trace_segment_destination(
        self,
        *,
        body: UpdateTraceSegmentDestinationRequest | UpdateTraceSegmentDestinationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateTraceSegmentDestinationResult, UpdateTraceSegmentDestinationErrorBody]:
        """Modifies the destination of data sent to PutTraceSegments. The Transaction Search feature requires the
        CloudWatchLogs destination. For more information, see Transaction Search.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/UpdateTraceSegmentDestination"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateTraceSegmentDestinationRequest | UpdateTraceSegmentDestinationRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateTraceSegmentDestinationResult],
            error_mapper=update_trace_segment_destination_error_mapper,
            request_options=request_options,
        )
