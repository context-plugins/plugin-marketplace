from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.async_run_inline_error import AsyncRunInlineErrorBody, async_run_inline_error_mapper
from ..errors.async_run_report_by_id_error import AsyncRunReportByIdErrorBody, async_run_report_by_id_error_mapper
from ..errors.cancel_async_operation_error import CancelAsyncOperationErrorBody, cancel_async_operation_error_mapper
from ..errors.create_report_error import CreateReportErrorBody, create_report_error_mapper
from ..errors.delete_report_error import DeleteReportErrorBody, delete_report_error_mapper
from ..errors.get_async_operation_error import GetAsyncOperationErrorBody, get_async_operation_error_mapper
from ..errors.get_async_operation_results_error import (
    GetAsyncOperationResultsErrorBody,
    get_async_operation_results_error_mapper,
)
from ..errors.get_report_config_error import GetReportConfigErrorBody, get_report_config_error_mapper
from ..errors.get_report_error import GetReportErrorBody, get_report_error_mapper
from ..errors.list_reports_error import ListReportsErrorBody, list_reports_error_mapper
from ..errors.query_error import QueryErrorBody, query_error_mapper
from ..errors.update_report_error import UpdateReportErrorBody, update_report_error_mapper
from ..models.analytics_v1_reports_actions_run_request import (
    AnalyticsV1ReportsActionsRunRequest,
    AnalyticsV1ReportsActionsRunRequestDict,
)
from ..models.analytics_v1_reports_operations_results_response import AnalyticsV1ReportsOperationsResultsResponse
from ..models.analytics_v1_reports_query_request import (
    AnalyticsV1ReportsQueryRequest,
    AnalyticsV1ReportsQueryRequestDict,
)
from ..models.analytics_v1_reports_request import AnalyticsV1ReportsRequest, AnalyticsV1ReportsRequestDict
from ..models.async_operation_poll_response import AsyncOperationPollResponse
from ..models.async_operation_response import AsyncOperationResponse
from ..models.enums.file_output import FileOutputOrStr
from ..models.external_report import ExternalReport
from ..models.external_update_report import ExternalUpdateReport, ExternalUpdateReportDict
from ..models.get_report_response import GetReportResponse
from ..models.report_list import ReportList
from ..models.run_report_result import RunReportResult
from ..server.server import Server


