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
from ..errors.execute_process_error import ExecuteProcessErrorBody, execute_process_error_mapper
from ..errors.query_execution_records_error import QueryExecutionRecordsErrorBody, query_execution_records_error_mapper
from ..models.execution_record_query_result import ExecutionRecordQueryResult
from ..models.execution_request import ExecutionRequest, ExecutionRequestDict
from ..models.execution_request_result import ExecutionRequestResult
from ..models.query_request import QueryRequest, QueryRequestDict
from ..server.server import Server


class Execution:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExecutionWithRawResponse(client, server, auth)

    def execute_process(
        self, body: ExecutionRequest | ExecutionRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ExecutionRequestResult:
        """Triggers the execution of an integration process on a specified Atom. Returns an execution request ID that
        can be used to track the job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The execution request with a job ID for tracking.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.execute_process(body, request_options=request_options))

    def query_execution_records(
        self, body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ExecutionRecordQueryResult:
        """Returns a list of process execution records matching the specified filter criteria. Useful for retrieving job
        history and execution statistics.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Query results containing matching execution records.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.query_execution_records(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ExecutionWithRawResponse:
        return self._with_raw_response


class AsyncExecution:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExecutionWithRawResponse(client, server, auth)

    async def execute_process(
        self, body: ExecutionRequest | ExecutionRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ExecutionRequestResult:
        """Triggers the execution of an integration process on a specified Atom. Returns an execution request ID that
        can be used to track the job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The execution request with a job ID for tracking.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.execute_process(body, request_options=request_options))

    async def query_execution_records(
        self, body: QueryRequest | QueryRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ExecutionRecordQueryResult:
        """Returns a list of process execution records matching the specified filter criteria. Useful for retrieving job
        history and execution statistics.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Query results containing matching execution records.

        Raises:
            ApiError: The request body is invalid or missing required fields. Authentication credentials are missing or
                invalid. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.query_execution_records(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncExecutionWithRawResponse:
        return self._with_raw_response


class ExecutionWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def execute_process(
        self, body: ExecutionRequest | ExecutionRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ExecutionRequestResult, ExecuteProcessErrorBody]:
        """Triggers the execution of an integration process on a specified Atom. Returns an execution request ID that
        can be used to track the job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ExecutionRequest"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExecutionRequest | ExecutionRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[ExecutionRequestResult],
            error_mapper=execute_process_error_mapper,
            request_options=request_options,
        )

    def query_execution_records(
        self, body: QueryRequest | QueryRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ExecutionRecordQueryResult, QueryExecutionRecordsErrorBody]:
        """Returns a list of process execution records matching the specified filter criteria. Useful for retrieving job
        history and execution statistics.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ExecutionRecord/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QueryRequest | QueryRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[ExecutionRecordQueryResult],
            error_mapper=query_execution_records_error_mapper,
            request_options=request_options,
        )


class AsyncExecutionWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def execute_process(
        self, body: ExecutionRequest | ExecutionRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ExecutionRequestResult, ExecuteProcessErrorBody]:
        """Triggers the execution of an integration process on a specified Atom. Returns an execution request ID that
        can be used to track the job.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ExecutionRequest"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExecutionRequest | ExecutionRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[ExecutionRequestResult],
            error_mapper=execute_process_error_mapper,
            request_options=request_options,
        )

    async def query_execution_records(
        self, body: QueryRequest | QueryRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ExecutionRecordQueryResult, QueryExecutionRecordsErrorBody]:
        """Returns a list of process execution records matching the specified filter criteria. Useful for retrieving job
        history and execution statistics.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/ExecutionRecord/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[QueryRequest | QueryRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[ExecutionRecordQueryResult],
            error_mapper=query_execution_records_error_mapper,
            request_options=request_options,
        )
