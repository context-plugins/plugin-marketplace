from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileResponse,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_file_decoder,
    async_json_decoder,
    empty_response,
    file_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.createreport_error import CreatereportErrorBody, createreport_error_mapper
from ..errors.delete_report_error import DeleteReportErrorBody, delete_report_error_mapper
from ..errors.list_report_types_error import ListReportTypesErrorBody, list_report_types_error_mapper
from ..errors.listallreports_error import ListallreportsErrorBody, listallreports_error_mapper
from ..errors.retrieve_report_error import RetrieveReportErrorBody, retrieve_report_error_mapper
from ..errors.retrieve_report_transactions_error import (
    RetrieveReportTransactionsErrorBody,
    retrieve_report_transactions_error_mapper,
)
from ..errors.retrieve_specific_report_type_error import (
    RetrieveSpecificReportTypeErrorBody,
    retrieve_specific_report_type_error_mapper,
)
from ..models.reports_request import ReportsRequest, ReportsRequestDict
from ..models.reports_response import ReportsResponse
from ..models.reports_response2 import ReportsResponse2
from ..models.reports_types_response import ReportsTypesResponse
from ..models.transactions_container_object import TransactionsContainerObject
from ..server.server import Server


class Reports:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ReportsWithRawResponse(client, server, auth)

    def createreport(
        self, body: ReportsRequest | ReportsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ReportsResponse:
        """Use this endpoint to create a new report. Report creation is an asynchronous task, meaning a job will be
        returned to let you know the progress of the report generation. You can poll the job to know when the report has
        been generated. You can create any supported report (see reportTypes for a list of supported reports). Ensure
        you provide the necessary filters when generating a report. All created reports, will store a copy of the data
        as a snapshot - this ensures that you have access to the raw data that was used to create the report. This API
        allows generating reports with various filters. The ``filters`` field in the report request enables you to
        specify parameters for customizing the report content.
        > 📘 Note: The report title cannot be longer than 50 characters.

        > 📘 **Reminder:** When Enrich data is updated, the transactions' Enrich results won’t automatically reflect
            these updates. To ensure your report reflects the latest Enrich data, purge and refresh connections before
            generating a new report.

        ### Filters Filters are used to narrow down the data included in the report. The available filters are:
        - ``fromDate``: Specifies the start date for the report data (format: YYYY-MM-DD).
        - ``toDate``: Specifies the end date for the report data (format: YYYY-MM-DD).
        - ``accounts``: List of account IDs to include in the report.
        - ``users``: List of user IDs to include in the report.
        - ``includeMetrics``: List of metric codes to include in the report. Supported values are specific to the report
            type. Rules for ``includeMetrics``:
        - If the array is empty (``"value": []``), all metrics will be shown.
        - If no filter is provided, all metrics will be shown.
        - If an array of codes is provided, only these specific metrics will be shown.
        - If the value is ``null``, no metrics will be shown.

        - ``includeGroups``: List of group codes to include in the report. Supported values are specific to the report
            type. Rules for ``includeGroups``:
        - If the array is empty (``"value": []``), all groups will be shown.
        - If no filter is provided, all groups will be shown.
        - If an array of codes is provided, only these specific groups will be shown.
        - If the value is ``null``, no groups will be shown.

        Args:
            body: Include the details of the report you would like to create along with the filters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The server will return link to a job endpoint which can be polled to track the progress of the report
            creation.

        Raises:
            ApiError: Returns an error indicating that the server cannot or will not process the request due to
                something that is perceived to be a client error. Error that access is forbidden and tied to the
                application logic, such as insufficient rights to a resource. Returns error indicating that server can't
                find requested resource. Returns error response code indicates that the server encountered an unexpected
                condition that prevented it from fulfilling the request. ``error`` is ``ReportsResponse12 |
                Reports403Error1 | Reports404Error1 | Reports500Error1 | RawError``."""
        return unwrap(self._with_raw_response.createreport(body, request_options=request_options))

    def delete_report(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Permanently deletes a report and all associated snapshot data.

        Args:
            id_: The ID of the generated report
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``Reports400Error21 | Reports403Error31 | Reports404Error31
                | Reports500Error31 | RawError``."""
        return unwrap(self._with_raw_response.delete_report(id_, request_options=request_options))

    def list_report_types(self, *, request_options: RequestOptionsOrDict | None = None) -> ReportsTypesResponse:
        """Use this endpoint to retrieve a list of supported reports. This identifies the complete list of supported
        reports, which can be used to create reports on.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``ReportsTypes400Error1 | ReportsTypes403Error1 |
                ReportsTypes404Error1 | ReportsTypes500Error1 | RawError``."""
        return unwrap(self._with_raw_response.list_report_types(request_options=request_options))

    def listallreports(self, *, request_options: RequestOptionsOrDict | None = None) -> ReportsResponse2:
        """Use this endpoint to retrieve a list of created reports. Every created report is saved as a snapshot and can
        be retrieved up to 24 hours after creation.You can call the reports/types endpoint to see the list of supported
        reports. reports.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``Reports400Error1 | Reports403Error21 |
                Reports404Error21 | Reports500Error21 | RawError``."""
        return unwrap(self._with_raw_response.listallreports(request_options=request_options))

    def retrieve_report(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse:
        """Use this endpoint to retrieve a specific report. Ensure you check the documentation for the schema of each
        report type.

        | Request Header | Description |
        |----------------|-----------------------------------------------------------------------------|
        | Accept | Specifies the format of the response. Use ``application/pdf`` |

        If you want to generate the PDF, make sure to change ``accept`` in the CURL request to ``application/pdf`` for
        PDF generation.

        Args:
            id_: The ID of the generated report
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``Reports400Error21 | Reports403Error31 | Reports404Error31
                | Reports500Error31 | RawError``."""
        return unwrap(self._with_raw_response.retrieve_report(id_, request_options=request_options))

    def retrieve_report_transactions(
        self, report_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> TransactionsContainerObject:
        """Retrieve transactions belonging to the report identified by {reportId}.

        Args:
            report_id: The ID of the generated report
            filter_: - account.id.eq('15a28893-e8c9-4441-a076-470195218738') -
                transaction.postDate.bt('2022-10-01,2022-10-10') -
                transaction.postDate.(eq|gt|lt|gteq|lteq)('2022-12-03T00:00:00Z') - institution.id.eq('AU00001') -
                connection.id.eq('12857a4c-931d-4a5a-ab74-399dafb03bfe') -
                transaction.id.eq('14198297-b3b5-415c-b6ad-8a14476ef61c') - transaction.direction.eq('credit') -
                transaction.class.eq('transfer') - transaction.status.eq('posted') Transactions can be filtered based on
                date & datetime.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a list with a data property that contains an array of transactions. Each entry in the array is a
            separate object. If no data is returned, the resulting array will be empty.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``ReportsTransactions400Error1 |
                ReportsTransactions403Error1 | ReportsTransactions404Error1 | ReportsTransactions500Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.retrieve_report_transactions(
                report_id, filter_=filter_, request_options=request_options
            ),
        )

    def retrieve_specific_report_type(
        self, report_type_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ReportsTypesResponse:
        """Retrieve information about a specific report type identified by {reportId}.

        Args:
            report_type_id: The type of the report
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``ReportsTypes400Error1 | ReportsTypes403Error1 |
                ReportsTypes404Error1 | ReportsTypes500Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.retrieve_specific_report_type(report_type_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ReportsWithRawResponse:
        return self._with_raw_response


class AsyncReports:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncReportsWithRawResponse(client, server, auth)

    async def createreport(
        self, body: ReportsRequest | ReportsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ReportsResponse:
        """Use this endpoint to create a new report. Report creation is an asynchronous task, meaning a job will be
        returned to let you know the progress of the report generation. You can poll the job to know when the report has
        been generated. You can create any supported report (see reportTypes for a list of supported reports). Ensure
        you provide the necessary filters when generating a report. All created reports, will store a copy of the data
        as a snapshot - this ensures that you have access to the raw data that was used to create the report. This API
        allows generating reports with various filters. The ``filters`` field in the report request enables you to
        specify parameters for customizing the report content.
        > 📘 Note: The report title cannot be longer than 50 characters.

        > 📘 **Reminder:** When Enrich data is updated, the transactions' Enrich results won’t automatically reflect
            these updates. To ensure your report reflects the latest Enrich data, purge and refresh connections before
            generating a new report.

        ### Filters Filters are used to narrow down the data included in the report. The available filters are:
        - ``fromDate``: Specifies the start date for the report data (format: YYYY-MM-DD).
        - ``toDate``: Specifies the end date for the report data (format: YYYY-MM-DD).
        - ``accounts``: List of account IDs to include in the report.
        - ``users``: List of user IDs to include in the report.
        - ``includeMetrics``: List of metric codes to include in the report. Supported values are specific to the report
            type. Rules for ``includeMetrics``:
        - If the array is empty (``"value": []``), all metrics will be shown.
        - If no filter is provided, all metrics will be shown.
        - If an array of codes is provided, only these specific metrics will be shown.
        - If the value is ``null``, no metrics will be shown.

        - ``includeGroups``: List of group codes to include in the report. Supported values are specific to the report
            type. Rules for ``includeGroups``:
        - If the array is empty (``"value": []``), all groups will be shown.
        - If no filter is provided, all groups will be shown.
        - If an array of codes is provided, only these specific groups will be shown.
        - If the value is ``null``, no groups will be shown.

        Args:
            body: Include the details of the report you would like to create along with the filters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The server will return link to a job endpoint which can be polled to track the progress of the report
            creation.

        Raises:
            ApiError: Returns an error indicating that the server cannot or will not process the request due to
                something that is perceived to be a client error. Error that access is forbidden and tied to the
                application logic, such as insufficient rights to a resource. Returns error indicating that server can't
                find requested resource. Returns error response code indicates that the server encountered an unexpected
                condition that prevented it from fulfilling the request. ``error`` is ``ReportsResponse12 |
                Reports403Error1 | Reports404Error1 | Reports500Error1 | RawError``."""
        return unwrap(await self._with_raw_response.createreport(body, request_options=request_options))

    async def delete_report(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Permanently deletes a report and all associated snapshot data.

        Args:
            id_: The ID of the generated report
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion succeeded.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``Reports400Error21 | Reports403Error31 | Reports404Error31
                | Reports500Error31 | RawError``."""
        return unwrap(await self._with_raw_response.delete_report(id_, request_options=request_options))

    async def list_report_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ReportsTypesResponse:
        """Use this endpoint to retrieve a list of supported reports. This identifies the complete list of supported
        reports, which can be used to create reports on.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``ReportsTypes400Error1 | ReportsTypes403Error1 |
                ReportsTypes404Error1 | ReportsTypes500Error1 | RawError``."""
        return unwrap(await self._with_raw_response.list_report_types(request_options=request_options))

    async def listallreports(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ReportsResponse2:
        """Use this endpoint to retrieve a list of created reports. Every created report is saved as a snapshot and can
        be retrieved up to 24 hours after creation.You can call the reports/types endpoint to see the list of supported
        reports. reports.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``Reports400Error1 | Reports403Error21 |
                Reports404Error21 | Reports500Error21 | RawError``."""
        return unwrap(await self._with_raw_response.listallreports(request_options=request_options))

    async def retrieve_report(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Use this endpoint to retrieve a specific report. Ensure you check the documentation for the schema of each
        report type.

        | Request Header | Description |
        |----------------|-----------------------------------------------------------------------------|
        | Accept | Specifies the format of the response. Use ``application/pdf`` |

        If you want to generate the PDF, make sure to change ``accept`` in the CURL request to ``application/pdf`` for
        PDF generation.

        Args:
            id_: The ID of the generated report
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``Reports400Error21 | Reports403Error31 | Reports404Error31
                | Reports500Error31 | RawError``."""
        return unwrap(await self._with_raw_response.retrieve_report(id_, request_options=request_options))

    async def retrieve_report_transactions(
        self, report_id: str, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TransactionsContainerObject:
        """Retrieve transactions belonging to the report identified by {reportId}.

        Args:
            report_id: The ID of the generated report
            filter_: - account.id.eq('15a28893-e8c9-4441-a076-470195218738') -
                transaction.postDate.bt('2022-10-01,2022-10-10') -
                transaction.postDate.(eq|gt|lt|gteq|lteq)('2022-12-03T00:00:00Z') - institution.id.eq('AU00001') -
                connection.id.eq('12857a4c-931d-4a5a-ab74-399dafb03bfe') -
                transaction.id.eq('14198297-b3b5-415c-b6ad-8a14476ef61c') - transaction.direction.eq('credit') -
                transaction.class.eq('transfer') - transaction.status.eq('posted') Transactions can be filtered based on
                date & datetime.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a list with a data property that contains an array of transactions. Each entry in the array is a
            separate object. If no data is returned, the resulting array will be empty.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error. Error that access is forbidden and tied to the application logic, such
                as insufficient rights to a resource. Returns error indicating that server can't find requested
                resource. Returns error response code indicates that the server encountered an unexpected condition that
                prevented it from fulfilling the request. ``error`` is ``ReportsTransactions400Error1 |
                ReportsTransactions403Error1 | ReportsTransactions404Error1 | ReportsTransactions500Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.retrieve_report_transactions(
                report_id, filter_=filter_, request_options=request_options
            ),
        )

    async def retrieve_specific_report_type(
        self, report_type_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ReportsTypesResponse:
        """Retrieve information about a specific report type identified by {reportId}.

        Args:
            report_type_id: The type of the report
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``ReportsTypes400Error1 | ReportsTypes403Error1 |
                ReportsTypes404Error1 | ReportsTypes500Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.retrieve_specific_report_type(report_type_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncReportsWithRawResponse:
        return self._with_raw_response


class ReportsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def createreport(
        self, body: ReportsRequest | ReportsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ReportsResponse, CreatereportErrorBody]:
        """Use this endpoint to create a new report. Report creation is an asynchronous task, meaning a job will be
        returned to let you know the progress of the report generation. You can poll the job to know when the report has
        been generated. You can create any supported report (see reportTypes for a list of supported reports). Ensure
        you provide the necessary filters when generating a report. All created reports, will store a copy of the data
        as a snapshot - this ensures that you have access to the raw data that was used to create the report. This API
        allows generating reports with various filters. The ``filters`` field in the report request enables you to
        specify parameters for customizing the report content.
        > 📘 Note: The report title cannot be longer than 50 characters.

        > 📘 **Reminder:** When Enrich data is updated, the transactions' Enrich results won’t automatically reflect
            these updates. To ensure your report reflects the latest Enrich data, purge and refresh connections before
            generating a new report.

        ### Filters Filters are used to narrow down the data included in the report. The available filters are:
        - ``fromDate``: Specifies the start date for the report data (format: YYYY-MM-DD).
        - ``toDate``: Specifies the end date for the report data (format: YYYY-MM-DD).
        - ``accounts``: List of account IDs to include in the report.
        - ``users``: List of user IDs to include in the report.
        - ``includeMetrics``: List of metric codes to include in the report. Supported values are specific to the report
            type. Rules for ``includeMetrics``:
        - If the array is empty (``"value": []``), all metrics will be shown.
        - If no filter is provided, all metrics will be shown.
        - If an array of codes is provided, only these specific metrics will be shown.
        - If the value is ``null``, no metrics will be shown.

        - ``includeGroups``: List of group codes to include in the report. Supported values are specific to the report
            type. Rules for ``includeGroups``:
        - If the array is empty (``"value": []``), all groups will be shown.
        - If no filter is provided, all groups will be shown.
        - If an array of codes is provided, only these specific groups will be shown.
        - If the value is ``null``, no groups will be shown.

        Args:
            body: Include the details of the report you would like to create along with the filters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/reports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReportsRequest | ReportsRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[ReportsResponse],
            error_mapper=createreport_error_mapper,
            request_options=request_options,
        )

    def delete_report(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteReportErrorBody]:
        """Permanently deletes a report and all associated snapshot data.

        Args:
            id_: The ID of the generated report
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/reports/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=empty_response,
            error_mapper=delete_report_error_mapper,
            request_options=request_options,
        )

    def list_report_types(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ReportsTypesResponse, ListReportTypesErrorBody]:
        """Use this endpoint to retrieve a list of supported reports. This identifies the complete list of supported
        reports, which can be used to create reports on.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/reports/types"),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[ReportsTypesResponse],
            error_mapper=list_report_types_error_mapper,
            request_options=request_options,
        )

    def listallreports(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ReportsResponse2, ListallreportsErrorBody]:
        """Use this endpoint to retrieve a list of created reports. Every created report is saved as a snapshot and can
        be retrieved up to 24 hours after creation.You can call the reports/types endpoint to see the list of supported
        reports. reports.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/reports"),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[ReportsResponse2],
            error_mapper=listallreports_error_mapper,
            request_options=request_options,
        )

    def retrieve_report(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RetrieveReportErrorBody]:
        """Use this endpoint to retrieve a specific report. Ensure you check the documentation for the schema of each
        report type.

        | Request Header | Description |
        |----------------|-----------------------------------------------------------------------------|
        | Accept | Specifies the format of the response. Use ``application/pdf`` |

        If you want to generate the PDF, make sure to change ``accept`` in the CURL request to ``application/pdf`` for
        PDF generation.

        Args:
            id_: The ID of the generated report
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/reports/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.services_token,
            decoder=file_decoder,
            error_mapper=retrieve_report_error_mapper,
            request_options=request_options,
        )

    def retrieve_report_transactions(
        self, report_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TransactionsContainerObject, RetrieveReportTransactionsErrorBody]:
        """Retrieve transactions belonging to the report identified by {reportId}.

        Args:
            report_id: The ID of the generated report
            filter_: - account.id.eq('15a28893-e8c9-4441-a076-470195218738') -
                transaction.postDate.bt('2022-10-01,2022-10-10') -
                transaction.postDate.(eq|gt|lt|gteq|lteq)('2022-12-03T00:00:00Z') - institution.id.eq('AU00001') -
                connection.id.eq('12857a4c-931d-4a5a-ab74-399dafb03bfe') -
                transaction.id.eq('14198297-b3b5-415c-b6ad-8a14476ef61c') - transaction.direction.eq('credit') -
                transaction.class.eq('transfer') - transaction.status.eq('posted') Transactions can be filtered based on
                date & datetime.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/reports/{reportId}/transactions"),
            path_params=[param[str]("reportId", report_id)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[TransactionsContainerObject],
            error_mapper=retrieve_report_transactions_error_mapper,
            request_options=request_options,
        )

    def retrieve_specific_report_type(
        self, report_type_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ReportsTypesResponse, RetrieveSpecificReportTypeErrorBody]:
        """Retrieve information about a specific report type identified by {reportId}.

        Args:
            report_type_id: The type of the report
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/reports/types/{reportTypeId}"),
            path_params=[param[str]("reportTypeId", report_type_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[ReportsTypesResponse],
            error_mapper=retrieve_specific_report_type_error_mapper,
            request_options=request_options,
        )


class AsyncReportsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def createreport(
        self, body: ReportsRequest | ReportsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ReportsResponse, CreatereportErrorBody]:
        """Use this endpoint to create a new report. Report creation is an asynchronous task, meaning a job will be
        returned to let you know the progress of the report generation. You can poll the job to know when the report has
        been generated. You can create any supported report (see reportTypes for a list of supported reports). Ensure
        you provide the necessary filters when generating a report. All created reports, will store a copy of the data
        as a snapshot - this ensures that you have access to the raw data that was used to create the report. This API
        allows generating reports with various filters. The ``filters`` field in the report request enables you to
        specify parameters for customizing the report content.
        > 📘 Note: The report title cannot be longer than 50 characters.

        > 📘 **Reminder:** When Enrich data is updated, the transactions' Enrich results won’t automatically reflect
            these updates. To ensure your report reflects the latest Enrich data, purge and refresh connections before
            generating a new report.

        ### Filters Filters are used to narrow down the data included in the report. The available filters are:
        - ``fromDate``: Specifies the start date for the report data (format: YYYY-MM-DD).
        - ``toDate``: Specifies the end date for the report data (format: YYYY-MM-DD).
        - ``accounts``: List of account IDs to include in the report.
        - ``users``: List of user IDs to include in the report.
        - ``includeMetrics``: List of metric codes to include in the report. Supported values are specific to the report
            type. Rules for ``includeMetrics``:
        - If the array is empty (``"value": []``), all metrics will be shown.
        - If no filter is provided, all metrics will be shown.
        - If an array of codes is provided, only these specific metrics will be shown.
        - If the value is ``null``, no metrics will be shown.

        - ``includeGroups``: List of group codes to include in the report. Supported values are specific to the report
            type. Rules for ``includeGroups``:
        - If the array is empty (``"value": []``), all groups will be shown.
        - If no filter is provided, all groups will be shown.
        - If an array of codes is provided, only these specific groups will be shown.
        - If the value is ``null``, no groups will be shown.

        Args:
            body: Include the details of the report you would like to create along with the filters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/reports"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReportsRequest | ReportsRequestDict](body),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[ReportsResponse],
            error_mapper=createreport_error_mapper,
            request_options=request_options,
        )

    async def delete_report(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteReportErrorBody]:
        """Permanently deletes a report and all associated snapshot data.

        Args:
            id_: The ID of the generated report
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/reports/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=async_empty_response,
            error_mapper=delete_report_error_mapper,
            request_options=request_options,
        )

    async def list_report_types(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ReportsTypesResponse, ListReportTypesErrorBody]:
        """Use this endpoint to retrieve a list of supported reports. This identifies the complete list of supported
        reports, which can be used to create reports on.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/reports/types"),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[ReportsTypesResponse],
            error_mapper=list_report_types_error_mapper,
            request_options=request_options,
        )

    async def listallreports(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ReportsResponse2, ListallreportsErrorBody]:
        """Use this endpoint to retrieve a list of created reports. Every created report is saved as a snapshot and can
        be retrieved up to 24 hours after creation.You can call the reports/types endpoint to see the list of supported
        reports. reports.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/reports"),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[ReportsResponse2],
            error_mapper=listallreports_error_mapper,
            request_options=request_options,
        )

    async def retrieve_report(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RetrieveReportErrorBody]:
        """Use this endpoint to retrieve a specific report. Ensure you check the documentation for the schema of each
        report type.

        | Request Header | Description |
        |----------------|-----------------------------------------------------------------------------|
        | Accept | Specifies the format of the response. Use ``application/pdf`` |

        If you want to generate the PDF, make sure to change ``accept`` in the CURL request to ``application/pdf`` for
        PDF generation.

        Args:
            id_: The ID of the generated report
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/reports/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.services_token,
            decoder=async_file_decoder,
            error_mapper=retrieve_report_error_mapper,
            request_options=request_options,
        )

    async def retrieve_report_transactions(
        self, report_id: str, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TransactionsContainerObject, RetrieveReportTransactionsErrorBody]:
        """Retrieve transactions belonging to the report identified by {reportId}.

        Args:
            report_id: The ID of the generated report
            filter_: - account.id.eq('15a28893-e8c9-4441-a076-470195218738') -
                transaction.postDate.bt('2022-10-01,2022-10-10') -
                transaction.postDate.(eq|gt|lt|gteq|lteq)('2022-12-03T00:00:00Z') - institution.id.eq('AU00001') -
                connection.id.eq('12857a4c-931d-4a5a-ab74-399dafb03bfe') -
                transaction.id.eq('14198297-b3b5-415c-b6ad-8a14476ef61c') - transaction.direction.eq('credit') -
                transaction.class.eq('transfer') - transaction.status.eq('posted') Transactions can be filtered based on
                date & datetime.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/reports/{reportId}/transactions"),
            path_params=[param[str]("reportId", report_id)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[TransactionsContainerObject],
            error_mapper=retrieve_report_transactions_error_mapper,
            request_options=request_options,
        )

    async def retrieve_specific_report_type(
        self, report_type_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ReportsTypesResponse, RetrieveSpecificReportTypeErrorBody]:
        """Retrieve information about a specific report type identified by {reportId}.

        Args:
            report_type_id: The type of the report
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/reports/types/{reportTypeId}"),
            path_params=[param[str]("reportTypeId", report_type_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[ReportsTypesResponse],
            error_mapper=retrieve_specific_report_type_error_mapper,
            request_options=request_options,
        )