class Reports:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ReportsWithRawResponse(client, server, auth)

    def async_run_inline(
        self,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        body: AnalyticsV1ReportsActionsRunRequest | AnalyticsV1ReportsActionsRunRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AsyncOperationResponse:
        """Submits an async report execution job using an inline configuration. Returns 202 immediately with a Location
        header pointing to the operation status endpoint. Requires the Idempotency-Key header to ensure at-most-once
        submission. Duplicate requests with the same config for the same customer return the existing in-flight
        operation. Use ?dryRun=true to validate the config without creating an operation.

        Args:
            idempotency_key: Unique key for this submission. Required on every request. Deduplication is based on config
                content, not this key.
            dry_run: If true, validates the request and returns 200 without creating an operation or submitting a job.
                The response body will have status "dry_run" and no operationId.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted — async operation created. The Location header contains the URL to poll for status.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.async_run_inline(
                idempotency_key, dry_run=dry_run, body=body, request_options=request_options
            ),
        )

    def async_run_report_by_id(
        self,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        time_range: str | None = None,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AsyncOperationResponse:
        """Submits an async execution job for a saved report identified by ID. Returns 202 immediately with a Location
        header pointing to the operation status endpoint. Requires the Idempotency-Key header. Use ?dryRun=true to
        validate without creating an operation.

        Args:
            id_: The saved report ID.
            idempotency_key: Unique key for this submission. Required on every request.
            dry_run: If true, validates the request and returns 200 without creating an operation or submitting a job.
            time_range: An optional parameter to override the report time settings. Value should be represented in the
                format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for each of the date
                and time elements that follow the [n]. Cannot be combined with startDate/endDate.
            start_date: An optional parameter to override the report time settings. Must be provided together with
                endDate. Format: yyyy-mm-dd
            end_date: An optional parameter to override the report time settings. Must be provided together with
                startDate. Format: yyyy-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted — async operation created. The Location header contains the URL to poll for status.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.async_run_report_by_id(
                id_,
                idempotency_key,
                dry_run=dry_run,
                time_range=time_range,
                start_date=start_date,
                end_date=end_date,
                request_options=request_options,
            ),
        )

    def cancel_async_operation(
        self,
        operation_id: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AsyncOperationResponse:
        """Cancels a pending or running async report operation. Already-terminal operations (succeeded, failed,
        canceled) are returned as-is without any state change (idempotent). Returns 404 if the operationId does not
        exist or belongs to a different tenant. Use ?dryRun=true to validate the request without modifying any state.

        Args:
            operation_id: The unique ID of the async operation to cancel.
            idempotency_key: Unique key for this submission. Required on every request.
            dry_run: If true, validates the request and returns 200 without modifying any state. The response body will
                have status "dry_run" and the X-Dry-Run response header will be set to "true".
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK — operation state returned. On dry-run, the X-Dry-Run response header is set to "true" and status is
            "dry_run".

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.cancel_async_operation(
                operation_id, idempotency_key, dry_run=dry_run, request_options=request_options
            ),
        )

    def create_report(
        self,
        *,
        body: AnalyticsV1ReportsRequest | AnalyticsV1ReportsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ExternalReport:
        """Creates a new report.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.create_report(body=body, request_options=request_options))

    def delete_report(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Deletes the specified Cloud Analytics report.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Report deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_report(id_, request_options=request_options))

    def get_async_operation(
        self, operation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AsyncOperationPollResponse:
        """Returns the current status of an async report operation. Non-terminal operations (pending, running) include a
        Retry-After header suggesting when to poll again. This endpoint does not return result data — once status is
        "succeeded", fetch the result from the operation's results endpoint. When status is "failed", the error field
        contains an RFC 9457-shaped error. Returns 404 if the operationId does not exist, belongs to a different tenant,
        or has expired.

        Args:
            operation_id: The unique ID of the async operation to poll.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK — current operation state. The Retry-After response header is present only on pending/running responses.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_async_operation(operation_id, request_options=request_options))

    def get_async_operation_results(
        self,
        operation_id: str,
        *,
        file_output: FileOutputOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsV1ReportsOperationsResultsResponse:
        """Returns the result of a succeeded async report operation, including report metadata (id, reportName, owner,
        type, createTime, updateTime, urlUI) when the operation was started against a saved report — the same shape as
        the sync GetReportResponse, instead of requiring a second call to GET /analytics/v1/reports/{id}/config for it.
        Returns 404 if the operationId does not exist, has expired, or belongs to a different tenant. Returns 425 Too
        Early if the operation has not yet reached a terminal state — poll the operation status endpoint, which returns
        its own Retry-After guidance, until it succeeds. Returns 422 if the operation terminated as failed or canceled.
        The poll status endpoint response does not include result data inline — this is the only endpoint that returns
        it.

        Args:
            operation_id: The unique ID of the async operation.
            file_output: Additionally render the operation's result as a file and return a signed URL to it in
                ``fileOutput``. The file is generated from the result the operation already produced, not by re-running
                the query, and is stored beside that result for the operation's lifetime, so a repeat request for the
                same operation and format returns a fresh signed URL to the same file rather than rendering it again.
                Omit the parameter and the response is unchanged. Returns 422 when the operation predates file output
                support and has no stored render input; a transient rendering failure instead returns 200 with
                ``result`` and no ``fileOutput``, so retry the request for the file. ``pdf`` is the chart and data table
                as a document, ``png`` the chart image, and ``csv`` every row of the result as raw data, one line per
                row with the report's dimensions and metrics, never truncated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK — the operation succeeded; body is the report result, plus report metadata when the operation was started
            against a saved report, plus a fileOutput URL when one was requested.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Unprocessable Entity - The request is well-formed but
                semantically invalid. Too Early - The operation has not yet reached a terminal state. Poll the operation
                status endpoint, which returns its own Retry-After guidance, until it succeeds. Internal Server Error -
                Something went wrong with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_async_operation_results(
                operation_id, file_output=file_output, request_options=request_options
            ),
        )

    def get_report(
        self,
        id_: str,
        *,
        time_range: str | None = None,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetReportResponse:
        """Returns the results of the specified report.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            time_range: An optional parameter to override the report time settings. Value should be represented in the
                format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for each of the date
                and time elements that follow the [n].
            start_date: An optional parameter to override the report time settings. Must be provided together with
                endDate. Format: yyyy-mm-dd
            end_date: An optional parameter to override the report time settings. Must be provided together with
                startDate. Format: yyyy-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Too Many Requests. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_report(
                id_, time_range=time_range, start_date=start_date, end_date=end_date, request_options=request_options
            ),
        )

    def get_report_config(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> ExternalReport:
        """Returns the configuration of the specified Cloud Analytics report.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Report configuration returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_report_config(id_, request_options=request_options))

    def list_reports(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReportList:
        """Returns a list of all Cloud Analytics reports that your account has access to. Reports are returned in
        reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Possible filter
                keys: **reportName**, **owner**, **type**, **updateTime**, **folderId**
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            min_creation_time: Min value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created after or at this timestamp are returned.
            max_creation_time: Max value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_reports(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                name_contains=name_contains,
                min_creation_time=min_creation_time,
                max_creation_time=max_creation_time,
                request_options=request_options,
            ),
        )

    def query(
        self,
        *,
        body: AnalyticsV1ReportsQueryRequest | AnalyticsV1ReportsQueryRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RunReportResult:
        """Runs a report query with the specified configuration without persisting it. Fields that are not populated
        will use their default values if needed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Internal Server Error - Something went wrong with the DoiT API server.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.query(body=body, request_options=request_options))

    def update_report(
        self,
        id_: str,
        *,
        body: ExternalUpdateReport | ExternalUpdateReportDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ExternalReport:
        """Updates a report with the specified configuration.

        Only specified fields will be updated.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Report updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.update_report(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> ReportsWithRawResponse:
        return self._with_raw_response


class AsyncReports:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncReportsWithRawResponse(client, server, auth)

    async def async_run_inline(
        self,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        body: AnalyticsV1ReportsActionsRunRequest | AnalyticsV1ReportsActionsRunRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncOperationResponse:
        """Submits an async report execution job using an inline configuration. Returns 202 immediately with a Location
        header pointing to the operation status endpoint. Requires the Idempotency-Key header to ensure at-most-once
        submission. Duplicate requests with the same config for the same customer return the existing in-flight
        operation. Use ?dryRun=true to validate the config without creating an operation.

        Args:
            idempotency_key: Unique key for this submission. Required on every request. Deduplication is based on config
                content, not this key.
            dry_run: If true, validates the request and returns 200 without creating an operation or submitting a job.
                The response body will have status "dry_run" and no operationId.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted — async operation created. The Location header contains the URL to poll for status.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.async_run_inline(
                idempotency_key, dry_run=dry_run, body=body, request_options=request_options
            ),
        )

    async def async_run_report_by_id(
        self,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        time_range: str | None = None,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncOperationResponse:
        """Submits an async execution job for a saved report identified by ID. Returns 202 immediately with a Location
        header pointing to the operation status endpoint. Requires the Idempotency-Key header. Use ?dryRun=true to
        validate without creating an operation.

        Args:
            id_: The saved report ID.
            idempotency_key: Unique key for this submission. Required on every request.
            dry_run: If true, validates the request and returns 200 without creating an operation or submitting a job.
            time_range: An optional parameter to override the report time settings. Value should be represented in the
                format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for each of the date
                and time elements that follow the [n]. Cannot be combined with startDate/endDate.
            start_date: An optional parameter to override the report time settings. Must be provided together with
                endDate. Format: yyyy-mm-dd
            end_date: An optional parameter to override the report time settings. Must be provided together with
                startDate. Format: yyyy-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted — async operation created. The Location header contains the URL to poll for status.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.async_run_report_by_id(
                id_,
                idempotency_key,
                dry_run=dry_run,
                time_range=time_range,
                start_date=start_date,
                end_date=end_date,
                request_options=request_options,
            ),
        )

    async def cancel_async_operation(
        self,
        operation_id: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncOperationResponse:
        """Cancels a pending or running async report operation. Already-terminal operations (succeeded, failed,
        canceled) are returned as-is without any state change (idempotent). Returns 404 if the operationId does not
        exist or belongs to a different tenant. Use ?dryRun=true to validate the request without modifying any state.

        Args:
            operation_id: The unique ID of the async operation to cancel.
            idempotency_key: Unique key for this submission. Required on every request.
            dry_run: If true, validates the request and returns 200 without modifying any state. The response body will
                have status "dry_run" and the X-Dry-Run response header will be set to "true".
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK — operation state returned. On dry-run, the X-Dry-Run response header is set to "true" and status is
            "dry_run".

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_async_operation(
                operation_id, idempotency_key, dry_run=dry_run, request_options=request_options
            ),
        )

    async def create_report(
        self,
        *,
        body: AnalyticsV1ReportsRequest | AnalyticsV1ReportsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ExternalReport:
        """Creates a new report.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.create_report(body=body, request_options=request_options))

    async def delete_report(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Deletes the specified Cloud Analytics report.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Report deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_report(id_, request_options=request_options))

    async def get_async_operation(
        self, operation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncOperationPollResponse:
        """Returns the current status of an async report operation. Non-terminal operations (pending, running) include a
        Retry-After header suggesting when to poll again. This endpoint does not return result data — once status is
        "succeeded", fetch the result from the operation's results endpoint. When status is "failed", the error field
        contains an RFC 9457-shaped error. Returns 404 if the operationId does not exist, belongs to a different tenant,
        or has expired.

        Args:
            operation_id: The unique ID of the async operation to poll.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK — current operation state. The Retry-After response header is present only on pending/running responses.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_async_operation(operation_id, request_options=request_options))

    async def get_async_operation_results(
        self,
        operation_id: str,
        *,
        file_output: FileOutputOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsV1ReportsOperationsResultsResponse:
        """Returns the result of a succeeded async report operation, including report metadata (id, reportName, owner,
        type, createTime, updateTime, urlUI) when the operation was started against a saved report — the same shape as
        the sync GetReportResponse, instead of requiring a second call to GET /analytics/v1/reports/{id}/config for it.
        Returns 404 if the operationId does not exist, has expired, or belongs to a different tenant. Returns 425 Too
        Early if the operation has not yet reached a terminal state — poll the operation status endpoint, which returns
        its own Retry-After guidance, until it succeeds. Returns 422 if the operation terminated as failed or canceled.
        The poll status endpoint response does not include result data inline — this is the only endpoint that returns
        it.

        Args:
            operation_id: The unique ID of the async operation.
            file_output: Additionally render the operation's result as a file and return a signed URL to it in
                ``fileOutput``. The file is generated from the result the operation already produced, not by re-running
                the query, and is stored beside that result for the operation's lifetime, so a repeat request for the
                same operation and format returns a fresh signed URL to the same file rather than rendering it again.
                Omit the parameter and the response is unchanged. Returns 422 when the operation predates file output
                support and has no stored render input; a transient rendering failure instead returns 200 with
                ``result`` and no ``fileOutput``, so retry the request for the file. ``pdf`` is the chart and data table
                as a document, ``png`` the chart image, and ``csv`` every row of the result as raw data, one line per
                row with the report's dimensions and metrics, never truncated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK — the operation succeeded; body is the report result, plus report metadata when the operation was started
            against a saved report, plus a fileOutput URL when one was requested.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Unprocessable Entity - The request is well-formed but
                semantically invalid. Too Early - The operation has not yet reached a terminal state. Poll the operation
                status endpoint, which returns its own Retry-After guidance, until it succeeds. Internal Server Error -
                Something went wrong with the DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_async_operation_results(
                operation_id, file_output=file_output, request_options=request_options
            ),
        )

    async def get_report(
        self,
        id_: str,
        *,
        time_range: str | None = None,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetReportResponse:
        """Returns the results of the specified report.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            time_range: An optional parameter to override the report time settings. Value should be represented in the
                format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for each of the date
                and time elements that follow the [n].
            start_date: An optional parameter to override the report time settings. Must be provided together with
                endDate. Format: yyyy-mm-dd
            end_date: An optional parameter to override the report time settings. Must be provided together with
                startDate. Format: yyyy-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Too Many Requests. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_report(
                id_, time_range=time_range, start_date=start_date, end_date=end_date, request_options=request_options
            ),
        )

    async def get_report_config(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ExternalReport:
        """Returns the configuration of the specified Cloud Analytics report.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Report configuration returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_report_config(id_, request_options=request_options))

    async def list_reports(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReportList:
        """Returns a list of all Cloud Analytics reports that your account has access to. Reports are returned in
        reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Possible filter
                keys: **reportName**, **owner**, **type**, **updateTime**, **folderId**
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            min_creation_time: Min value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created after or at this timestamp are returned.
            max_creation_time: Max value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_reports(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                name_contains=name_contains,
                min_creation_time=min_creation_time,
                max_creation_time=max_creation_time,
                request_options=request_options,
            ),
        )

    async def query(
        self,
        *,
        body: AnalyticsV1ReportsQueryRequest | AnalyticsV1ReportsQueryRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RunReportResult:
        """Runs a report query with the specified configuration without persisting it. Fields that are not populated
        will use their default values if needed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Internal Server Error - Something went wrong with the DoiT API server.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.query(body=body, request_options=request_options))

    async def update_report(
        self,
        id_: str,
        *,
        body: ExternalUpdateReport | ExternalUpdateReportDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ExternalReport:
        """Updates a report with the specified configuration.

        Only specified fields will be updated.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Report updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.update_report(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncReportsWithRawResponse:
        return self._with_raw_response


class ReportsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def async_run_inline(
        self,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        body: AnalyticsV1ReportsActionsRunRequest | AnalyticsV1ReportsActionsRunRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncOperationResponse, AsyncRunInlineErrorBody]:
        """Submits an async report execution job using an inline configuration. Returns 202 immediately with a Location
        header pointing to the operation status endpoint. Requires the Idempotency-Key header to ensure at-most-once
        submission. Duplicate requests with the same config for the same customer return the existing in-flight
        operation. Use ?dryRun=true to validate the config without creating an operation.

        Args:
            idempotency_key: Unique key for this submission. Required on every request. Deduplication is based on config
                content, not this key.
            dry_run: If true, validates the request and returns 200 without creating an operation or submitting a job.
                The response body will have status "dry_run" and no operationId.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/reports/actions/run"),
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[AnalyticsV1ReportsActionsRunRequest | AnalyticsV1ReportsActionsRunRequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AsyncOperationResponse],
            error_mapper=async_run_inline_error_mapper,
            request_options=request_options,
        )

    def async_run_report_by_id(
        self,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        time_range: str | None = None,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncOperationResponse, AsyncRunReportByIdErrorBody]:
        """Submits an async execution job for a saved report identified by ID. Returns 202 immediately with a Location
        header pointing to the operation status endpoint. Requires the Idempotency-Key header. Use ?dryRun=true to
        validate without creating an operation.

        Args:
            id_: The saved report ID.
            idempotency_key: Unique key for this submission. Required on every request.
            dry_run: If true, validates the request and returns 200 without creating an operation or submitting a job.
            time_range: An optional parameter to override the report time settings. Value should be represented in the
                format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for each of the date
                and time elements that follow the [n]. Cannot be combined with startDate/endDate.
            start_date: An optional parameter to override the report time settings. Must be provided together with
                endDate. Format: yyyy-mm-dd
            end_date: An optional parameter to override the report time settings. Must be provided together with
                startDate. Format: yyyy-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/reports/{id}/actions/run"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[bool | None]("dryRun", dry_run),
                param[str | None]("timeRange", time_range),
                param[Date | None]("startDate", start_date),
                param[Date | None]("endDate", end_date),
            ],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AsyncOperationResponse],
            error_mapper=async_run_report_by_id_error_mapper,
            request_options=request_options,
        )

    def cancel_async_operation(
        self,
        operation_id: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncOperationResponse, CancelAsyncOperationErrorBody]:
        """Cancels a pending or running async report operation. Already-terminal operations (succeeded, failed,
        canceled) are returned as-is without any state change (idempotent). Returns 404 if the operationId does not
        exist or belongs to a different tenant. Use ?dryRun=true to validate the request without modifying any state.

        Args:
            operation_id: The unique ID of the async operation to cancel.
            idempotency_key: Unique key for this submission. Required on every request.
            dry_run: If true, validates the request and returns 200 without modifying any state. The response body will
                have status "dry_run" and the X-Dry-Run response header will be set to "true".
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/reports/operations/{operationId}/actions/cancel"),
            path_params=[param[str]("operationId", operation_id)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AsyncOperationResponse],
            error_mapper=cancel_async_operation_error_mapper,
            request_options=request_options,
        )

    def create_report(
        self,
        *,
        body: AnalyticsV1ReportsRequest | AnalyticsV1ReportsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ExternalReport, CreateReportErrorBody]:
        """Creates a new report.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/reports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AnalyticsV1ReportsRequest | AnalyticsV1ReportsRequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ExternalReport],
            error_mapper=create_report_error_mapper,
            request_options=request_options,
        )

    def delete_report(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteReportErrorBody]:
        """Deletes the specified Cloud Analytics report.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/reports/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Any],
            error_mapper=delete_report_error_mapper,
            request_options=request_options,
        )

    def get_async_operation(
        self, operation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncOperationPollResponse, GetAsyncOperationErrorBody]:
        """Returns the current status of an async report operation. Non-terminal operations (pending, running) include a
        Retry-After header suggesting when to poll again. This endpoint does not return result data — once status is
        "succeeded", fetch the result from the operation's results endpoint. When status is "failed", the error field
        contains an RFC 9457-shaped error. Returns 404 if the operationId does not exist, belongs to a different tenant,
        or has expired.

        Args:
            operation_id: The unique ID of the async operation to poll.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/reports/operations/{operationId}"),
            path_params=[param[str]("operationId", operation_id)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AsyncOperationPollResponse],
            error_mapper=get_async_operation_error_mapper,
            request_options=request_options,
        )

    def get_async_operation_results(
        self,
        operation_id: str,
        *,
        file_output: FileOutputOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsV1ReportsOperationsResultsResponse, GetAsyncOperationResultsErrorBody]:
        """Returns the result of a succeeded async report operation, including report metadata (id, reportName, owner,
        type, createTime, updateTime, urlUI) when the operation was started against a saved report — the same shape as
        the sync GetReportResponse, instead of requiring a second call to GET /analytics/v1/reports/{id}/config for it.
        Returns 404 if the operationId does not exist, has expired, or belongs to a different tenant. Returns 425 Too
        Early if the operation has not yet reached a terminal state — poll the operation status endpoint, which returns
        its own Retry-After guidance, until it succeeds. Returns 422 if the operation terminated as failed or canceled.
        The poll status endpoint response does not include result data inline — this is the only endpoint that returns
        it.

        Args:
            operation_id: The unique ID of the async operation.
            file_output: Additionally render the operation's result as a file and return a signed URL to it in
                ``fileOutput``. The file is generated from the result the operation already produced, not by re-running
                the query, and is stored beside that result for the operation's lifetime, so a repeat request for the
                same operation and format returns a fresh signed URL to the same file rather than rendering it again.
                Omit the parameter and the response is unchanged. Returns 422 when the operation predates file output
                support and has no stored render input; a transient rendering failure instead returns 200 with
                ``result`` and no ``fileOutput``, so retry the request for the file. ``pdf`` is the chart and data table
                as a document, ``png`` the chart image, and ``csv`` every row of the result as raw data, one line per
                row with the report's dimensions and metrics, never truncated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/reports/operations/{operationId}/results"),
            path_params=[param[str]("operationId", operation_id)],
            query_params=[param[FileOutputOrStr | None]("fileOutput", file_output)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AnalyticsV1ReportsOperationsResultsResponse],
            error_mapper=get_async_operation_results_error_mapper,
            request_options=request_options,
        )

    def get_report(
        self,
        id_: str,
        *,
        time_range: str | None = None,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetReportResponse, GetReportErrorBody]:
        """Returns the results of the specified report.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            time_range: An optional parameter to override the report time settings. Value should be represented in the
                format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for each of the date
                and time elements that follow the [n].
            start_date: An optional parameter to override the report time settings. Must be provided together with
                endDate. Format: yyyy-mm-dd
            end_date: An optional parameter to override the report time settings. Must be provided together with
                startDate. Format: yyyy-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/reports/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[str | None]("timeRange", time_range),
                param[Date | None]("startDate", start_date),
                param[Date | None]("endDate", end_date),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[GetReportResponse],
            error_mapper=get_report_error_mapper,
            request_options=request_options,
        )

    def get_report_config(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ExternalReport, GetReportConfigErrorBody]:
        """Returns the configuration of the specified Cloud Analytics report.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/reports/{id}/config"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ExternalReport],
            error_mapper=get_report_config_error_mapper,
            request_options=request_options,
        )

    def list_reports(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReportList, ListReportsErrorBody]:
        """Returns a list of all Cloud Analytics reports that your account has access to. Reports are returned in
        reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Possible filter
                keys: **reportName**, **owner**, **type**, **updateTime**, **folderId**
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            min_creation_time: Min value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created after or at this timestamp are returned.
            max_creation_time: Max value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/reports"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[str | None]("nameContains", name_contains),
                param[str | None]("minCreationTime", min_creation_time),
                param[str | None]("maxCreationTime", max_creation_time),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ReportList],
            error_mapper=list_reports_error_mapper,
            request_options=request_options,
        )

    def query(
        self,
        *,
        body: AnalyticsV1ReportsQueryRequest | AnalyticsV1ReportsQueryRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RunReportResult, QueryErrorBody]:
        """Runs a report query with the specified configuration without persisting it. Fields that are not populated
        will use their default values if needed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/reports/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AnalyticsV1ReportsQueryRequest | AnalyticsV1ReportsQueryRequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[RunReportResult],
            error_mapper=query_error_mapper,
            request_options=request_options,
        )

    def update_report(
        self,
        id_: str,
        *,
        body: ExternalUpdateReport | ExternalUpdateReportDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ExternalReport, UpdateReportErrorBody]:
        """Updates a report with the specified configuration.

        Only specified fields will be updated.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/reports/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExternalUpdateReport | ExternalUpdateReportDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ExternalReport],
            error_mapper=update_report_error_mapper,
            request_options=request_options,
        )


class AsyncReportsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def async_run_inline(
        self,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        body: AnalyticsV1ReportsActionsRunRequest | AnalyticsV1ReportsActionsRunRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncOperationResponse, AsyncRunInlineErrorBody]:
        """Submits an async report execution job using an inline configuration. Returns 202 immediately with a Location
        header pointing to the operation status endpoint. Requires the Idempotency-Key header to ensure at-most-once
        submission. Duplicate requests with the same config for the same customer return the existing in-flight
        operation. Use ?dryRun=true to validate the config without creating an operation.

        Args:
            idempotency_key: Unique key for this submission. Required on every request. Deduplication is based on config
                content, not this key.
            dry_run: If true, validates the request and returns 200 without creating an operation or submitting a job.
                The response body will have status "dry_run" and no operationId.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/reports/actions/run"),
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            body=json_body[AnalyticsV1ReportsActionsRunRequest | AnalyticsV1ReportsActionsRunRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AsyncOperationResponse],
            error_mapper=async_run_inline_error_mapper,
            request_options=request_options,
        )

    async def async_run_report_by_id(
        self,
        id_: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        time_range: str | None = None,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncOperationResponse, AsyncRunReportByIdErrorBody]:
        """Submits an async execution job for a saved report identified by ID. Returns 202 immediately with a Location
        header pointing to the operation status endpoint. Requires the Idempotency-Key header. Use ?dryRun=true to
        validate without creating an operation.

        Args:
            id_: The saved report ID.
            idempotency_key: Unique key for this submission. Required on every request.
            dry_run: If true, validates the request and returns 200 without creating an operation or submitting a job.
            time_range: An optional parameter to override the report time settings. Value should be represented in the
                format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for each of the date
                and time elements that follow the [n]. Cannot be combined with startDate/endDate.
            start_date: An optional parameter to override the report time settings. Must be provided together with
                endDate. Format: yyyy-mm-dd
            end_date: An optional parameter to override the report time settings. Must be provided together with
                startDate. Format: yyyy-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/reports/{id}/actions/run"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[bool | None]("dryRun", dry_run),
                param[str | None]("timeRange", time_range),
                param[Date | None]("startDate", start_date),
                param[Date | None]("endDate", end_date),
            ],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AsyncOperationResponse],
            error_mapper=async_run_report_by_id_error_mapper,
            request_options=request_options,
        )

    async def cancel_async_operation(
        self,
        operation_id: str,
        idempotency_key: str,
        *,
        dry_run: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncOperationResponse, CancelAsyncOperationErrorBody]:
        """Cancels a pending or running async report operation. Already-terminal operations (succeeded, failed,
        canceled) are returned as-is without any state change (idempotent). Returns 404 if the operationId does not
        exist or belongs to a different tenant. Use ?dryRun=true to validate the request without modifying any state.

        Args:
            operation_id: The unique ID of the async operation to cancel.
            idempotency_key: Unique key for this submission. Required on every request.
            dry_run: If true, validates the request and returns 200 without modifying any state. The response body will
                have status "dry_run" and the X-Dry-Run response header will be set to "true".
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/reports/operations/{operationId}/actions/cancel"),
            path_params=[param[str]("operationId", operation_id)],
            query_params=[param[bool | None]("dryRun", dry_run)],
            headers=[param[str]("Idempotency-Key", idempotency_key)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AsyncOperationResponse],
            error_mapper=cancel_async_operation_error_mapper,
            request_options=request_options,
        )

    async def create_report(
        self,
        *,
        body: AnalyticsV1ReportsRequest | AnalyticsV1ReportsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ExternalReport, CreateReportErrorBody]:
        """Creates a new report.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/reports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AnalyticsV1ReportsRequest | AnalyticsV1ReportsRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ExternalReport],
            error_mapper=create_report_error_mapper,
            request_options=request_options,
        )

    async def delete_report(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteReportErrorBody]:
        """Deletes the specified Cloud Analytics report.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/reports/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Any],
            error_mapper=delete_report_error_mapper,
            request_options=request_options,
        )

    async def get_async_operation(
        self, operation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncOperationPollResponse, GetAsyncOperationErrorBody]:
        """Returns the current status of an async report operation. Non-terminal operations (pending, running) include a
        Retry-After header suggesting when to poll again. This endpoint does not return result data — once status is
        "succeeded", fetch the result from the operation's results endpoint. When status is "failed", the error field
        contains an RFC 9457-shaped error. Returns 404 if the operationId does not exist, belongs to a different tenant,
        or has expired.

        Args:
            operation_id: The unique ID of the async operation to poll.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/reports/operations/{operationId}"),
            path_params=[param[str]("operationId", operation_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AsyncOperationPollResponse],
            error_mapper=get_async_operation_error_mapper,
            request_options=request_options,
        )

    async def get_async_operation_results(
        self,
        operation_id: str,
        *,
        file_output: FileOutputOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsV1ReportsOperationsResultsResponse, GetAsyncOperationResultsErrorBody]:
        """Returns the result of a succeeded async report operation, including report metadata (id, reportName, owner,
        type, createTime, updateTime, urlUI) when the operation was started against a saved report — the same shape as
        the sync GetReportResponse, instead of requiring a second call to GET /analytics/v1/reports/{id}/config for it.
        Returns 404 if the operationId does not exist, has expired, or belongs to a different tenant. Returns 425 Too
        Early if the operation has not yet reached a terminal state — poll the operation status endpoint, which returns
        its own Retry-After guidance, until it succeeds. Returns 422 if the operation terminated as failed or canceled.
        The poll status endpoint response does not include result data inline — this is the only endpoint that returns
        it.

        Args:
            operation_id: The unique ID of the async operation.
            file_output: Additionally render the operation's result as a file and return a signed URL to it in
                ``fileOutput``. The file is generated from the result the operation already produced, not by re-running
                the query, and is stored beside that result for the operation's lifetime, so a repeat request for the
                same operation and format returns a fresh signed URL to the same file rather than rendering it again.
                Omit the parameter and the response is unchanged. Returns 422 when the operation predates file output
                support and has no stored render input; a transient rendering failure instead returns 200 with
                ``result`` and no ``fileOutput``, so retry the request for the file. ``pdf`` is the chart and data table
                as a document, ``png`` the chart image, and ``csv`` every row of the result as raw data, one line per
                row with the report's dimensions and metrics, never truncated.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/reports/operations/{operationId}/results"),
            path_params=[param[str]("operationId", operation_id)],
            query_params=[param[FileOutputOrStr | None]("fileOutput", file_output)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AnalyticsV1ReportsOperationsResultsResponse],
            error_mapper=get_async_operation_results_error_mapper,
            request_options=request_options,
        )

    async def get_report(
        self,
        id_: str,
        *,
        time_range: str | None = None,
        start_date: Date | None = None,
        end_date: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetReportResponse, GetReportErrorBody]:
        """Returns the results of the specified report.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            time_range: An optional parameter to override the report time settings. Value should be represented in the
                format P[n]Y[n]M[n]D[n]. In the representations, the [n] is replaced by the value for each of the date
                and time elements that follow the [n].
            start_date: An optional parameter to override the report time settings. Must be provided together with
                endDate. Format: yyyy-mm-dd
            end_date: An optional parameter to override the report time settings. Must be provided together with
                startDate. Format: yyyy-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/reports/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[str | None]("timeRange", time_range),
                param[Date | None]("startDate", start_date),
                param[Date | None]("endDate", end_date),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[GetReportResponse],
            error_mapper=get_report_error_mapper,
            request_options=request_options,
        )

    async def get_report_config(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ExternalReport, GetReportConfigErrorBody]:
        """Returns the configuration of the specified Cloud Analytics report.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/reports/{id}/config"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ExternalReport],
            error_mapper=get_report_config_error_mapper,
            request_options=request_options,
        )

    async def list_reports(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        min_creation_time: str | None = None,
        max_creation_time: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReportList, ListReportsErrorBody]:
        """Returns a list of all Cloud Analytics reports that your account has access to. Reports are returned in
        reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Possible filter
                keys: **reportName**, **owner**, **type**, **updateTime**, **folderId**
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            min_creation_time: Min value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created after or at this timestamp are returned.
            max_creation_time: Max value for reports creation time, in milliseconds since the POSIX epoch. If set, only
                reports created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/reports"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[str | None]("nameContains", name_contains),
                param[str | None]("minCreationTime", min_creation_time),
                param[str | None]("maxCreationTime", max_creation_time),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ReportList],
            error_mapper=list_reports_error_mapper,
            request_options=request_options,
        )

    async def query(
        self,
        *,
        body: AnalyticsV1ReportsQueryRequest | AnalyticsV1ReportsQueryRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RunReportResult, QueryErrorBody]:
        """Runs a report query with the specified configuration without persisting it. Fields that are not populated
        will use their default values if needed.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/reports/query"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AnalyticsV1ReportsQueryRequest | AnalyticsV1ReportsQueryRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[RunReportResult],
            error_mapper=query_error_mapper,
            request_options=request_options,
        )

    async def update_report(
        self,
        id_: str,
        *,
        body: ExternalUpdateReport | ExternalUpdateReportDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ExternalReport, UpdateReportErrorBody]:
        """Updates a report with the specified configuration.

        Only specified fields will be updated.

        Args:
            id_: Report ID. See `Resource IDs <https://developer.doit.com/docs/resource-ids>`__.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/reports/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExternalUpdateReport | ExternalUpdateReportDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ExternalReport],
            error_mapper=update_report_error_mapper,
            request_options=request_options,
        )
