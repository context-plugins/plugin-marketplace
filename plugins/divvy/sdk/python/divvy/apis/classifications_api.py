from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.archive_classification_accounting_class_error import (
    ArchiveClassificationAccountingClassErrorBody,
    archive_classification_accounting_class_error_mapper,
)
from ..errors.archive_classification_chart_of_accounts_error import (
    ArchiveClassificationChartOfAccountsErrorBody,
    archive_classification_chart_of_accounts_error_mapper,
)
from ..errors.archive_classification_department_error import (
    ArchiveClassificationDepartmentErrorBody,
    archive_classification_department_error_mapper,
)
from ..errors.archive_classification_employee_error import (
    ArchiveClassificationEmployeeErrorBody,
    archive_classification_employee_error_mapper,
)
from ..errors.archive_classification_item_error import (
    ArchiveClassificationItemErrorBody,
    archive_classification_item_error_mapper,
)
from ..errors.archive_classification_job_error import (
    ArchiveClassificationJobErrorBody,
    archive_classification_job_error_mapper,
)
from ..errors.archive_classification_location_error import (
    ArchiveClassificationLocationErrorBody,
    archive_classification_location_error_mapper,
)
from ..errors.bulk_archive_classification_accounting_class_error import (
    BulkArchiveClassificationAccountingClassErrorBody,
    bulk_archive_classification_accounting_class_error_mapper,
)
from ..errors.bulk_archive_classification_chart_of_accounts_error import (
    BulkArchiveClassificationChartOfAccountsErrorBody,
    bulk_archive_classification_chart_of_accounts_error_mapper,
)
from ..errors.bulk_archive_classification_department_error import (
    BulkArchiveClassificationDepartmentErrorBody,
    bulk_archive_classification_department_error_mapper,
)
from ..errors.bulk_archive_classification_employee_error import (
    BulkArchiveClassificationEmployeeErrorBody,
    bulk_archive_classification_employee_error_mapper,
)
from ..errors.bulk_archive_classification_item_error import (
    BulkArchiveClassificationItemErrorBody,
    bulk_archive_classification_item_error_mapper,
)
from ..errors.bulk_archive_classification_job_error import (
    BulkArchiveClassificationJobErrorBody,
    bulk_archive_classification_job_error_mapper,
)
from ..errors.bulk_archive_classification_location_error import (
    BulkArchiveClassificationLocationErrorBody,
    bulk_archive_classification_location_error_mapper,
)
from ..errors.bulk_create_classification_accounting_class_error import (
    BulkCreateClassificationAccountingClassErrorBody,
    bulk_create_classification_accounting_class_error_mapper,
)
from ..errors.bulk_create_classification_chart_of_accounts_error import (
    BulkCreateClassificationChartOfAccountsErrorBody,
    bulk_create_classification_chart_of_accounts_error_mapper,
)
from ..errors.bulk_create_classification_department_error import (
    BulkCreateClassificationDepartmentErrorBody,
    bulk_create_classification_department_error_mapper,
)
from ..errors.bulk_create_classification_employee_error import (
    BulkCreateClassificationEmployeeErrorBody,
    bulk_create_classification_employee_error_mapper,
)
from ..errors.bulk_create_classification_item_error import (
    BulkCreateClassificationItemErrorBody,
    bulk_create_classification_item_error_mapper,
)
from ..errors.bulk_create_classification_job_error import (
    BulkCreateClassificationJobErrorBody,
    bulk_create_classification_job_error_mapper,
)
from ..errors.bulk_create_classification_location_error import (
    BulkCreateClassificationLocationErrorBody,
    bulk_create_classification_location_error_mapper,
)
from ..errors.bulk_restore_classification_accounting_class_error import (
    BulkRestoreClassificationAccountingClassErrorBody,
    bulk_restore_classification_accounting_class_error_mapper,
)
from ..errors.bulk_restore_classification_chart_of_accounts_error import (
    BulkRestoreClassificationChartOfAccountsErrorBody,
    bulk_restore_classification_chart_of_accounts_error_mapper,
)
from ..errors.bulk_restore_classification_department_error import (
    BulkRestoreClassificationDepartmentErrorBody,
    bulk_restore_classification_department_error_mapper,
)
from ..errors.bulk_restore_classification_employee_error import (
    BulkRestoreClassificationEmployeeErrorBody,
    bulk_restore_classification_employee_error_mapper,
)
from ..errors.bulk_restore_classification_item_error import (
    BulkRestoreClassificationItemErrorBody,
    bulk_restore_classification_item_error_mapper,
)
from ..errors.bulk_restore_classification_job_error import (
    BulkRestoreClassificationJobErrorBody,
    bulk_restore_classification_job_error_mapper,
)
from ..errors.bulk_restore_classification_location_error import (
    BulkRestoreClassificationLocationErrorBody,
    bulk_restore_classification_location_error_mapper,
)
from ..errors.bulk_update_classification_accounting_class_error import (
    BulkUpdateClassificationAccountingClassErrorBody,
    bulk_update_classification_accounting_class_error_mapper,
)
from ..errors.bulk_update_classification_chart_of_accounts_error import (
    BulkUpdateClassificationChartOfAccountsErrorBody,
    bulk_update_classification_chart_of_accounts_error_mapper,
)
from ..errors.bulk_update_classification_department_error import (
    BulkUpdateClassificationDepartmentErrorBody,
    bulk_update_classification_department_error_mapper,
)
from ..errors.bulk_update_classification_employee_error import (
    BulkUpdateClassificationEmployeeErrorBody,
    bulk_update_classification_employee_error_mapper,
)
from ..errors.bulk_update_classification_item_error import (
    BulkUpdateClassificationItemErrorBody,
    bulk_update_classification_item_error_mapper,
)
from ..errors.bulk_update_classification_job_error import (
    BulkUpdateClassificationJobErrorBody,
    bulk_update_classification_job_error_mapper,
)
from ..errors.bulk_update_classification_location_error import (
    BulkUpdateClassificationLocationErrorBody,
    bulk_update_classification_location_error_mapper,
)
from ..errors.create_classification_accounting_class_error import (
    CreateClassificationAccountingClassErrorBody,
    create_classification_accounting_class_error_mapper,
)
from ..errors.create_classification_chart_of_accounts_error import (
    CreateClassificationChartOfAccountsErrorBody,
    create_classification_chart_of_accounts_error_mapper,
)
from ..errors.create_classification_department_error import (
    CreateClassificationDepartmentErrorBody,
    create_classification_department_error_mapper,
)
from ..errors.create_classification_employee_error import (
    CreateClassificationEmployeeErrorBody,
    create_classification_employee_error_mapper,
)
from ..errors.create_classification_item_error import (
    CreateClassificationItemErrorBody,
    create_classification_item_error_mapper,
)
from ..errors.create_classification_job_error import (
    CreateClassificationJobErrorBody,
    create_classification_job_error_mapper,
)
from ..errors.create_classification_location_error import (
    CreateClassificationLocationErrorBody,
    create_classification_location_error_mapper,
)
from ..errors.get_classification_accounting_class_error import (
    GetClassificationAccountingClassErrorBody,
    get_classification_accounting_class_error_mapper,
)
from ..errors.get_classification_chart_of_accounts_error import (
    GetClassificationChartOfAccountsErrorBody,
    get_classification_chart_of_accounts_error_mapper,
)
from ..errors.get_classification_department_error import (
    GetClassificationDepartmentErrorBody,
    get_classification_department_error_mapper,
)
from ..errors.get_classification_employee_error import (
    GetClassificationEmployeeErrorBody,
    get_classification_employee_error_mapper,
)
from ..errors.get_classification_item_error import GetClassificationItemErrorBody, get_classification_item_error_mapper
from ..errors.get_classification_job_error import GetClassificationJobErrorBody, get_classification_job_error_mapper
from ..errors.get_classification_location_error import (
    GetClassificationLocationErrorBody,
    get_classification_location_error_mapper,
)
from ..errors.list_classification_accounting_classes_error import (
    ListClassificationAccountingClassesErrorBody,
    list_classification_accounting_classes_error_mapper,
)
from ..errors.list_classification_chart_of_accounts_error import (
    ListClassificationChartOfAccountsErrorBody,
    list_classification_chart_of_accounts_error_mapper,
)
from ..errors.list_classification_departments_error import (
    ListClassificationDepartmentsErrorBody,
    list_classification_departments_error_mapper,
)
from ..errors.list_classification_employees_error import (
    ListClassificationEmployeesErrorBody,
    list_classification_employees_error_mapper,
)
from ..errors.list_classification_items_error import (
    ListClassificationItemsErrorBody,
    list_classification_items_error_mapper,
)
from ..errors.list_classification_jobs_error import (
    ListClassificationJobsErrorBody,
    list_classification_jobs_error_mapper,
)
from ..errors.list_classification_locations_error import (
    ListClassificationLocationsErrorBody,
    list_classification_locations_error_mapper,
)
from ..errors.restore_classification_accounting_class_error import (
    RestoreClassificationAccountingClassErrorBody,
    restore_classification_accounting_class_error_mapper,
)
from ..errors.restore_classification_chart_of_accounts_error import (
    RestoreClassificationChartOfAccountsErrorBody,
    restore_classification_chart_of_accounts_error_mapper,
)
from ..errors.restore_classification_department_error import (
    RestoreClassificationDepartmentErrorBody,
    restore_classification_department_error_mapper,
)
from ..errors.restore_classification_employee_error import (
    RestoreClassificationEmployeeErrorBody,
    restore_classification_employee_error_mapper,
)
from ..errors.restore_classification_item_error import (
    RestoreClassificationItemErrorBody,
    restore_classification_item_error_mapper,
)
from ..errors.restore_classification_job_error import (
    RestoreClassificationJobErrorBody,
    restore_classification_job_error_mapper,
)
from ..errors.restore_classification_location_error import (
    RestoreClassificationLocationErrorBody,
    restore_classification_location_error_mapper,
)
from ..errors.update_classification_accounting_class_error import (
    UpdateClassificationAccountingClassErrorBody,
    update_classification_accounting_class_error_mapper,
)
from ..errors.update_classification_chart_of_accounts_error import (
    UpdateClassificationChartOfAccountsErrorBody,
    update_classification_chart_of_accounts_error_mapper,
)
from ..errors.update_classification_department_error import (
    UpdateClassificationDepartmentErrorBody,
    update_classification_department_error_mapper,
)
from ..errors.update_classification_employee_error import (
    UpdateClassificationEmployeeErrorBody,
    update_classification_employee_error_mapper,
)
from ..errors.update_classification_item_error import (
    UpdateClassificationItemErrorBody,
    update_classification_item_error_mapper,
)
from ..errors.update_classification_job_error import (
    UpdateClassificationJobErrorBody,
    update_classification_job_error_mapper,
)
from ..errors.update_classification_location_error import (
    UpdateClassificationLocationErrorBody,
    update_classification_location_error_mapper,
)
from ..models.classification_accounting_class_bulk_response_dto import ClassificationAccountingClassBulkResponseDto
from ..models.classification_accounting_class_response_dto import ClassificationAccountingClassResponseDto
from ..models.classification_chart_of_accounts_bulk_response_dto import ClassificationChartOfAccountsBulkResponseDto
from ..models.classification_chart_of_accounts_response_dto import ClassificationChartOfAccountsResponseDto
from ..models.classification_department_bulk_response_dto import ClassificationDepartmentBulkResponseDto
from ..models.classification_department_response_dto import ClassificationDepartmentResponseDto
from ..models.classification_employee_bulk_response_dto import ClassificationEmployeeBulkResponseDto
from ..models.classification_employee_response_dto import ClassificationEmployeeResponseDto
from ..models.classification_item_bulk_response_dto import ClassificationItemBulkResponseDto
from ..models.classification_item_response_dto import ClassificationItemResponseDto
from ..models.classification_job_bulk_response_dto import ClassificationJobBulkResponseDto
from ..models.classification_job_response_dto import ClassificationJobResponseDto
from ..models.classification_location_bulk_response_dto import ClassificationLocationBulkResponseDto
from ..models.classification_location_response_dto import ClassificationLocationResponseDto
from ..models.create_classification_accounting_class_request_dto import (
    CreateClassificationAccountingClassRequestDto,
    CreateClassificationAccountingClassRequestDtoDict,
)
from ..models.create_classification_chart_of_accounts_request_dto import (
    CreateClassificationChartOfAccountsRequestDto,
    CreateClassificationChartOfAccountsRequestDtoDict,
)
from ..models.create_classification_department_request_dto import (
    CreateClassificationDepartmentRequestDto,
    CreateClassificationDepartmentRequestDtoDict,
)
from ..models.create_classification_employee_request_dto import (
    CreateClassificationEmployeeRequestDto,
    CreateClassificationEmployeeRequestDtoDict,
)
from ..models.create_classification_item_request_dto import (
    CreateClassificationItemRequestDto,
    CreateClassificationItemRequestDtoDict,
)
from ..models.create_classification_job_request_dto import (
    CreateClassificationJobRequestDto,
    CreateClassificationJobRequestDtoDict,
)
from ..models.create_classification_location_request_dto import (
    CreateClassificationLocationRequestDto,
    CreateClassificationLocationRequestDtoDict,
)
from ..models.list_response_dto_classification_accounting_class_response_dto import (
    ListResponseDtoClassificationAccountingClassResponseDto,
)
from ..models.list_response_dto_classification_chart_of_accounts_response_dto import (
    ListResponseDtoClassificationChartOfAccountsResponseDto,
)
from ..models.list_response_dto_classification_department_response_dto import (
    ListResponseDtoClassificationDepartmentResponseDto,
)
from ..models.list_response_dto_classification_employee_response_dto import (
    ListResponseDtoClassificationEmployeeResponseDto,
)
from ..models.list_response_dto_classification_item_response_dto import ListResponseDtoClassificationItemResponseDto
from ..models.list_response_dto_classification_job_response_dto import ListResponseDtoClassificationJobResponseDto
from ..models.list_response_dto_classification_location_response_dto import (
    ListResponseDtoClassificationLocationResponseDto,
)
from ..models.update_classification_accounting_class_request_dto import (
    UpdateClassificationAccountingClassRequestDto,
    UpdateClassificationAccountingClassRequestDtoDict,
)
from ..models.update_classification_accounting_class_with_id_request_dto import (
    UpdateClassificationAccountingClassWithIdRequestDto,
    UpdateClassificationAccountingClassWithIdRequestDtoDict,
)
from ..models.update_classification_chart_of_accounts_request_dto import (
    UpdateClassificationChartOfAccountsRequestDto,
    UpdateClassificationChartOfAccountsRequestDtoDict,
)
from ..models.update_classification_chart_of_accounts_with_id_request_dto import (
    UpdateClassificationChartOfAccountsWithIdRequestDto,
    UpdateClassificationChartOfAccountsWithIdRequestDtoDict,
)
from ..models.update_classification_department_request_dto import (
    UpdateClassificationDepartmentRequestDto,
    UpdateClassificationDepartmentRequestDtoDict,
)
from ..models.update_classification_department_with_id_request_dto import (
    UpdateClassificationDepartmentWithIdRequestDto,
    UpdateClassificationDepartmentWithIdRequestDtoDict,
)
from ..models.update_classification_employee_request_dto import (
    UpdateClassificationEmployeeRequestDto,
    UpdateClassificationEmployeeRequestDtoDict,
)
from ..models.update_classification_employee_with_id_request_dto import (
    UpdateClassificationEmployeeWithIdRequestDto,
    UpdateClassificationEmployeeWithIdRequestDtoDict,
)
from ..models.update_classification_item_request_dto import (
    UpdateClassificationItemRequestDto,
    UpdateClassificationItemRequestDtoDict,
)
from ..models.update_classification_item_with_id_request_dto import (
    UpdateClassificationItemWithIdRequestDto,
    UpdateClassificationItemWithIdRequestDtoDict,
)
from ..models.update_classification_job_request_dto import (
    UpdateClassificationJobRequestDto,
    UpdateClassificationJobRequestDtoDict,
)
from ..models.update_classification_job_with_id_request_dto import (
    UpdateClassificationJobWithIdRequestDto,
    UpdateClassificationJobWithIdRequestDtoDict,
)
from ..models.update_classification_location_request_dto import (
    UpdateClassificationLocationRequestDto,
    UpdateClassificationLocationRequestDtoDict,
)
from ..models.update_classification_location_with_id_request_dto import (
    UpdateClassificationLocationWithIdRequestDto,
    UpdateClassificationLocationWithIdRequestDtoDict,
)
from ..server.server import Server


class ClassificationsApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ClassificationsApiWithRawResponse(client, server)

    def archive_classification_accounting_class(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassResponseDto:
        """Archive an existing accounting class. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive an accounting class response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_classification_accounting_class(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def archive_classification_chart_of_accounts(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsResponseDto:
        """Archive an existing chart of accounts. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_classification_chart_of_accounts(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def archive_classification_department(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentResponseDto:
        """Archive an existing department. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a department response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_classification_department(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def archive_classification_employee(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeResponseDto:
        """Archive an existing employee. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive an employee response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_classification_employee(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def archive_classification_item(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationItemResponseDto:
        """Archive an existing item. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive an item response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_classification_item(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def archive_classification_job(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationJobResponseDto:
        """Archive an existing job. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a job response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_classification_job(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def archive_classification_location(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationLocationResponseDto:
        """Archive an existing location. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a location response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_classification_location(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_archive_classification_accounting_class(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassBulkResponseDto:
        """Archive multiple accounting classes with one API request. In the response, the ``archived`` field for each
        object is set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple accounting classes response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_archive_classification_accounting_class(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_archive_classification_chart_of_accounts(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsBulkResponseDto:
        """Archive multiple chart of accounts with one API request. In the response, the ``archived`` field for each
        object is set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_archive_classification_chart_of_accounts(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_archive_classification_department(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentBulkResponseDto:
        """Archive multiple departments with one API request. In the response, the ``archived`` field is set as
        ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple departments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_archive_classification_department(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_archive_classification_employee(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeBulkResponseDto:
        """Archive multiple employees with one API request. In the response, the ``archived`` field for each object is
        set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple employees response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_archive_classification_employee(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_archive_classification_item(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationItemBulkResponseDto:
        """Archive multiple items with one API request. In the response, the ``archived`` field for each object is set
        as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple items response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_archive_classification_item(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_archive_classification_job(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationJobBulkResponseDto:
        """Archive multiple jobs with one API request. In the response, the ``archived`` field for each object is set as
        ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple jobs response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_archive_classification_job(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_archive_classification_location(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationLocationBulkResponseDto:
        """Archive multiple locations with one API request. In the response, the ``archived`` field for each object is
        set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple locations response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_archive_classification_location(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_create_classification_accounting_class(
        self,
        body: list[CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassBulkResponseDto:
        """Create multiple accounting classes with one API request. You can create up to 50 accounting classes with one
        ``POST /v3/classifications/accounting-classes/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple accounting classes response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_create_classification_accounting_class(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_create_classification_chart_of_accounts(
        self,
        body: list[CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsBulkResponseDto:
        """Create multiple chart of accounts with one API request. You can create up to 50 chart of accounts with one
        ``POST /v3/classifications/chart-of-accounts/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_create_classification_chart_of_accounts(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_create_classification_department(
        self,
        body: list[CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentBulkResponseDto:
        """Create multiple departments with one API request. You can create up to 50 departments with one ``POST
        /v3/classifications/departments/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple departments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_create_classification_department(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_create_classification_employee(
        self,
        body: list[CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeBulkResponseDto:
        """Create multiple employees with one API request. You can create up to 50 employees with one ``POST
        /v3/classifications/employees/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple employees response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_create_classification_employee(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_create_classification_item(
        self,
        body: list[CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationItemBulkResponseDto:
        """Create multiple items with one API request. You can create up to 50 items with one ``POST
        /v3/classifications/items/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple items response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_create_classification_item(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_create_classification_job(
        self,
        body: list[CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationJobBulkResponseDto:
        """Create multiple jobs with one API request. You can create up to 50 jobs with one ``POST
        /v3/classifications/jobs/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple jobs response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_create_classification_job(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_create_classification_location(
        self,
        body: list[CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationLocationBulkResponseDto:
        """Create multiple locations with one API request. You can create up to 50 locations with one ``POST
        /v3/classifications/locations/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple locations response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_create_classification_location(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_restore_classification_accounting_class(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassBulkResponseDto:
        """Restore multiple accounting classes with one API request. In the response, the ``archived`` field for each
        object is set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple accounting classes response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_restore_classification_accounting_class(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_restore_classification_chart_of_accounts(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsBulkResponseDto:
        """Restore multiple chart of accounts with one API request. In the response, the ``archived`` field for each
        object is set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_restore_classification_chart_of_accounts(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_restore_classification_department(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentBulkResponseDto:
        """Restore multiple departments with one API request. In the response, the ``archived`` field is set as
        ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple departments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_restore_classification_department(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_restore_classification_employee(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeBulkResponseDto:
        """Restore multiple employees with one API request. In the response, the ``archived`` field for each object is
        set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple employees response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_restore_classification_employee(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_restore_classification_item(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationItemBulkResponseDto:
        """Restore multiple items with one API request. In the response, the ``archived`` field for each object is set
        as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple items response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_restore_classification_item(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_restore_classification_job(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationJobBulkResponseDto:
        """Restore multiple jobs with one API request. In the response, the ``archived`` field for each object is set as
        ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple jobs response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_restore_classification_job(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_restore_classification_location(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationLocationBulkResponseDto:
        """Restore multiple locations with one API request. In the response, the ``archived`` field for each object is
        set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple locations response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_restore_classification_location(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_update_classification_accounting_class(
        self,
        body: list[
            (
                UpdateClassificationAccountingClassWithIdRequestDto
                | UpdateClassificationAccountingClassWithIdRequestDtoDict
            )
        ],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassBulkResponseDto:
        """Update details about multiple accounting classes with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple accounting classes response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_update_classification_accounting_class(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_update_classification_chart_of_accounts(
        self,
        body: list[
            (
                UpdateClassificationChartOfAccountsWithIdRequestDto
                | UpdateClassificationChartOfAccountsWithIdRequestDtoDict
            )
        ],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsBulkResponseDto:
        """Update details about multiple chart of accounts with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_update_classification_chart_of_accounts(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_update_classification_department(
        self,
        body: list[UpdateClassificationDepartmentWithIdRequestDto | UpdateClassificationDepartmentWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentBulkResponseDto:
        """Update multiple departments with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple departments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_update_classification_department(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_update_classification_employee(
        self,
        body: list[UpdateClassificationEmployeeWithIdRequestDto | UpdateClassificationEmployeeWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeBulkResponseDto:
        """Update details about multiple employees with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple employees response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_update_classification_employee(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_update_classification_item(
        self,
        body: list[UpdateClassificationItemWithIdRequestDto | UpdateClassificationItemWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationItemBulkResponseDto:
        """Update details about multiple items with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple items response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_update_classification_item(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_update_classification_job(
        self,
        body: list[UpdateClassificationJobWithIdRequestDto | UpdateClassificationJobWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationJobBulkResponseDto:
        """Update details about multiple jobs with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple jobs response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_update_classification_job(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_update_classification_location(
        self,
        body: list[UpdateClassificationLocationWithIdRequestDto | UpdateClassificationLocationWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationLocationBulkResponseDto:
        """Update details about multiple locations with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple locations response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_update_classification_location(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_classification_accounting_class(
        self,
        body: CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassResponseDto:
        """Create a new accounting class.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create an accounting class response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_classification_accounting_class(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_classification_chart_of_accounts(
        self,
        body: CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsResponseDto:
        """Create a new chart of accounts.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_classification_chart_of_accounts(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_classification_department(
        self,
        body: CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentResponseDto:
        """Create a new department.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a department response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_classification_department(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_classification_employee(
        self,
        body: CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeResponseDto:
        """Create a new employee.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create an employee response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_classification_employee(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_classification_item(
        self,
        body: CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationItemResponseDto:
        """Create a new item.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create an item response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_classification_item(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_classification_job(
        self,
        body: CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationJobResponseDto:
        """Create a new job.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a job response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_classification_job(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_classification_location(
        self,
        body: CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationLocationResponseDto:
        """Create a new location.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a location response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_classification_location(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_classification_accounting_class(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassResponseDto:
        """Get details about an existing accounting class.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get accounting class details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_classification_accounting_class(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_classification_chart_of_accounts(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsResponseDto:
        """Get details about an existing chart of accounts.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get chart of accounts details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_classification_chart_of_accounts(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_classification_department(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentResponseDto:
        """Get details about an existing department.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get department details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_classification_department(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_classification_employee(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeResponseDto:
        """Get details about an existing employee.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get employee details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_classification_employee(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_classification_item(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationItemResponseDto:
        """Get details about an existing item.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get item details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_classification_item(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_classification_job(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationJobResponseDto:
        """Get details about an existing job.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get job details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_classification_job(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_classification_location(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationLocationResponseDto:
        """Get details about an existing location.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get location details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_classification_location(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_classification_accounting_classes(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoClassificationAccountingClassResponseDto:
        """Get a list of accounting class objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of accounting classes response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_classification_accounting_classes(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def list_classification_chart_of_accounts(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoClassificationChartOfAccountsResponseDto:
        """Get a list of chart of accounts objects. By default, you get 20 results on one page of results. Set ``max``
        in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_classification_chart_of_accounts(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def list_classification_departments(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoClassificationDepartmentResponseDto:
        """Get a list of department objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of classification departments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_classification_departments(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def list_classification_employees(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoClassificationEmployeeResponseDto:
        """Get a list of employee objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of employees response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_classification_employees(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def list_classification_items(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoClassificationItemResponseDto:
        """Get a list of item objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of items response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_classification_items(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def list_classification_jobs(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoClassificationJobResponseDto:
        """Get a list of job objects. By default, you get 20 results on one page of results. Set ``max`` in your request
        to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of jobs response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_classification_jobs(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def list_classification_locations(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoClassificationLocationResponseDto:
        """Get a list of location objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of locations response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_classification_locations(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def restore_classification_accounting_class(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassResponseDto:
        """Restore an archived accounting class. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an accounting class response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_classification_accounting_class(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def restore_classification_chart_of_accounts(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsResponseDto:
        """Restore an archived chart of accounts. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore a chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_classification_chart_of_accounts(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def restore_classification_department(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentResponseDto:
        """Restore an archived department. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore a department response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_classification_department(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def restore_classification_employee(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeResponseDto:
        """Restore an archived employee. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived employee response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_classification_employee(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def restore_classification_item(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationItemResponseDto:
        """Restore an archived item. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore classification item response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_classification_item(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def restore_classification_job(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationJobResponseDto:
        """Restore an archived job. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived job response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_classification_job(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def restore_classification_location(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationLocationResponseDto:
        """Restore an archived location. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived location response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_classification_location(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_classification_accounting_class(
        self,
        id_: str,
        body: UpdateClassificationAccountingClassRequestDto | UpdateClassificationAccountingClassRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassResponseDto:
        """Update details about an existing accounting class.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update an accounting class response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_classification_accounting_class(
                id_, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_classification_chart_of_accounts(
        self,
        id_: str,
        body: UpdateClassificationChartOfAccountsRequestDto | UpdateClassificationChartOfAccountsRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsResponseDto:
        """Update details about an existing chart of accounts.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_classification_chart_of_accounts(
                id_, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_classification_department(
        self,
        id_: str,
        body: UpdateClassificationDepartmentRequestDto | UpdateClassificationDepartmentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentResponseDto:
        """Update details about an existing department.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a department response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_classification_department(
                id_, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_classification_employee(
        self,
        id_: str,
        body: UpdateClassificationEmployeeRequestDto | UpdateClassificationEmployeeRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeResponseDto:
        """Update details about an existing employee.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update an employee response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_classification_employee(
                id_, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_classification_item(
        self,
        id_: str,
        body: UpdateClassificationItemRequestDto | UpdateClassificationItemRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationItemResponseDto:
        """Update details about an existing item.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update an item response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_classification_item(
                id_, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_classification_job(
        self,
        id_: str,
        body: UpdateClassificationJobRequestDto | UpdateClassificationJobRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationJobResponseDto:
        """Update details about an existing job.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a job response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_classification_job(
                id_, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_classification_location(
        self,
        id_: str,
        body: UpdateClassificationLocationRequestDto | UpdateClassificationLocationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ClassificationLocationResponseDto:
        """Update details about an existing location.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a location response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_classification_location(
                id_, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ClassificationsApiWithRawResponse:
        return self._with_raw_response


class AsyncClassificationsApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncClassificationsApiWithRawResponse(client, server)

    async def archive_classification_accounting_class(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassResponseDto:
        """Archive an existing accounting class. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive an accounting class response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_classification_accounting_class(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def archive_classification_chart_of_accounts(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsResponseDto:
        """Archive an existing chart of accounts. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_classification_chart_of_accounts(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def archive_classification_department(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentResponseDto:
        """Archive an existing department. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a department response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_classification_department(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def archive_classification_employee(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeResponseDto:
        """Archive an existing employee. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive an employee response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_classification_employee(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def archive_classification_item(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationItemResponseDto:
        """Archive an existing item. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive an item response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_classification_item(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def archive_classification_job(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationJobResponseDto:
        """Archive an existing job. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a job response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_classification_job(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def archive_classification_location(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationLocationResponseDto:
        """Archive an existing location. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a location response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_classification_location(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_archive_classification_accounting_class(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassBulkResponseDto:
        """Archive multiple accounting classes with one API request. In the response, the ``archived`` field for each
        object is set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple accounting classes response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_archive_classification_accounting_class(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_archive_classification_chart_of_accounts(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsBulkResponseDto:
        """Archive multiple chart of accounts with one API request. In the response, the ``archived`` field for each
        object is set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_archive_classification_chart_of_accounts(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_archive_classification_department(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentBulkResponseDto:
        """Archive multiple departments with one API request. In the response, the ``archived`` field is set as
        ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple departments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_archive_classification_department(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_archive_classification_employee(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeBulkResponseDto:
        """Archive multiple employees with one API request. In the response, the ``archived`` field for each object is
        set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple employees response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_archive_classification_employee(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_archive_classification_item(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationItemBulkResponseDto:
        """Archive multiple items with one API request. In the response, the ``archived`` field for each object is set
        as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple items response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_archive_classification_item(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_archive_classification_job(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationJobBulkResponseDto:
        """Archive multiple jobs with one API request. In the response, the ``archived`` field for each object is set as
        ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple jobs response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_archive_classification_job(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_archive_classification_location(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationLocationBulkResponseDto:
        """Archive multiple locations with one API request. In the response, the ``archived`` field for each object is
        set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple locations response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_archive_classification_location(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_create_classification_accounting_class(
        self,
        body: list[CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassBulkResponseDto:
        """Create multiple accounting classes with one API request. You can create up to 50 accounting classes with one
        ``POST /v3/classifications/accounting-classes/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple accounting classes response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_create_classification_accounting_class(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_create_classification_chart_of_accounts(
        self,
        body: list[CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsBulkResponseDto:
        """Create multiple chart of accounts with one API request. You can create up to 50 chart of accounts with one
        ``POST /v3/classifications/chart-of-accounts/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_create_classification_chart_of_accounts(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_create_classification_department(
        self,
        body: list[CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentBulkResponseDto:
        """Create multiple departments with one API request. You can create up to 50 departments with one ``POST
        /v3/classifications/departments/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple departments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_create_classification_department(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_create_classification_employee(
        self,
        body: list[CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeBulkResponseDto:
        """Create multiple employees with one API request. You can create up to 50 employees with one ``POST
        /v3/classifications/employees/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple employees response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_create_classification_employee(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_create_classification_item(
        self,
        body: list[CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationItemBulkResponseDto:
        """Create multiple items with one API request. You can create up to 50 items with one ``POST
        /v3/classifications/items/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple items response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_create_classification_item(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_create_classification_job(
        self,
        body: list[CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationJobBulkResponseDto:
        """Create multiple jobs with one API request. You can create up to 50 jobs with one ``POST
        /v3/classifications/jobs/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple jobs response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_create_classification_job(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_create_classification_location(
        self,
        body: list[CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationLocationBulkResponseDto:
        """Create multiple locations with one API request. You can create up to 50 locations with one ``POST
        /v3/classifications/locations/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple locations response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_create_classification_location(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_restore_classification_accounting_class(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassBulkResponseDto:
        """Restore multiple accounting classes with one API request. In the response, the ``archived`` field for each
        object is set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple accounting classes response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_restore_classification_accounting_class(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_restore_classification_chart_of_accounts(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsBulkResponseDto:
        """Restore multiple chart of accounts with one API request. In the response, the ``archived`` field for each
        object is set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_restore_classification_chart_of_accounts(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_restore_classification_department(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentBulkResponseDto:
        """Restore multiple departments with one API request. In the response, the ``archived`` field is set as
        ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple departments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_restore_classification_department(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_restore_classification_employee(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeBulkResponseDto:
        """Restore multiple employees with one API request. In the response, the ``archived`` field for each object is
        set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple employees response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_restore_classification_employee(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_restore_classification_item(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationItemBulkResponseDto:
        """Restore multiple items with one API request. In the response, the ``archived`` field for each object is set
        as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple items response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_restore_classification_item(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_restore_classification_job(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationJobBulkResponseDto:
        """Restore multiple jobs with one API request. In the response, the ``archived`` field for each object is set as
        ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple jobs response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_restore_classification_job(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_restore_classification_location(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationLocationBulkResponseDto:
        """Restore multiple locations with one API request. In the response, the ``archived`` field for each object is
        set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore multiple locations response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_restore_classification_location(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_update_classification_accounting_class(
        self,
        body: list[
            (
                UpdateClassificationAccountingClassWithIdRequestDto
                | UpdateClassificationAccountingClassWithIdRequestDtoDict
            )
        ],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassBulkResponseDto:
        """Update details about multiple accounting classes with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple accounting classes response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_update_classification_accounting_class(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_update_classification_chart_of_accounts(
        self,
        body: list[
            (
                UpdateClassificationChartOfAccountsWithIdRequestDto
                | UpdateClassificationChartOfAccountsWithIdRequestDtoDict
            )
        ],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsBulkResponseDto:
        """Update details about multiple chart of accounts with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_update_classification_chart_of_accounts(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_update_classification_department(
        self,
        body: list[UpdateClassificationDepartmentWithIdRequestDto | UpdateClassificationDepartmentWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentBulkResponseDto:
        """Update multiple departments with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple departments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_update_classification_department(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_update_classification_employee(
        self,
        body: list[UpdateClassificationEmployeeWithIdRequestDto | UpdateClassificationEmployeeWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeBulkResponseDto:
        """Update details about multiple employees with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple employees response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_update_classification_employee(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_update_classification_item(
        self,
        body: list[UpdateClassificationItemWithIdRequestDto | UpdateClassificationItemWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationItemBulkResponseDto:
        """Update details about multiple items with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple items response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_update_classification_item(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_update_classification_job(
        self,
        body: list[UpdateClassificationJobWithIdRequestDto | UpdateClassificationJobWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationJobBulkResponseDto:
        """Update details about multiple jobs with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple jobs response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_update_classification_job(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_update_classification_location(
        self,
        body: list[UpdateClassificationLocationWithIdRequestDto | UpdateClassificationLocationWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationLocationBulkResponseDto:
        """Update details about multiple locations with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple locations response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_update_classification_location(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_classification_accounting_class(
        self,
        body: CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassResponseDto:
        """Create a new accounting class.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create an accounting class response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_classification_accounting_class(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_classification_chart_of_accounts(
        self,
        body: CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsResponseDto:
        """Create a new chart of accounts.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_classification_chart_of_accounts(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_classification_department(
        self,
        body: CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentResponseDto:
        """Create a new department.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a department response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_classification_department(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_classification_employee(
        self,
        body: CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeResponseDto:
        """Create a new employee.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create an employee response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_classification_employee(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_classification_item(
        self,
        body: CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationItemResponseDto:
        """Create a new item.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create an item response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_classification_item(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_classification_job(
        self,
        body: CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationJobResponseDto:
        """Create a new job.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a job response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_classification_job(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_classification_location(
        self,
        body: CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationLocationResponseDto:
        """Create a new location.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a location response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_classification_location(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_classification_accounting_class(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassResponseDto:
        """Get details about an existing accounting class.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get accounting class details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_classification_accounting_class(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_classification_chart_of_accounts(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsResponseDto:
        """Get details about an existing chart of accounts.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get chart of accounts details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_classification_chart_of_accounts(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_classification_department(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentResponseDto:
        """Get details about an existing department.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get department details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_classification_department(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_classification_employee(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeResponseDto:
        """Get details about an existing employee.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get employee details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_classification_employee(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_classification_item(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationItemResponseDto:
        """Get details about an existing item.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get item details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_classification_item(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_classification_job(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationJobResponseDto:
        """Get details about an existing job.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get job details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_classification_job(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_classification_location(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationLocationResponseDto:
        """Get details about an existing location.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get location details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_classification_location(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_classification_accounting_classes(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoClassificationAccountingClassResponseDto:
        """Get a list of accounting class objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of accounting classes response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_classification_accounting_classes(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def list_classification_chart_of_accounts(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoClassificationChartOfAccountsResponseDto:
        """Get a list of chart of accounts objects. By default, you get 20 results on one page of results. Set ``max``
        in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_classification_chart_of_accounts(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def list_classification_departments(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoClassificationDepartmentResponseDto:
        """Get a list of department objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of classification departments response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_classification_departments(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def list_classification_employees(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoClassificationEmployeeResponseDto:
        """Get a list of employee objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of employees response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_classification_employees(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def list_classification_items(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoClassificationItemResponseDto:
        """Get a list of item objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of items response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_classification_items(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def list_classification_jobs(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoClassificationJobResponseDto:
        """Get a list of job objects. By default, you get 20 results on one page of results. Set ``max`` in your request
        to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of jobs response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_classification_jobs(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def list_classification_locations(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoClassificationLocationResponseDto:
        """Get a list of location objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of locations response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_classification_locations(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def restore_classification_accounting_class(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassResponseDto:
        """Restore an archived accounting class. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an accounting class response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_classification_accounting_class(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def restore_classification_chart_of_accounts(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsResponseDto:
        """Restore an archived chart of accounts. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore a chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_classification_chart_of_accounts(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def restore_classification_department(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentResponseDto:
        """Restore an archived department. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore a department response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_classification_department(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def restore_classification_employee(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeResponseDto:
        """Restore an archived employee. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived employee response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_classification_employee(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def restore_classification_item(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationItemResponseDto:
        """Restore an archived item. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore classification item response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_classification_item(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def restore_classification_job(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationJobResponseDto:
        """Restore an archived job. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived job response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_classification_job(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def restore_classification_location(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationLocationResponseDto:
        """Restore an archived location. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived location response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_classification_location(
                id_, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_classification_accounting_class(
        self,
        id_: str,
        body: UpdateClassificationAccountingClassRequestDto | UpdateClassificationAccountingClassRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationAccountingClassResponseDto:
        """Update details about an existing accounting class.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update an accounting class response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_classification_accounting_class(
                id_, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_classification_chart_of_accounts(
        self,
        id_: str,
        body: UpdateClassificationChartOfAccountsRequestDto | UpdateClassificationChartOfAccountsRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationChartOfAccountsResponseDto:
        """Update details about an existing chart of accounts.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a chart of accounts response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_classification_chart_of_accounts(
                id_, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_classification_department(
        self,
        id_: str,
        body: UpdateClassificationDepartmentRequestDto | UpdateClassificationDepartmentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationDepartmentResponseDto:
        """Update details about an existing department.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a department response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_classification_department(
                id_, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_classification_employee(
        self,
        id_: str,
        body: UpdateClassificationEmployeeRequestDto | UpdateClassificationEmployeeRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationEmployeeResponseDto:
        """Update details about an existing employee.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update an employee response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_classification_employee(
                id_, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_classification_item(
        self,
        id_: str,
        body: UpdateClassificationItemRequestDto | UpdateClassificationItemRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationItemResponseDto:
        """Update details about an existing item.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update an item response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_classification_item(
                id_, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_classification_job(
        self,
        id_: str,
        body: UpdateClassificationJobRequestDto | UpdateClassificationJobRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationJobResponseDto:
        """Update details about an existing job.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a job response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_classification_job(
                id_, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_classification_location(
        self,
        id_: str,
        body: UpdateClassificationLocationRequestDto | UpdateClassificationLocationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ClassificationLocationResponseDto:
        """Update details about an existing location.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a location response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_classification_location(
                id_, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncClassificationsApiWithRawResponse:
        return self._with_raw_response


class ClassificationsApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def archive_classification_accounting_class(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassResponseDto, ArchiveClassificationAccountingClassErrorBody]:
        """Archive an existing accounting class. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/accounting-classes/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationAccountingClassResponseDto],
            error_mapper=archive_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    def archive_classification_chart_of_accounts(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsResponseDto, ArchiveClassificationChartOfAccountsErrorBody]:
        """Archive an existing chart of accounts. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationChartOfAccountsResponseDto],
            error_mapper=archive_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    def archive_classification_department(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentResponseDto, ArchiveClassificationDepartmentErrorBody]:
        """Archive an existing department. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/departments/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationDepartmentResponseDto],
            error_mapper=archive_classification_department_error_mapper,
            request_options=request_options,
        )

    def archive_classification_employee(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeResponseDto, ArchiveClassificationEmployeeErrorBody]:
        """Archive an existing employee. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/employees/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationEmployeeResponseDto],
            error_mapper=archive_classification_employee_error_mapper,
            request_options=request_options,
        )

    def archive_classification_item(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemResponseDto, ArchiveClassificationItemErrorBody]:
        """Archive an existing item. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/items/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationItemResponseDto],
            error_mapper=archive_classification_item_error_mapper,
            request_options=request_options,
        )

    def archive_classification_job(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobResponseDto, ArchiveClassificationJobErrorBody]:
        """Archive an existing job. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/jobs/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationJobResponseDto],
            error_mapper=archive_classification_job_error_mapper,
            request_options=request_options,
        )

    def archive_classification_location(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationResponseDto, ArchiveClassificationLocationErrorBody]:
        """Archive an existing location. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/locations/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationLocationResponseDto],
            error_mapper=archive_classification_location_error_mapper,
            request_options=request_options,
        )

    def bulk_archive_classification_accounting_class(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassBulkResponseDto, BulkArchiveClassificationAccountingClassErrorBody]:
        """Archive multiple accounting classes with one API request. In the response, the ``archived`` field for each
        object is set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/accounting-classes/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationAccountingClassBulkResponseDto],
            error_mapper=bulk_archive_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    def bulk_archive_classification_chart_of_accounts(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsBulkResponseDto, BulkArchiveClassificationChartOfAccountsErrorBody]:
        """Archive multiple chart of accounts with one API request. In the response, the ``archived`` field for each
        object is set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationChartOfAccountsBulkResponseDto],
            error_mapper=bulk_archive_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    def bulk_archive_classification_department(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentBulkResponseDto, BulkArchiveClassificationDepartmentErrorBody]:
        """Archive multiple departments with one API request. In the response, the ``archived`` field is set as
        ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/departments/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationDepartmentBulkResponseDto],
            error_mapper=bulk_archive_classification_department_error_mapper,
            request_options=request_options,
        )

    def bulk_archive_classification_employee(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeBulkResponseDto, BulkArchiveClassificationEmployeeErrorBody]:
        """Archive multiple employees with one API request. In the response, the ``archived`` field for each object is
        set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/employees/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationEmployeeBulkResponseDto],
            error_mapper=bulk_archive_classification_employee_error_mapper,
            request_options=request_options,
        )

    def bulk_archive_classification_item(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemBulkResponseDto, BulkArchiveClassificationItemErrorBody]:
        """Archive multiple items with one API request. In the response, the ``archived`` field for each object is set
        as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/items/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationItemBulkResponseDto],
            error_mapper=bulk_archive_classification_item_error_mapper,
            request_options=request_options,
        )

    def bulk_archive_classification_job(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobBulkResponseDto, BulkArchiveClassificationJobErrorBody]:
        """Archive multiple jobs with one API request. In the response, the ``archived`` field for each object is set as
        ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/jobs/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationJobBulkResponseDto],
            error_mapper=bulk_archive_classification_job_error_mapper,
            request_options=request_options,
        )

    def bulk_archive_classification_location(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationBulkResponseDto, BulkArchiveClassificationLocationErrorBody]:
        """Archive multiple locations with one API request. In the response, the ``archived`` field for each object is
        set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/locations/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationLocationBulkResponseDto],
            error_mapper=bulk_archive_classification_location_error_mapper,
            request_options=request_options,
        )

    def bulk_create_classification_accounting_class(
        self,
        body: list[CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassBulkResponseDto, BulkCreateClassificationAccountingClassErrorBody]:
        """Create multiple accounting classes with one API request. You can create up to 50 accounting classes with one
        ``POST /v3/classifications/accounting-classes/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/accounting-classes/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict]
            ](body),
            decoder=json_decoder[ClassificationAccountingClassBulkResponseDto],
            error_mapper=bulk_create_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    def bulk_create_classification_chart_of_accounts(
        self,
        body: list[CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsBulkResponseDto, BulkCreateClassificationChartOfAccountsErrorBody]:
        """Create multiple chart of accounts with one API request. You can create up to 50 chart of accounts with one
        ``POST /v3/classifications/chart-of-accounts/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict]
            ](body),
            decoder=json_decoder[ClassificationChartOfAccountsBulkResponseDto],
            error_mapper=bulk_create_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    def bulk_create_classification_department(
        self,
        body: list[CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentBulkResponseDto, BulkCreateClassificationDepartmentErrorBody]:
        """Create multiple departments with one API request. You can create up to 50 departments with one ``POST
        /v3/classifications/departments/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/departments/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict]
            ](body),
            decoder=json_decoder[ClassificationDepartmentBulkResponseDto],
            error_mapper=bulk_create_classification_department_error_mapper,
            request_options=request_options,
        )

    def bulk_create_classification_employee(
        self,
        body: list[CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeBulkResponseDto, BulkCreateClassificationEmployeeErrorBody]:
        """Create multiple employees with one API request. You can create up to 50 employees with one ``POST
        /v3/classifications/employees/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/employees/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict]](
                body
            ),
            decoder=json_decoder[ClassificationEmployeeBulkResponseDto],
            error_mapper=bulk_create_classification_employee_error_mapper,
            request_options=request_options,
        )

    def bulk_create_classification_item(
        self,
        body: list[CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemBulkResponseDto, BulkCreateClassificationItemErrorBody]:
        """Create multiple items with one API request. You can create up to 50 items with one ``POST
        /v3/classifications/items/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/items/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict]](body),
            decoder=json_decoder[ClassificationItemBulkResponseDto],
            error_mapper=bulk_create_classification_item_error_mapper,
            request_options=request_options,
        )

    def bulk_create_classification_job(
        self,
        body: list[CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobBulkResponseDto, BulkCreateClassificationJobErrorBody]:
        """Create multiple jobs with one API request. You can create up to 50 jobs with one ``POST
        /v3/classifications/jobs/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/jobs/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict]](body),
            decoder=json_decoder[ClassificationJobBulkResponseDto],
            error_mapper=bulk_create_classification_job_error_mapper,
            request_options=request_options,
        )

    def bulk_create_classification_location(
        self,
        body: list[CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationBulkResponseDto, BulkCreateClassificationLocationErrorBody]:
        """Create multiple locations with one API request. You can create up to 50 locations with one ``POST
        /v3/classifications/locations/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/locations/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict]](
                body
            ),
            decoder=json_decoder[ClassificationLocationBulkResponseDto],
            error_mapper=bulk_create_classification_location_error_mapper,
            request_options=request_options,
        )

    def bulk_restore_classification_accounting_class(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassBulkResponseDto, BulkRestoreClassificationAccountingClassErrorBody]:
        """Restore multiple accounting classes with one API request. In the response, the ``archived`` field for each
        object is set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/accounting-classes/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationAccountingClassBulkResponseDto],
            error_mapper=bulk_restore_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    def bulk_restore_classification_chart_of_accounts(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsBulkResponseDto, BulkRestoreClassificationChartOfAccountsErrorBody]:
        """Restore multiple chart of accounts with one API request. In the response, the ``archived`` field for each
        object is set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationChartOfAccountsBulkResponseDto],
            error_mapper=bulk_restore_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    def bulk_restore_classification_department(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentBulkResponseDto, BulkRestoreClassificationDepartmentErrorBody]:
        """Restore multiple departments with one API request. In the response, the ``archived`` field is set as
        ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/departments/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationDepartmentBulkResponseDto],
            error_mapper=bulk_restore_classification_department_error_mapper,
            request_options=request_options,
        )

    def bulk_restore_classification_employee(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeBulkResponseDto, BulkRestoreClassificationEmployeeErrorBody]:
        """Restore multiple employees with one API request. In the response, the ``archived`` field for each object is
        set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/employees/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationEmployeeBulkResponseDto],
            error_mapper=bulk_restore_classification_employee_error_mapper,
            request_options=request_options,
        )

    def bulk_restore_classification_item(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemBulkResponseDto, BulkRestoreClassificationItemErrorBody]:
        """Restore multiple items with one API request. In the response, the ``archived`` field for each object is set
        as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/items/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationItemBulkResponseDto],
            error_mapper=bulk_restore_classification_item_error_mapper,
            request_options=request_options,
        )

    def bulk_restore_classification_job(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobBulkResponseDto, BulkRestoreClassificationJobErrorBody]:
        """Restore multiple jobs with one API request. In the response, the ``archived`` field for each object is set as
        ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/jobs/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationJobBulkResponseDto],
            error_mapper=bulk_restore_classification_job_error_mapper,
            request_options=request_options,
        )

    def bulk_restore_classification_location(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationBulkResponseDto, BulkRestoreClassificationLocationErrorBody]:
        """Restore multiple locations with one API request. In the response, the ``archived`` field for each object is
        set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/locations/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationLocationBulkResponseDto],
            error_mapper=bulk_restore_classification_location_error_mapper,
            request_options=request_options,
        )

    def bulk_update_classification_accounting_class(
        self,
        body: list[
            (
                UpdateClassificationAccountingClassWithIdRequestDto
                | UpdateClassificationAccountingClassWithIdRequestDtoDict
            )
        ],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassBulkResponseDto, BulkUpdateClassificationAccountingClassErrorBody]:
        """Update details about multiple accounting classes with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/accounting-classes/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[
                    (
                        UpdateClassificationAccountingClassWithIdRequestDto
                        | UpdateClassificationAccountingClassWithIdRequestDtoDict
                    )
                ]
            ](body),
            decoder=json_decoder[ClassificationAccountingClassBulkResponseDto],
            error_mapper=bulk_update_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    def bulk_update_classification_chart_of_accounts(
        self,
        body: list[
            (
                UpdateClassificationChartOfAccountsWithIdRequestDto
                | UpdateClassificationChartOfAccountsWithIdRequestDtoDict
            )
        ],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsBulkResponseDto, BulkUpdateClassificationChartOfAccountsErrorBody]:
        """Update details about multiple chart of accounts with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[
                    (
                        UpdateClassificationChartOfAccountsWithIdRequestDto
                        | UpdateClassificationChartOfAccountsWithIdRequestDtoDict
                    )
                ]
            ](body),
            decoder=json_decoder[ClassificationChartOfAccountsBulkResponseDto],
            error_mapper=bulk_update_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    def bulk_update_classification_department(
        self,
        body: list[UpdateClassificationDepartmentWithIdRequestDto | UpdateClassificationDepartmentWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentBulkResponseDto, BulkUpdateClassificationDepartmentErrorBody]:
        """Update multiple departments with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/departments/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[
                    UpdateClassificationDepartmentWithIdRequestDto | UpdateClassificationDepartmentWithIdRequestDtoDict
                ]
            ](body),
            decoder=json_decoder[ClassificationDepartmentBulkResponseDto],
            error_mapper=bulk_update_classification_department_error_mapper,
            request_options=request_options,
        )

    def bulk_update_classification_employee(
        self,
        body: list[UpdateClassificationEmployeeWithIdRequestDto | UpdateClassificationEmployeeWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeBulkResponseDto, BulkUpdateClassificationEmployeeErrorBody]:
        """Update details about multiple employees with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/employees/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[UpdateClassificationEmployeeWithIdRequestDto | UpdateClassificationEmployeeWithIdRequestDtoDict]
            ](body),
            decoder=json_decoder[ClassificationEmployeeBulkResponseDto],
            error_mapper=bulk_update_classification_employee_error_mapper,
            request_options=request_options,
        )

    def bulk_update_classification_item(
        self,
        body: list[UpdateClassificationItemWithIdRequestDto | UpdateClassificationItemWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemBulkResponseDto, BulkUpdateClassificationItemErrorBody]:
        """Update details about multiple items with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/items/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[UpdateClassificationItemWithIdRequestDto | UpdateClassificationItemWithIdRequestDtoDict]
            ](body),
            decoder=json_decoder[ClassificationItemBulkResponseDto],
            error_mapper=bulk_update_classification_item_error_mapper,
            request_options=request_options,
        )

    def bulk_update_classification_job(
        self,
        body: list[UpdateClassificationJobWithIdRequestDto | UpdateClassificationJobWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobBulkResponseDto, BulkUpdateClassificationJobErrorBody]:
        """Update details about multiple jobs with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/jobs/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[UpdateClassificationJobWithIdRequestDto | UpdateClassificationJobWithIdRequestDtoDict]](
                body
            ),
            decoder=json_decoder[ClassificationJobBulkResponseDto],
            error_mapper=bulk_update_classification_job_error_mapper,
            request_options=request_options,
        )

    def bulk_update_classification_location(
        self,
        body: list[UpdateClassificationLocationWithIdRequestDto | UpdateClassificationLocationWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationBulkResponseDto, BulkUpdateClassificationLocationErrorBody]:
        """Update details about multiple locations with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/locations/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[UpdateClassificationLocationWithIdRequestDto | UpdateClassificationLocationWithIdRequestDtoDict]
            ](body),
            decoder=json_decoder[ClassificationLocationBulkResponseDto],
            error_mapper=bulk_update_classification_location_error_mapper,
            request_options=request_options,
        )

    def create_classification_accounting_class(
        self,
        body: CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassResponseDto, CreateClassificationAccountingClassErrorBody]:
        """Create a new accounting class.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/accounting-classes"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict
            ](body),
            decoder=json_decoder[ClassificationAccountingClassResponseDto],
            error_mapper=create_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    def create_classification_chart_of_accounts(
        self,
        body: CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsResponseDto, CreateClassificationChartOfAccountsErrorBody]:
        """Create a new chart of accounts.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/chart-of-accounts"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict
            ](body),
            decoder=json_decoder[ClassificationChartOfAccountsResponseDto],
            error_mapper=create_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    def create_classification_department(
        self,
        body: CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentResponseDto, CreateClassificationDepartmentErrorBody]:
        """Create a new department.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/departments"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict](
                body
            ),
            decoder=json_decoder[ClassificationDepartmentResponseDto],
            error_mapper=create_classification_department_error_mapper,
            request_options=request_options,
        )

    def create_classification_employee(
        self,
        body: CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeResponseDto, CreateClassificationEmployeeErrorBody]:
        """Create a new employee.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/employees"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict](body),
            decoder=json_decoder[ClassificationEmployeeResponseDto],
            error_mapper=create_classification_employee_error_mapper,
            request_options=request_options,
        )

    def create_classification_item(
        self,
        body: CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemResponseDto, CreateClassificationItemErrorBody]:
        """Create a new item.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/items"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict](body),
            decoder=json_decoder[ClassificationItemResponseDto],
            error_mapper=create_classification_item_error_mapper,
            request_options=request_options,
        )

    def create_classification_job(
        self,
        body: CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobResponseDto, CreateClassificationJobErrorBody]:
        """Create a new job.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/jobs"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict](body),
            decoder=json_decoder[ClassificationJobResponseDto],
            error_mapper=create_classification_job_error_mapper,
            request_options=request_options,
        )

    def create_classification_location(
        self,
        body: CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationResponseDto, CreateClassificationLocationErrorBody]:
        """Create a new location.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/locations"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict](body),
            decoder=json_decoder[ClassificationLocationResponseDto],
            error_mapper=create_classification_location_error_mapper,
            request_options=request_options,
        )

    def get_classification_accounting_class(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassResponseDto, GetClassificationAccountingClassErrorBody]:
        """Get details about an existing accounting class.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/accounting-classes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ClassificationAccountingClassResponseDto],
            error_mapper=get_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    def get_classification_chart_of_accounts(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsResponseDto, GetClassificationChartOfAccountsErrorBody]:
        """Get details about an existing chart of accounts.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ClassificationChartOfAccountsResponseDto],
            error_mapper=get_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    def get_classification_department(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentResponseDto, GetClassificationDepartmentErrorBody]:
        """Get details about an existing department.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/departments/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ClassificationDepartmentResponseDto],
            error_mapper=get_classification_department_error_mapper,
            request_options=request_options,
        )

    def get_classification_employee(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeResponseDto, GetClassificationEmployeeErrorBody]:
        """Get details about an existing employee.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/employees/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ClassificationEmployeeResponseDto],
            error_mapper=get_classification_employee_error_mapper,
            request_options=request_options,
        )

    def get_classification_item(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemResponseDto, GetClassificationItemErrorBody]:
        """Get details about an existing item.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/items/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ClassificationItemResponseDto],
            error_mapper=get_classification_item_error_mapper,
            request_options=request_options,
        )

    def get_classification_job(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobResponseDto, GetClassificationJobErrorBody]:
        """Get details about an existing job.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/jobs/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ClassificationJobResponseDto],
            error_mapper=get_classification_job_error_mapper,
            request_options=request_options,
        )

    def get_classification_location(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationResponseDto, GetClassificationLocationErrorBody]:
        """Get details about an existing location.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/locations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ClassificationLocationResponseDto],
            error_mapper=get_classification_location_error_mapper,
            request_options=request_options,
        )

    def list_classification_accounting_classes(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ListResponseDtoClassificationAccountingClassResponseDto, ListClassificationAccountingClassesErrorBody
    ]:
        """Get a list of accounting class objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/accounting-classes"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoClassificationAccountingClassResponseDto],
            error_mapper=list_classification_accounting_classes_error_mapper,
            request_options=request_options,
        )

    def list_classification_chart_of_accounts(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoClassificationChartOfAccountsResponseDto, ListClassificationChartOfAccountsErrorBody]:
        """Get a list of chart of accounts objects. By default, you get 20 results on one page of results. Set ``max``
        in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/chart-of-accounts"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoClassificationChartOfAccountsResponseDto],
            error_mapper=list_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    def list_classification_departments(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoClassificationDepartmentResponseDto, ListClassificationDepartmentsErrorBody]:
        """Get a list of department objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/departments"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoClassificationDepartmentResponseDto],
            error_mapper=list_classification_departments_error_mapper,
            request_options=request_options,
        )

    def list_classification_employees(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoClassificationEmployeeResponseDto, ListClassificationEmployeesErrorBody]:
        """Get a list of employee objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/employees"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoClassificationEmployeeResponseDto],
            error_mapper=list_classification_employees_error_mapper,
            request_options=request_options,
        )

    def list_classification_items(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoClassificationItemResponseDto, ListClassificationItemsErrorBody]:
        """Get a list of item objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/items"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoClassificationItemResponseDto],
            error_mapper=list_classification_items_error_mapper,
            request_options=request_options,
        )

    def list_classification_jobs(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoClassificationJobResponseDto, ListClassificationJobsErrorBody]:
        """Get a list of job objects. By default, you get 20 results on one page of results. Set ``max`` in your request
        to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/jobs"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoClassificationJobResponseDto],
            error_mapper=list_classification_jobs_error_mapper,
            request_options=request_options,
        )

    def list_classification_locations(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoClassificationLocationResponseDto, ListClassificationLocationsErrorBody]:
        """Get a list of location objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/locations"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoClassificationLocationResponseDto],
            error_mapper=list_classification_locations_error_mapper,
            request_options=request_options,
        )

    def restore_classification_accounting_class(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassResponseDto, RestoreClassificationAccountingClassErrorBody]:
        """Restore an archived accounting class. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/accounting-classes/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationAccountingClassResponseDto],
            error_mapper=restore_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    def restore_classification_chart_of_accounts(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsResponseDto, RestoreClassificationChartOfAccountsErrorBody]:
        """Restore an archived chart of accounts. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationChartOfAccountsResponseDto],
            error_mapper=restore_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    def restore_classification_department(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentResponseDto, RestoreClassificationDepartmentErrorBody]:
        """Restore an archived department. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/departments/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationDepartmentResponseDto],
            error_mapper=restore_classification_department_error_mapper,
            request_options=request_options,
        )

    def restore_classification_employee(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeResponseDto, RestoreClassificationEmployeeErrorBody]:
        """Restore an archived employee. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/employees/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationEmployeeResponseDto],
            error_mapper=restore_classification_employee_error_mapper,
            request_options=request_options,
        )

    def restore_classification_item(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemResponseDto, RestoreClassificationItemErrorBody]:
        """Restore an archived item. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/items/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationItemResponseDto],
            error_mapper=restore_classification_item_error_mapper,
            request_options=request_options,
        )

    def restore_classification_job(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobResponseDto, RestoreClassificationJobErrorBody]:
        """Restore an archived job. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/jobs/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationJobResponseDto],
            error_mapper=restore_classification_job_error_mapper,
            request_options=request_options,
        )

    def restore_classification_location(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationResponseDto, RestoreClassificationLocationErrorBody]:
        """Restore an archived location. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/locations/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[ClassificationLocationResponseDto],
            error_mapper=restore_classification_location_error_mapper,
            request_options=request_options,
        )

    def update_classification_accounting_class(
        self,
        id_: str,
        body: UpdateClassificationAccountingClassRequestDto | UpdateClassificationAccountingClassRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassResponseDto, UpdateClassificationAccountingClassErrorBody]:
        """Update details about an existing accounting class.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/accounting-classes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                UpdateClassificationAccountingClassRequestDto | UpdateClassificationAccountingClassRequestDtoDict
            ](body),
            decoder=json_decoder[ClassificationAccountingClassResponseDto],
            error_mapper=update_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    def update_classification_chart_of_accounts(
        self,
        id_: str,
        body: UpdateClassificationChartOfAccountsRequestDto | UpdateClassificationChartOfAccountsRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsResponseDto, UpdateClassificationChartOfAccountsErrorBody]:
        """Update details about an existing chart of accounts.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                UpdateClassificationChartOfAccountsRequestDto | UpdateClassificationChartOfAccountsRequestDtoDict
            ](body),
            decoder=json_decoder[ClassificationChartOfAccountsResponseDto],
            error_mapper=update_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    def update_classification_department(
        self,
        id_: str,
        body: UpdateClassificationDepartmentRequestDto | UpdateClassificationDepartmentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentResponseDto, UpdateClassificationDepartmentErrorBody]:
        """Update details about an existing department.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/departments/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateClassificationDepartmentRequestDto | UpdateClassificationDepartmentRequestDtoDict](
                body
            ),
            decoder=json_decoder[ClassificationDepartmentResponseDto],
            error_mapper=update_classification_department_error_mapper,
            request_options=request_options,
        )

    def update_classification_employee(
        self,
        id_: str,
        body: UpdateClassificationEmployeeRequestDto | UpdateClassificationEmployeeRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeResponseDto, UpdateClassificationEmployeeErrorBody]:
        """Update details about an existing employee.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/employees/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateClassificationEmployeeRequestDto | UpdateClassificationEmployeeRequestDtoDict](body),
            decoder=json_decoder[ClassificationEmployeeResponseDto],
            error_mapper=update_classification_employee_error_mapper,
            request_options=request_options,
        )

    def update_classification_item(
        self,
        id_: str,
        body: UpdateClassificationItemRequestDto | UpdateClassificationItemRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemResponseDto, UpdateClassificationItemErrorBody]:
        """Update details about an existing item.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/items/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateClassificationItemRequestDto | UpdateClassificationItemRequestDtoDict](body),
            decoder=json_decoder[ClassificationItemResponseDto],
            error_mapper=update_classification_item_error_mapper,
            request_options=request_options,
        )

    def update_classification_job(
        self,
        id_: str,
        body: UpdateClassificationJobRequestDto | UpdateClassificationJobRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobResponseDto, UpdateClassificationJobErrorBody]:
        """Update details about an existing job.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/jobs/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateClassificationJobRequestDto | UpdateClassificationJobRequestDtoDict](body),
            decoder=json_decoder[ClassificationJobResponseDto],
            error_mapper=update_classification_job_error_mapper,
            request_options=request_options,
        )

    def update_classification_location(
        self,
        id_: str,
        body: UpdateClassificationLocationRequestDto | UpdateClassificationLocationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationResponseDto, UpdateClassificationLocationErrorBody]:
        """Update details about an existing location.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/locations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateClassificationLocationRequestDto | UpdateClassificationLocationRequestDtoDict](body),
            decoder=json_decoder[ClassificationLocationResponseDto],
            error_mapper=update_classification_location_error_mapper,
            request_options=request_options,
        )


class AsyncClassificationsApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def archive_classification_accounting_class(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassResponseDto, ArchiveClassificationAccountingClassErrorBody]:
        """Archive an existing accounting class. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/accounting-classes/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationAccountingClassResponseDto],
            error_mapper=archive_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    async def archive_classification_chart_of_accounts(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsResponseDto, ArchiveClassificationChartOfAccountsErrorBody]:
        """Archive an existing chart of accounts. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationChartOfAccountsResponseDto],
            error_mapper=archive_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    async def archive_classification_department(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentResponseDto, ArchiveClassificationDepartmentErrorBody]:
        """Archive an existing department. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/departments/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationDepartmentResponseDto],
            error_mapper=archive_classification_department_error_mapper,
            request_options=request_options,
        )

    async def archive_classification_employee(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeResponseDto, ArchiveClassificationEmployeeErrorBody]:
        """Archive an existing employee. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/employees/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationEmployeeResponseDto],
            error_mapper=archive_classification_employee_error_mapper,
            request_options=request_options,
        )

    async def archive_classification_item(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemResponseDto, ArchiveClassificationItemErrorBody]:
        """Archive an existing item. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/items/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationItemResponseDto],
            error_mapper=archive_classification_item_error_mapper,
            request_options=request_options,
        )

    async def archive_classification_job(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobResponseDto, ArchiveClassificationJobErrorBody]:
        """Archive an existing job. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/jobs/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationJobResponseDto],
            error_mapper=archive_classification_job_error_mapper,
            request_options=request_options,
        )

    async def archive_classification_location(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationResponseDto, ArchiveClassificationLocationErrorBody]:
        """Archive an existing location. In the response, the ``archived`` field is set as ``true``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/locations/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationLocationResponseDto],
            error_mapper=archive_classification_location_error_mapper,
            request_options=request_options,
        )

    async def bulk_archive_classification_accounting_class(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassBulkResponseDto, BulkArchiveClassificationAccountingClassErrorBody]:
        """Archive multiple accounting classes with one API request. In the response, the ``archived`` field for each
        object is set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/accounting-classes/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationAccountingClassBulkResponseDto],
            error_mapper=bulk_archive_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    async def bulk_archive_classification_chart_of_accounts(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsBulkResponseDto, BulkArchiveClassificationChartOfAccountsErrorBody]:
        """Archive multiple chart of accounts with one API request. In the response, the ``archived`` field for each
        object is set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationChartOfAccountsBulkResponseDto],
            error_mapper=bulk_archive_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    async def bulk_archive_classification_department(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentBulkResponseDto, BulkArchiveClassificationDepartmentErrorBody]:
        """Archive multiple departments with one API request. In the response, the ``archived`` field is set as
        ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/departments/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationDepartmentBulkResponseDto],
            error_mapper=bulk_archive_classification_department_error_mapper,
            request_options=request_options,
        )

    async def bulk_archive_classification_employee(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeBulkResponseDto, BulkArchiveClassificationEmployeeErrorBody]:
        """Archive multiple employees with one API request. In the response, the ``archived`` field for each object is
        set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/employees/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationEmployeeBulkResponseDto],
            error_mapper=bulk_archive_classification_employee_error_mapper,
            request_options=request_options,
        )

    async def bulk_archive_classification_item(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemBulkResponseDto, BulkArchiveClassificationItemErrorBody]:
        """Archive multiple items with one API request. In the response, the ``archived`` field for each object is set
        as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/items/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationItemBulkResponseDto],
            error_mapper=bulk_archive_classification_item_error_mapper,
            request_options=request_options,
        )

    async def bulk_archive_classification_job(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobBulkResponseDto, BulkArchiveClassificationJobErrorBody]:
        """Archive multiple jobs with one API request. In the response, the ``archived`` field for each object is set as
        ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/jobs/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationJobBulkResponseDto],
            error_mapper=bulk_archive_classification_job_error_mapper,
            request_options=request_options,
        )

    async def bulk_archive_classification_location(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationBulkResponseDto, BulkArchiveClassificationLocationErrorBody]:
        """Archive multiple locations with one API request. In the response, the ``archived`` field for each object is
        set as ``true``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/locations/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationLocationBulkResponseDto],
            error_mapper=bulk_archive_classification_location_error_mapper,
            request_options=request_options,
        )

    async def bulk_create_classification_accounting_class(
        self,
        body: list[CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassBulkResponseDto, BulkCreateClassificationAccountingClassErrorBody]:
        """Create multiple accounting classes with one API request. You can create up to 50 accounting classes with one
        ``POST /v3/classifications/accounting-classes/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/accounting-classes/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict]
            ](body),
            decoder=async_json_decoder[ClassificationAccountingClassBulkResponseDto],
            error_mapper=bulk_create_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    async def bulk_create_classification_chart_of_accounts(
        self,
        body: list[CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsBulkResponseDto, BulkCreateClassificationChartOfAccountsErrorBody]:
        """Create multiple chart of accounts with one API request. You can create up to 50 chart of accounts with one
        ``POST /v3/classifications/chart-of-accounts/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict]
            ](body),
            decoder=async_json_decoder[ClassificationChartOfAccountsBulkResponseDto],
            error_mapper=bulk_create_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    async def bulk_create_classification_department(
        self,
        body: list[CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentBulkResponseDto, BulkCreateClassificationDepartmentErrorBody]:
        """Create multiple departments with one API request. You can create up to 50 departments with one ``POST
        /v3/classifications/departments/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/departments/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict]
            ](body),
            decoder=async_json_decoder[ClassificationDepartmentBulkResponseDto],
            error_mapper=bulk_create_classification_department_error_mapper,
            request_options=request_options,
        )

    async def bulk_create_classification_employee(
        self,
        body: list[CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeBulkResponseDto, BulkCreateClassificationEmployeeErrorBody]:
        """Create multiple employees with one API request. You can create up to 50 employees with one ``POST
        /v3/classifications/employees/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/employees/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict]](
                body
            ),
            decoder=async_json_decoder[ClassificationEmployeeBulkResponseDto],
            error_mapper=bulk_create_classification_employee_error_mapper,
            request_options=request_options,
        )

    async def bulk_create_classification_item(
        self,
        body: list[CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemBulkResponseDto, BulkCreateClassificationItemErrorBody]:
        """Create multiple items with one API request. You can create up to 50 items with one ``POST
        /v3/classifications/items/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/items/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict]](body),
            decoder=async_json_decoder[ClassificationItemBulkResponseDto],
            error_mapper=bulk_create_classification_item_error_mapper,
            request_options=request_options,
        )

    async def bulk_create_classification_job(
        self,
        body: list[CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobBulkResponseDto, BulkCreateClassificationJobErrorBody]:
        """Create multiple jobs with one API request. You can create up to 50 jobs with one ``POST
        /v3/classifications/jobs/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/jobs/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict]](body),
            decoder=async_json_decoder[ClassificationJobBulkResponseDto],
            error_mapper=bulk_create_classification_job_error_mapper,
            request_options=request_options,
        )

    async def bulk_create_classification_location(
        self,
        body: list[CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationBulkResponseDto, BulkCreateClassificationLocationErrorBody]:
        """Create multiple locations with one API request. You can create up to 50 locations with one ``POST
        /v3/classifications/locations/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/locations/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict]](
                body
            ),
            decoder=async_json_decoder[ClassificationLocationBulkResponseDto],
            error_mapper=bulk_create_classification_location_error_mapper,
            request_options=request_options,
        )

    async def bulk_restore_classification_accounting_class(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassBulkResponseDto, BulkRestoreClassificationAccountingClassErrorBody]:
        """Restore multiple accounting classes with one API request. In the response, the ``archived`` field for each
        object is set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/accounting-classes/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationAccountingClassBulkResponseDto],
            error_mapper=bulk_restore_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    async def bulk_restore_classification_chart_of_accounts(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsBulkResponseDto, BulkRestoreClassificationChartOfAccountsErrorBody]:
        """Restore multiple chart of accounts with one API request. In the response, the ``archived`` field for each
        object is set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationChartOfAccountsBulkResponseDto],
            error_mapper=bulk_restore_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    async def bulk_restore_classification_department(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentBulkResponseDto, BulkRestoreClassificationDepartmentErrorBody]:
        """Restore multiple departments with one API request. In the response, the ``archived`` field is set as
        ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/departments/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationDepartmentBulkResponseDto],
            error_mapper=bulk_restore_classification_department_error_mapper,
            request_options=request_options,
        )

    async def bulk_restore_classification_employee(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeBulkResponseDto, BulkRestoreClassificationEmployeeErrorBody]:
        """Restore multiple employees with one API request. In the response, the ``archived`` field for each object is
        set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/employees/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationEmployeeBulkResponseDto],
            error_mapper=bulk_restore_classification_employee_error_mapper,
            request_options=request_options,
        )

    async def bulk_restore_classification_item(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemBulkResponseDto, BulkRestoreClassificationItemErrorBody]:
        """Restore multiple items with one API request. In the response, the ``archived`` field for each object is set
        as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/items/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationItemBulkResponseDto],
            error_mapper=bulk_restore_classification_item_error_mapper,
            request_options=request_options,
        )

    async def bulk_restore_classification_job(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobBulkResponseDto, BulkRestoreClassificationJobErrorBody]:
        """Restore multiple jobs with one API request. In the response, the ``archived`` field for each object is set as
        ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/jobs/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationJobBulkResponseDto],
            error_mapper=bulk_restore_classification_job_error_mapper,
            request_options=request_options,
        )

    async def bulk_restore_classification_location(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationBulkResponseDto, BulkRestoreClassificationLocationErrorBody]:
        """Restore multiple locations with one API request. In the response, the ``archived`` field for each object is
        set as ``false``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/locations/bulk/restore"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationLocationBulkResponseDto],
            error_mapper=bulk_restore_classification_location_error_mapper,
            request_options=request_options,
        )

    async def bulk_update_classification_accounting_class(
        self,
        body: list[
            (
                UpdateClassificationAccountingClassWithIdRequestDto
                | UpdateClassificationAccountingClassWithIdRequestDtoDict
            )
        ],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassBulkResponseDto, BulkUpdateClassificationAccountingClassErrorBody]:
        """Update details about multiple accounting classes with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/accounting-classes/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[
                    (
                        UpdateClassificationAccountingClassWithIdRequestDto
                        | UpdateClassificationAccountingClassWithIdRequestDtoDict
                    )
                ]
            ](body),
            decoder=async_json_decoder[ClassificationAccountingClassBulkResponseDto],
            error_mapper=bulk_update_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    async def bulk_update_classification_chart_of_accounts(
        self,
        body: list[
            (
                UpdateClassificationChartOfAccountsWithIdRequestDto
                | UpdateClassificationChartOfAccountsWithIdRequestDtoDict
            )
        ],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsBulkResponseDto, BulkUpdateClassificationChartOfAccountsErrorBody]:
        """Update details about multiple chart of accounts with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[
                    (
                        UpdateClassificationChartOfAccountsWithIdRequestDto
                        | UpdateClassificationChartOfAccountsWithIdRequestDtoDict
                    )
                ]
            ](body),
            decoder=async_json_decoder[ClassificationChartOfAccountsBulkResponseDto],
            error_mapper=bulk_update_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    async def bulk_update_classification_department(
        self,
        body: list[UpdateClassificationDepartmentWithIdRequestDto | UpdateClassificationDepartmentWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentBulkResponseDto, BulkUpdateClassificationDepartmentErrorBody]:
        """Update multiple departments with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/departments/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[
                    UpdateClassificationDepartmentWithIdRequestDto | UpdateClassificationDepartmentWithIdRequestDtoDict
                ]
            ](body),
            decoder=async_json_decoder[ClassificationDepartmentBulkResponseDto],
            error_mapper=bulk_update_classification_department_error_mapper,
            request_options=request_options,
        )

    async def bulk_update_classification_employee(
        self,
        body: list[UpdateClassificationEmployeeWithIdRequestDto | UpdateClassificationEmployeeWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeBulkResponseDto, BulkUpdateClassificationEmployeeErrorBody]:
        """Update details about multiple employees with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/employees/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[UpdateClassificationEmployeeWithIdRequestDto | UpdateClassificationEmployeeWithIdRequestDtoDict]
            ](body),
            decoder=async_json_decoder[ClassificationEmployeeBulkResponseDto],
            error_mapper=bulk_update_classification_employee_error_mapper,
            request_options=request_options,
        )

    async def bulk_update_classification_item(
        self,
        body: list[UpdateClassificationItemWithIdRequestDto | UpdateClassificationItemWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemBulkResponseDto, BulkUpdateClassificationItemErrorBody]:
        """Update details about multiple items with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/items/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[UpdateClassificationItemWithIdRequestDto | UpdateClassificationItemWithIdRequestDtoDict]
            ](body),
            decoder=async_json_decoder[ClassificationItemBulkResponseDto],
            error_mapper=bulk_update_classification_item_error_mapper,
            request_options=request_options,
        )

    async def bulk_update_classification_job(
        self,
        body: list[UpdateClassificationJobWithIdRequestDto | UpdateClassificationJobWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobBulkResponseDto, BulkUpdateClassificationJobErrorBody]:
        """Update details about multiple jobs with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/jobs/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[UpdateClassificationJobWithIdRequestDto | UpdateClassificationJobWithIdRequestDtoDict]](
                body
            ),
            decoder=async_json_decoder[ClassificationJobBulkResponseDto],
            error_mapper=bulk_update_classification_job_error_mapper,
            request_options=request_options,
        )

    async def bulk_update_classification_location(
        self,
        body: list[UpdateClassificationLocationWithIdRequestDto | UpdateClassificationLocationWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationBulkResponseDto, BulkUpdateClassificationLocationErrorBody]:
        """Update details about multiple locations with one API request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/locations/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                list[UpdateClassificationLocationWithIdRequestDto | UpdateClassificationLocationWithIdRequestDtoDict]
            ](body),
            decoder=async_json_decoder[ClassificationLocationBulkResponseDto],
            error_mapper=bulk_update_classification_location_error_mapper,
            request_options=request_options,
        )

    async def create_classification_accounting_class(
        self,
        body: CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassResponseDto, CreateClassificationAccountingClassErrorBody]:
        """Create a new accounting class.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/accounting-classes"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                CreateClassificationAccountingClassRequestDto | CreateClassificationAccountingClassRequestDtoDict
            ](body),
            decoder=async_json_decoder[ClassificationAccountingClassResponseDto],
            error_mapper=create_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    async def create_classification_chart_of_accounts(
        self,
        body: CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsResponseDto, CreateClassificationChartOfAccountsErrorBody]:
        """Create a new chart of accounts.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/chart-of-accounts"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                CreateClassificationChartOfAccountsRequestDto | CreateClassificationChartOfAccountsRequestDtoDict
            ](body),
            decoder=async_json_decoder[ClassificationChartOfAccountsResponseDto],
            error_mapper=create_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    async def create_classification_department(
        self,
        body: CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentResponseDto, CreateClassificationDepartmentErrorBody]:
        """Create a new department.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/departments"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateClassificationDepartmentRequestDto | CreateClassificationDepartmentRequestDtoDict](
                body
            ),
            decoder=async_json_decoder[ClassificationDepartmentResponseDto],
            error_mapper=create_classification_department_error_mapper,
            request_options=request_options,
        )

    async def create_classification_employee(
        self,
        body: CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeResponseDto, CreateClassificationEmployeeErrorBody]:
        """Create a new employee.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/employees"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateClassificationEmployeeRequestDto | CreateClassificationEmployeeRequestDtoDict](body),
            decoder=async_json_decoder[ClassificationEmployeeResponseDto],
            error_mapper=create_classification_employee_error_mapper,
            request_options=request_options,
        )

    async def create_classification_item(
        self,
        body: CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemResponseDto, CreateClassificationItemErrorBody]:
        """Create a new item.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/items"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateClassificationItemRequestDto | CreateClassificationItemRequestDtoDict](body),
            decoder=async_json_decoder[ClassificationItemResponseDto],
            error_mapper=create_classification_item_error_mapper,
            request_options=request_options,
        )

    async def create_classification_job(
        self,
        body: CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobResponseDto, CreateClassificationJobErrorBody]:
        """Create a new job.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/jobs"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateClassificationJobRequestDto | CreateClassificationJobRequestDtoDict](body),
            decoder=async_json_decoder[ClassificationJobResponseDto],
            error_mapper=create_classification_job_error_mapper,
            request_options=request_options,
        )

    async def create_classification_location(
        self,
        body: CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationResponseDto, CreateClassificationLocationErrorBody]:
        """Create a new location.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/locations"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateClassificationLocationRequestDto | CreateClassificationLocationRequestDtoDict](body),
            decoder=async_json_decoder[ClassificationLocationResponseDto],
            error_mapper=create_classification_location_error_mapper,
            request_options=request_options,
        )

    async def get_classification_accounting_class(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassResponseDto, GetClassificationAccountingClassErrorBody]:
        """Get details about an existing accounting class.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/accounting-classes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ClassificationAccountingClassResponseDto],
            error_mapper=get_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    async def get_classification_chart_of_accounts(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsResponseDto, GetClassificationChartOfAccountsErrorBody]:
        """Get details about an existing chart of accounts.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ClassificationChartOfAccountsResponseDto],
            error_mapper=get_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    async def get_classification_department(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentResponseDto, GetClassificationDepartmentErrorBody]:
        """Get details about an existing department.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/departments/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ClassificationDepartmentResponseDto],
            error_mapper=get_classification_department_error_mapper,
            request_options=request_options,
        )

    async def get_classification_employee(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeResponseDto, GetClassificationEmployeeErrorBody]:
        """Get details about an existing employee.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/employees/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ClassificationEmployeeResponseDto],
            error_mapper=get_classification_employee_error_mapper,
            request_options=request_options,
        )

    async def get_classification_item(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemResponseDto, GetClassificationItemErrorBody]:
        """Get details about an existing item.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/items/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ClassificationItemResponseDto],
            error_mapper=get_classification_item_error_mapper,
            request_options=request_options,
        )

    async def get_classification_job(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobResponseDto, GetClassificationJobErrorBody]:
        """Get details about an existing job.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/jobs/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ClassificationJobResponseDto],
            error_mapper=get_classification_job_error_mapper,
            request_options=request_options,
        )

    async def get_classification_location(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationResponseDto, GetClassificationLocationErrorBody]:
        """Get details about an existing location.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/locations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ClassificationLocationResponseDto],
            error_mapper=get_classification_location_error_mapper,
            request_options=request_options,
        )

    async def list_classification_accounting_classes(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        ListResponseDtoClassificationAccountingClassResponseDto, ListClassificationAccountingClassesErrorBody
    ]:
        """Get a list of accounting class objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/accounting-classes"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoClassificationAccountingClassResponseDto],
            error_mapper=list_classification_accounting_classes_error_mapper,
            request_options=request_options,
        )

    async def list_classification_chart_of_accounts(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoClassificationChartOfAccountsResponseDto, ListClassificationChartOfAccountsErrorBody]:
        """Get a list of chart of accounts objects. By default, you get 20 results on one page of results. Set ``max``
        in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/chart-of-accounts"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoClassificationChartOfAccountsResponseDto],
            error_mapper=list_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    async def list_classification_departments(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoClassificationDepartmentResponseDto, ListClassificationDepartmentsErrorBody]:
        """Get a list of department objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/departments"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoClassificationDepartmentResponseDto],
            error_mapper=list_classification_departments_error_mapper,
            request_options=request_options,
        )

    async def list_classification_employees(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoClassificationEmployeeResponseDto, ListClassificationEmployeesErrorBody]:
        """Get a list of employee objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/employees"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoClassificationEmployeeResponseDto],
            error_mapper=list_classification_employees_error_mapper,
            request_options=request_options,
        )

    async def list_classification_items(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoClassificationItemResponseDto, ListClassificationItemsErrorBody]:
        """Get a list of item objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/items"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoClassificationItemResponseDto],
            error_mapper=list_classification_items_error_mapper,
            request_options=request_options,
        )

    async def list_classification_jobs(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoClassificationJobResponseDto, ListClassificationJobsErrorBody]:
        """Get a list of job objects. By default, you get 20 results on one page of results. Set ``max`` in your request
        to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/jobs"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoClassificationJobResponseDto],
            error_mapper=list_classification_jobs_error_mapper,
            request_options=request_options,
        )

    async def list_classification_locations(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoClassificationLocationResponseDto, ListClassificationLocationsErrorBody]:
        """Get a list of location objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/classifications/locations"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoClassificationLocationResponseDto],
            error_mapper=list_classification_locations_error_mapper,
            request_options=request_options,
        )

    async def restore_classification_accounting_class(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassResponseDto, RestoreClassificationAccountingClassErrorBody]:
        """Restore an archived accounting class. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/accounting-classes/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationAccountingClassResponseDto],
            error_mapper=restore_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    async def restore_classification_chart_of_accounts(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsResponseDto, RestoreClassificationChartOfAccountsErrorBody]:
        """Restore an archived chart of accounts. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationChartOfAccountsResponseDto],
            error_mapper=restore_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    async def restore_classification_department(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentResponseDto, RestoreClassificationDepartmentErrorBody]:
        """Restore an archived department. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/departments/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationDepartmentResponseDto],
            error_mapper=restore_classification_department_error_mapper,
            request_options=request_options,
        )

    async def restore_classification_employee(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeResponseDto, RestoreClassificationEmployeeErrorBody]:
        """Restore an archived employee. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/employees/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationEmployeeResponseDto],
            error_mapper=restore_classification_employee_error_mapper,
            request_options=request_options,
        )

    async def restore_classification_item(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemResponseDto, RestoreClassificationItemErrorBody]:
        """Restore an archived item. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/items/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationItemResponseDto],
            error_mapper=restore_classification_item_error_mapper,
            request_options=request_options,
        )

    async def restore_classification_job(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobResponseDto, RestoreClassificationJobErrorBody]:
        """Restore an archived job. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/jobs/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationJobResponseDto],
            error_mapper=restore_classification_job_error_mapper,
            request_options=request_options,
        )

    async def restore_classification_location(
        self,
        id_: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationResponseDto, RestoreClassificationLocationErrorBody]:
        """Restore an archived location. In the response, the ``archived`` field is set as ``false``.

        Args:
            id_: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/classifications/locations/{id}/restore"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[ClassificationLocationResponseDto],
            error_mapper=restore_classification_location_error_mapper,
            request_options=request_options,
        )

    async def update_classification_accounting_class(
        self,
        id_: str,
        body: UpdateClassificationAccountingClassRequestDto | UpdateClassificationAccountingClassRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationAccountingClassResponseDto, UpdateClassificationAccountingClassErrorBody]:
        """Update details about an existing accounting class.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/accounting-classes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                UpdateClassificationAccountingClassRequestDto | UpdateClassificationAccountingClassRequestDtoDict
            ](body),
            decoder=async_json_decoder[ClassificationAccountingClassResponseDto],
            error_mapper=update_classification_accounting_class_error_mapper,
            request_options=request_options,
        )

    async def update_classification_chart_of_accounts(
        self,
        id_: str,
        body: UpdateClassificationChartOfAccountsRequestDto | UpdateClassificationChartOfAccountsRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationChartOfAccountsResponseDto, UpdateClassificationChartOfAccountsErrorBody]:
        """Update details about an existing chart of accounts.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/chart-of-accounts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[
                UpdateClassificationChartOfAccountsRequestDto | UpdateClassificationChartOfAccountsRequestDtoDict
            ](body),
            decoder=async_json_decoder[ClassificationChartOfAccountsResponseDto],
            error_mapper=update_classification_chart_of_accounts_error_mapper,
            request_options=request_options,
        )

    async def update_classification_department(
        self,
        id_: str,
        body: UpdateClassificationDepartmentRequestDto | UpdateClassificationDepartmentRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationDepartmentResponseDto, UpdateClassificationDepartmentErrorBody]:
        """Update details about an existing department.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/departments/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateClassificationDepartmentRequestDto | UpdateClassificationDepartmentRequestDtoDict](
                body
            ),
            decoder=async_json_decoder[ClassificationDepartmentResponseDto],
            error_mapper=update_classification_department_error_mapper,
            request_options=request_options,
        )

    async def update_classification_employee(
        self,
        id_: str,
        body: UpdateClassificationEmployeeRequestDto | UpdateClassificationEmployeeRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationEmployeeResponseDto, UpdateClassificationEmployeeErrorBody]:
        """Update details about an existing employee.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/employees/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateClassificationEmployeeRequestDto | UpdateClassificationEmployeeRequestDtoDict](body),
            decoder=async_json_decoder[ClassificationEmployeeResponseDto],
            error_mapper=update_classification_employee_error_mapper,
            request_options=request_options,
        )

    async def update_classification_item(
        self,
        id_: str,
        body: UpdateClassificationItemRequestDto | UpdateClassificationItemRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationItemResponseDto, UpdateClassificationItemErrorBody]:
        """Update details about an existing item.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/items/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateClassificationItemRequestDto | UpdateClassificationItemRequestDtoDict](body),
            decoder=async_json_decoder[ClassificationItemResponseDto],
            error_mapper=update_classification_item_error_mapper,
            request_options=request_options,
        )

    async def update_classification_job(
        self,
        id_: str,
        body: UpdateClassificationJobRequestDto | UpdateClassificationJobRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationJobResponseDto, UpdateClassificationJobErrorBody]:
        """Update details about an existing job.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/jobs/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateClassificationJobRequestDto | UpdateClassificationJobRequestDtoDict](body),
            decoder=async_json_decoder[ClassificationJobResponseDto],
            error_mapper=update_classification_job_error_mapper,
            request_options=request_options,
        )

    async def update_classification_location(
        self,
        id_: str,
        body: UpdateClassificationLocationRequestDto | UpdateClassificationLocationRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ClassificationLocationResponseDto, UpdateClassificationLocationErrorBody]:
        """Update details about an existing location.

        Args:
            id_: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/classifications/locations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateClassificationLocationRequestDto | UpdateClassificationLocationRequestDtoDict](body),
            decoder=async_json_decoder[ClassificationLocationResponseDto],
            error_mapper=update_classification_location_error_mapper,
            request_options=request_options,
        )
