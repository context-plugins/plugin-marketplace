from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.delete_api_v1_data_standards_data_standard_id_error import (
    DeleteApiV1DataStandardsDataStandardIdErrorBody,
    delete_api_v1_data_standards_data_standard_id_error_mapper,
)
from ..errors.get_api_v1_data_standards_activity_error import (
    GetApiV1DataStandardsActivityErrorBody,
    get_api_v1_data_standards_activity_error_mapper,
)
from ..errors.get_api_v1_data_standards_data_standard_id_checks_error import (
    GetApiV1DataStandardsDataStandardIdChecksErrorBody,
    get_api_v1_data_standards_data_standard_id_checks_error_mapper,
)
from ..errors.get_api_v1_data_standards_data_standard_id_datasets_error import (
    GetApiV1DataStandardsDataStandardIdDatasetsErrorBody,
    get_api_v1_data_standards_data_standard_id_datasets_error_mapper,
)
from ..errors.get_api_v1_data_standards_data_standard_id_error import (
    GetApiV1DataStandardsDataStandardIdErrorBody,
    get_api_v1_data_standards_data_standard_id_error_mapper,
)
from ..errors.get_api_v1_data_standards_error import (
    GetApiV1DataStandardsErrorBody,
    get_api_v1_data_standards_error_mapper,
)
from ..errors.post_api_v1_data_standards_actions_execute_error import (
    PostApiV1DataStandardsActionsExecuteErrorBody,
    post_api_v1_data_standards_actions_execute_error_mapper,
)
from ..errors.post_api_v1_data_standards_actions_preview_scope_error import (
    PostApiV1DataStandardsActionsPreviewScopeErrorBody,
    post_api_v1_data_standards_actions_preview_scope_error_mapper,
)
from ..errors.post_api_v1_data_standards_actions_test_error import (
    PostApiV1DataStandardsActionsTestErrorBody,
    post_api_v1_data_standards_actions_test_error_mapper,
)
from ..errors.post_api_v1_data_standards_data_standard_id_actions_evaluate_scope_error import (
    PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeErrorBody,
    post_api_v1_data_standards_data_standard_id_actions_evaluate_scope_error_mapper,
)
from ..errors.post_api_v1_data_standards_data_standard_id_actions_status_error import (
    PostApiV1DataStandardsDataStandardIdActionsStatusErrorBody,
    post_api_v1_data_standards_data_standard_id_actions_status_error_mapper,
)
from ..errors.post_api_v1_data_standards_data_standard_id_error import (
    PostApiV1DataStandardsDataStandardIdErrorBody,
    post_api_v1_data_standards_data_standard_id_error_mapper,
)
from ..errors.post_api_v1_data_standards_error import (
    PostApiV1DataStandardsErrorBody,
    post_api_v1_data_standards_error_mapper,
)
from ..models.enums.data_standard_sort_field_dto import DataStandardSortFieldDtoOrStr
from ..models.enums.data_standard_status_dto import DataStandardStatusDtoOrStr
from ..models.public_api_create_data_standard_response import PublicApiCreateDataStandardResponse
from ..models.public_api_data_standard_request_dto import (
    PublicApiDataStandardRequestDto,
    PublicApiDataStandardRequestDtoDict,
)
from ..models.public_api_data_standards_activity_response import PublicApiDataStandardsActivityResponse
from ..models.public_api_delete_data_standard_response import PublicApiDeleteDataStandardResponse
from ..models.public_api_evaluate_data_standard_scope_response import PublicApiEvaluateDataStandardScopeResponse
from ..models.public_api_execute_data_standards_request_dto import (
    PublicApiExecuteDataStandardsRequestDto,
    PublicApiExecuteDataStandardsRequestDtoDict,
)
from ..models.public_api_execute_data_standards_response import PublicApiExecuteDataStandardsResponse
from ..models.public_api_get_data_standard_response import PublicApiGetDataStandardResponse
from ..models.public_api_list_data_standard_checks_response import PublicApiListDataStandardChecksResponse
from ..models.public_api_list_data_standard_datasets_response import PublicApiListDataStandardDatasetsResponse
from ..models.public_api_list_data_standards_response import PublicApiListDataStandardsResponse
from ..models.public_api_preview_data_standard_scope_request_dto import (
    PublicApiPreviewDataStandardScopeRequestDto,
    PublicApiPreviewDataStandardScopeRequestDtoDict,
)
from ..models.public_api_preview_data_standard_scope_response import PublicApiPreviewDataStandardScopeResponse
from ..models.public_api_test_data_standard_request_dto import (
    PublicApiTestDataStandardRequestDto,
    PublicApiTestDataStandardRequestDtoDict,
)
from ..models.public_api_test_data_standard_response import PublicApiTestDataStandardResponse
from ..models.public_api_update_data_standard_response import PublicApiUpdateDataStandardResponse
from ..models.public_api_update_data_standard_status_request_dto import (
    PublicApiUpdateDataStandardStatusRequestDto,
    PublicApiUpdateDataStandardStatusRequestDtoDict,
)
from ..models.public_api_update_data_standard_status_response import PublicApiUpdateDataStandardStatusResponse
from ..server.server import Server


class DataStandards:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DataStandardsWithRawResponse(client, server, auth)

    def delete_api_v1_data_standards_data_standard_id(
        self, data_standard_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDeleteDataStandardResponse:
        """Schedules a data standard for deletion. Deletion is processed asynchronously: the standard and its dataset
        associations, owners and YAML file are removed in the background.

        ## Authorization

        Only users with **Manage data standards** permission can delete data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_api_v1_data_standards_data_standard_id(
                data_standard_id, request_options=request_options
            ),
        )

    def get_api_v1_data_standards(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        sort: DataStandardSortFieldDtoOrStr | None = None,
        status: DataStandardStatusDtoOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiListDataStandardsResponse:
        """This endpoint allows you to list the data standards in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the data standard name and label.

        - ``status``: Optionally, use this parameter to list only data standards with a given status (``draft``,
            ``active``, ``paused``, or ``invalid``).

        - ``sort``: Optionally, sort the results by ``name`` (default) or ``label``.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            sort: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_data_standards(
                page=page, search=search, size=size, sort=sort, status=status, request_options=request_options
            ),
        )

    def get_api_v1_data_standards_activity(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDataStandardsActivityResponse:
        """This endpoint returns an organization-wide rollup of data standards activity, including counts of active and
        total standards, matched datasets, and check results.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_api_v1_data_standards_activity(request_options=request_options))

    def get_api_v1_data_standards_data_standard_id(
        self, data_standard_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiGetDataStandardResponse:
        """This endpoint allows you to retrieve a specific data standard, including its YAML contents and scope.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_data_standards_data_standard_id(
                data_standard_id, request_options=request_options
            ),
        )

    def get_api_v1_data_standards_data_standard_id_checks(
        self,
        data_standard_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiListDataStandardChecksResponse:
        """This endpoint allows you to list the aggregated checks of a specific data standard.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_data_standards_data_standard_id_checks(
                data_standard_id, page=page, size=size, request_options=request_options
            ),
        )

    def get_api_v1_data_standards_data_standard_id_datasets(
        self,
        data_standard_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiListDataStandardDatasetsResponse:
        """This endpoint allows you to list the datasets matched by a specific data standard.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_data_standards_data_standard_id_datasets(
                data_standard_id, page=page, size=size, request_options=request_options
            ),
        )

    def post_api_v1_data_standards(
        self,
        body: PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiCreateDataStandardResponse:
        """This endpoint allows you to create a new data standard from YAML contents, a structured scope, status, owners
        and an optional schedule.

        The ``contents`` field must contain valid data standard YAML. If the YAML is malformed, the request is rejected
        with a 400 error.

        ## Authorization

        Only users with **Manage data standards** permission can create data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_data_standards(body, request_options=request_options))

    def post_api_v1_data_standards_actions_execute(
        self,
        body: PublicApiExecuteDataStandardsRequestDto | PublicApiExecuteDataStandardsRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiExecuteDataStandardsResponse:
        """This endpoint triggers a scan that runs the active data standards linked to the specified dataset.

        The response, when successful, is ``201`` and contains the header ``X-Soda-Scan-Id`` and a ``Location`` header
        which identify the triggered scan. Use the value of ``X-Soda-Scan-Id`` in the ``scanId`` parameter of the **Get
        scan status**, **Get scan logs**, and **Cancel a scan** endpoints.

        ## Authorization

        Only users with **Manage data standards** permission can execute data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_data_standards_actions_execute(body, request_options=request_options)
        )

    def post_api_v1_data_standards_actions_preview_scope(
        self,
        body: PublicApiPreviewDataStandardScopeRequestDto | PublicApiPreviewDataStandardScopeRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiPreviewDataStandardScopeResponse:
        """This endpoint evaluates a candidate scope and returns the datasets that would match it, without creating or
        modifying any data standard.

        The ``scope`` uses the same structured rule grammar as the create-data-standard endpoint. An omitted or empty
        scope matches **all** datasets, mirroring how a data standard without a scope applies to every dataset. Results
        are paged with ``page`` (0-based, default 0) and ``size`` (between 1 and 1000, default 10).

        ## Authorization

        Only users with **Manage data standards** permission can preview a data standard scope.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_data_standards_actions_preview_scope(
                body, request_options=request_options
            ),
        )

    def post_api_v1_data_standards_actions_test(
        self,
        body: PublicApiTestDataStandardRequestDto | PublicApiTestDataStandardRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiTestDataStandardResponse:
        """This endpoint runs the checks of an unsaved data standard against one dataset's live data, without creating
        or modifying any data standard. The tested standard does not appear in your data standards and no checks or
        check results are persisted; the outcome is only visible on the triggered scan.

        The ``contents`` field must contain valid data standard YAML. If the YAML is malformed, the request is rejected
        with a 400 error.

        The response, when successful, is ``201`` and contains the header ``X-Soda-Scan-Id`` and a ``Location`` header
        which identify the triggered scan. Use the value of ``X-Soda-Scan-Id`` in the ``scanId`` parameter of the **Get
        scan status**, **Get scan logs**, and **Cancel a scan** endpoints.

        ## Authorization

        Only users with **Manage data standards** permission who can view the dataset's datasource can test a data
        standard.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_data_standards_actions_test(body, request_options=request_options)
        )

    def post_api_v1_data_standards_data_standard_id(
        self,
        data_standard_id: str,
        body: PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateDataStandardResponse:
        """This endpoint allows you to replace an existing data standard's YAML contents, scope, status, owners and
        schedule.

        The ``contents`` field must contain valid data standard YAML. If the YAML is malformed, the request is rejected
        with a 400 error.

        ## Authorization

        Only users with **Manage data standards** permission can update data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_data_standards_data_standard_id(
                data_standard_id, body, request_options=request_options
            ),
        )

    def post_api_v1_data_standards_data_standard_id_actions_evaluate_scope(
        self, data_standard_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiEvaluateDataStandardScopeResponse:
        """This endpoint re-evaluates a data standard's scope and returns the ids of the datasets that currently match
        it.

        ## Authorization

        Only users with **Manage data standards** permission can evaluate a data standard's scope.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_data_standards_data_standard_id_actions_evaluate_scope(
                data_standard_id, request_options=request_options
            ),
        )

    def post_api_v1_data_standards_data_standard_id_actions_status(
        self,
        data_standard_id: str,
        body: PublicApiUpdateDataStandardStatusRequestDto | PublicApiUpdateDataStandardStatusRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateDataStandardStatusResponse:
        """This endpoint transitions a data standard to a new status without modifying its contents, scope, owners or
        schedule.

        Allowed transitions are validated; an invalid transition is rejected with a 400 error.

        ## Authorization

        Only users with **Manage data standards** permission can update a data standard's status.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_data_standards_data_standard_id_actions_status(
                data_standard_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DataStandardsWithRawResponse:
        return self._with_raw_response


class AsyncDataStandards:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDataStandardsWithRawResponse(client, server, auth)

    async def delete_api_v1_data_standards_data_standard_id(
        self, data_standard_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiDeleteDataStandardResponse:
        """Schedules a data standard for deletion. Deletion is processed asynchronously: the standard and its dataset
        associations, owners and YAML file are removed in the background.

        ## Authorization

        Only users with **Manage data standards** permission can delete data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_data_standards_data_standard_id(
                data_standard_id, request_options=request_options
            ),
        )

    async def get_api_v1_data_standards(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        sort: DataStandardSortFieldDtoOrStr | None = None,
        status: DataStandardStatusDtoOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiListDataStandardsResponse:
        """This endpoint allows you to list the data standards in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the data standard name and label.

        - ``status``: Optionally, use this parameter to list only data standards with a given status (``draft``,
            ``active``, ``paused``, or ``invalid``).

        - ``sort``: Optionally, sort the results by ``name`` (default) or ``label``.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            sort: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_data_standards(
                page=page, search=search, size=size, sort=sort, status=status, request_options=request_options
            ),
        )

    async def get_api_v1_data_standards_activity(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiDataStandardsActivityResponse:
        """This endpoint returns an organization-wide rollup of data standards activity, including counts of active and
        total standards, matched datasets, and check results.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_api_v1_data_standards_activity(request_options=request_options))

    async def get_api_v1_data_standards_data_standard_id(
        self, data_standard_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiGetDataStandardResponse:
        """This endpoint allows you to retrieve a specific data standard, including its YAML contents and scope.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_data_standards_data_standard_id(
                data_standard_id, request_options=request_options
            ),
        )

    async def get_api_v1_data_standards_data_standard_id_checks(
        self,
        data_standard_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiListDataStandardChecksResponse:
        """This endpoint allows you to list the aggregated checks of a specific data standard.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_data_standards_data_standard_id_checks(
                data_standard_id, page=page, size=size, request_options=request_options
            ),
        )

    async def get_api_v1_data_standards_data_standard_id_datasets(
        self,
        data_standard_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiListDataStandardDatasetsResponse:
        """This endpoint allows you to list the datasets matched by a specific data standard.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_data_standards_data_standard_id_datasets(
                data_standard_id, page=page, size=size, request_options=request_options
            ),
        )

    async def post_api_v1_data_standards(
        self,
        body: PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiCreateDataStandardResponse:
        """This endpoint allows you to create a new data standard from YAML contents, a structured scope, status, owners
        and an optional schedule.

        The ``contents`` field must contain valid data standard YAML. If the YAML is malformed, the request is rejected
        with a 400 error.

        ## Authorization

        Only users with **Manage data standards** permission can create data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_data_standards(body, request_options=request_options))

    async def post_api_v1_data_standards_actions_execute(
        self,
        body: PublicApiExecuteDataStandardsRequestDto | PublicApiExecuteDataStandardsRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiExecuteDataStandardsResponse:
        """This endpoint triggers a scan that runs the active data standards linked to the specified dataset.

        The response, when successful, is ``201`` and contains the header ``X-Soda-Scan-Id`` and a ``Location`` header
        which identify the triggered scan. Use the value of ``X-Soda-Scan-Id`` in the ``scanId`` parameter of the **Get
        scan status**, **Get scan logs**, and **Cancel a scan** endpoints.

        ## Authorization

        Only users with **Manage data standards** permission can execute data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_data_standards_actions_execute(
                body, request_options=request_options
            ),
        )

    async def post_api_v1_data_standards_actions_preview_scope(
        self,
        body: PublicApiPreviewDataStandardScopeRequestDto | PublicApiPreviewDataStandardScopeRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiPreviewDataStandardScopeResponse:
        """This endpoint evaluates a candidate scope and returns the datasets that would match it, without creating or
        modifying any data standard.

        The ``scope`` uses the same structured rule grammar as the create-data-standard endpoint. An omitted or empty
        scope matches **all** datasets, mirroring how a data standard without a scope applies to every dataset. Results
        are paged with ``page`` (0-based, default 0) and ``size`` (between 1 and 1000, default 10).

        ## Authorization

        Only users with **Manage data standards** permission can preview a data standard scope.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_data_standards_actions_preview_scope(
                body, request_options=request_options
            ),
        )

    async def post_api_v1_data_standards_actions_test(
        self,
        body: PublicApiTestDataStandardRequestDto | PublicApiTestDataStandardRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiTestDataStandardResponse:
        """This endpoint runs the checks of an unsaved data standard against one dataset's live data, without creating
        or modifying any data standard. The tested standard does not appear in your data standards and no checks or
        check results are persisted; the outcome is only visible on the triggered scan.

        The ``contents`` field must contain valid data standard YAML. If the YAML is malformed, the request is rejected
        with a 400 error.

        The response, when successful, is ``201`` and contains the header ``X-Soda-Scan-Id`` and a ``Location`` header
        which identify the triggered scan. Use the value of ``X-Soda-Scan-Id`` in the ``scanId`` parameter of the **Get
        scan status**, **Get scan logs**, and **Cancel a scan** endpoints.

        ## Authorization

        Only users with **Manage data standards** permission who can view the dataset's datasource can test a data
        standard.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_data_standards_actions_test(body, request_options=request_options)
        )

    async def post_api_v1_data_standards_data_standard_id(
        self,
        data_standard_id: str,
        body: PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateDataStandardResponse:
        """This endpoint allows you to replace an existing data standard's YAML contents, scope, status, owners and
        schedule.

        The ``contents`` field must contain valid data standard YAML. If the YAML is malformed, the request is rejected
        with a 400 error.

        ## Authorization

        Only users with **Manage data standards** permission can update data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_data_standards_data_standard_id(
                data_standard_id, body, request_options=request_options
            ),
        )

    async def post_api_v1_data_standards_data_standard_id_actions_evaluate_scope(
        self, data_standard_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiEvaluateDataStandardScopeResponse:
        """This endpoint re-evaluates a data standard's scope and returns the ids of the datasets that currently match
        it.

        ## Authorization

        Only users with **Manage data standards** permission can evaluate a data standard's scope.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_data_standards_data_standard_id_actions_evaluate_scope(
                data_standard_id, request_options=request_options
            ),
        )

    async def post_api_v1_data_standards_data_standard_id_actions_status(
        self,
        data_standard_id: str,
        body: PublicApiUpdateDataStandardStatusRequestDto | PublicApiUpdateDataStandardStatusRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateDataStandardStatusResponse:
        """This endpoint transitions a data standard to a new status without modifying its contents, scope, owners or
        schedule.

        Allowed transitions are validated; an invalid transition is rejected with a 400 error.

        ## Authorization

        Only users with **Manage data standards** permission can update a data standard's status.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_data_standards_data_standard_id_actions_status(
                data_standard_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDataStandardsWithRawResponse:
        return self._with_raw_response


class DataStandardsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_api_v1_data_standards_data_standard_id(
        self, data_standard_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteDataStandardResponse, DeleteApiV1DataStandardsDataStandardIdErrorBody]:
        """Schedules a data standard for deletion. Deletion is processed asynchronously: the standard and its dataset
        associations, owners and YAML file are removed in the background.

        ## Authorization

        Only users with **Manage data standards** permission can delete data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/dataStandards/{dataStandardId}"),
            path_params=[param[str]("dataStandardId", data_standard_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDeleteDataStandardResponse],
            error_mapper=delete_api_v1_data_standards_data_standard_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_data_standards(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        sort: DataStandardSortFieldDtoOrStr | None = None,
        status: DataStandardStatusDtoOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListDataStandardsResponse, GetApiV1DataStandardsErrorBody]:
        """This endpoint allows you to list the data standards in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the data standard name and label.

        - ``status``: Optionally, use this parameter to list only data standards with a given status (``draft``,
            ``active``, ``paused``, or ``invalid``).

        - ``sort``: Optionally, sort the results by ``name`` (default) or ``label``.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            sort: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/dataStandards"),
            query_params=[
                param[int | None]("page", page),
                param[str | None]("search", search),
                param[int | None]("size", size),
                param[DataStandardSortFieldDtoOrStr | None]("sort", sort),
                param[DataStandardStatusDtoOrStr | None]("status", status),
            ],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiListDataStandardsResponse],
            error_mapper=get_api_v1_data_standards_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_data_standards_activity(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDataStandardsActivityResponse, GetApiV1DataStandardsActivityErrorBody]:
        """This endpoint returns an organization-wide rollup of data standards activity, including counts of active and
        total standards, matched datasets, and check results.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/dataStandards/activity"),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDataStandardsActivityResponse],
            error_mapper=get_api_v1_data_standards_activity_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_data_standards_data_standard_id(
        self, data_standard_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiGetDataStandardResponse, GetApiV1DataStandardsDataStandardIdErrorBody]:
        """This endpoint allows you to retrieve a specific data standard, including its YAML contents and scope.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/dataStandards/{dataStandardId}"),
            path_params=[param[str]("dataStandardId", data_standard_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiGetDataStandardResponse],
            error_mapper=get_api_v1_data_standards_data_standard_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_data_standards_data_standard_id_checks(
        self,
        data_standard_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListDataStandardChecksResponse, GetApiV1DataStandardsDataStandardIdChecksErrorBody]:
        """This endpoint allows you to list the aggregated checks of a specific data standard.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/dataStandards/{dataStandardId}/checks"),
            path_params=[param[str]("dataStandardId", data_standard_id)],
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiListDataStandardChecksResponse],
            error_mapper=get_api_v1_data_standards_data_standard_id_checks_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_data_standards_data_standard_id_datasets(
        self,
        data_standard_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListDataStandardDatasetsResponse, GetApiV1DataStandardsDataStandardIdDatasetsErrorBody]:
        """This endpoint allows you to list the datasets matched by a specific data standard.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/dataStandards/{dataStandardId}/datasets"),
            path_params=[param[str]("dataStandardId", data_standard_id)],
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiListDataStandardDatasetsResponse],
            error_mapper=get_api_v1_data_standards_data_standard_id_datasets_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_data_standards(
        self,
        body: PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiCreateDataStandardResponse, PostApiV1DataStandardsErrorBody]:
        """This endpoint allows you to create a new data standard from YAML contents, a structured scope, status, owners
        and an optional schedule.

        The ``contents`` field must contain valid data standard YAML. If the YAML is malformed, the request is rejected
        with a 400 error.

        ## Authorization

        Only users with **Manage data standards** permission can create data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dataStandards"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiCreateDataStandardResponse],
            error_mapper=post_api_v1_data_standards_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_data_standards_actions_execute(
        self,
        body: PublicApiExecuteDataStandardsRequestDto | PublicApiExecuteDataStandardsRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiExecuteDataStandardsResponse, PostApiV1DataStandardsActionsExecuteErrorBody]:
        """This endpoint triggers a scan that runs the active data standards linked to the specified dataset.

        The response, when successful, is ``201`` and contains the header ``X-Soda-Scan-Id`` and a ``Location`` header
        which identify the triggered scan. Use the value of ``X-Soda-Scan-Id`` in the ``scanId`` parameter of the **Get
        scan status**, **Get scan logs**, and **Cancel a scan** endpoints.

        ## Authorization

        Only users with **Manage data standards** permission can execute data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dataStandards/actions/execute"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiExecuteDataStandardsRequestDto | PublicApiExecuteDataStandardsRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiExecuteDataStandardsResponse],
            error_mapper=post_api_v1_data_standards_actions_execute_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_data_standards_actions_preview_scope(
        self,
        body: PublicApiPreviewDataStandardScopeRequestDto | PublicApiPreviewDataStandardScopeRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiPreviewDataStandardScopeResponse, PostApiV1DataStandardsActionsPreviewScopeErrorBody]:
        """This endpoint evaluates a candidate scope and returns the datasets that would match it, without creating or
        modifying any data standard.

        The ``scope`` uses the same structured rule grammar as the create-data-standard endpoint. An omitted or empty
        scope matches **all** datasets, mirroring how a data standard without a scope applies to every dataset. Results
        are paged with ``page`` (0-based, default 0) and ``size`` (between 1 and 1000, default 10).

        ## Authorization

        Only users with **Manage data standards** permission can preview a data standard scope.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dataStandards/actions/previewScope"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicApiPreviewDataStandardScopeRequestDto | PublicApiPreviewDataStandardScopeRequestDtoDict
            ](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiPreviewDataStandardScopeResponse],
            error_mapper=post_api_v1_data_standards_actions_preview_scope_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_data_standards_actions_test(
        self,
        body: PublicApiTestDataStandardRequestDto | PublicApiTestDataStandardRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiTestDataStandardResponse, PostApiV1DataStandardsActionsTestErrorBody]:
        """This endpoint runs the checks of an unsaved data standard against one dataset's live data, without creating
        or modifying any data standard. The tested standard does not appear in your data standards and no checks or
        check results are persisted; the outcome is only visible on the triggered scan.

        The ``contents`` field must contain valid data standard YAML. If the YAML is malformed, the request is rejected
        with a 400 error.

        The response, when successful, is ``201`` and contains the header ``X-Soda-Scan-Id`` and a ``Location`` header
        which identify the triggered scan. Use the value of ``X-Soda-Scan-Id`` in the ``scanId`` parameter of the **Get
        scan status**, **Get scan logs**, and **Cancel a scan** endpoints.

        ## Authorization

        Only users with **Manage data standards** permission who can view the dataset's datasource can test a data
        standard.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dataStandards/actions/test"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiTestDataStandardRequestDto | PublicApiTestDataStandardRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiTestDataStandardResponse],
            error_mapper=post_api_v1_data_standards_actions_test_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_data_standards_data_standard_id(
        self,
        data_standard_id: str,
        body: PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateDataStandardResponse, PostApiV1DataStandardsDataStandardIdErrorBody]:
        """This endpoint allows you to replace an existing data standard's YAML contents, scope, status, owners and
        schedule.

        The ``contents`` field must contain valid data standard YAML. If the YAML is malformed, the request is rejected
        with a 400 error.

        ## Authorization

        Only users with **Manage data standards** permission can update data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dataStandards/{dataStandardId}"),
            path_params=[param[str]("dataStandardId", data_standard_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiUpdateDataStandardResponse],
            error_mapper=post_api_v1_data_standards_data_standard_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_data_standards_data_standard_id_actions_evaluate_scope(
        self, data_standard_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        PublicApiEvaluateDataStandardScopeResponse, PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeErrorBody
    ]:
        """This endpoint re-evaluates a data standard's scope and returns the ids of the datasets that currently match
        it.

        ## Authorization

        Only users with **Manage data standards** permission can evaluate a data standard's scope.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dataStandards/{dataStandardId}/actions/evaluateScope"),
            path_params=[param[str]("dataStandardId", data_standard_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiEvaluateDataStandardScopeResponse],
            error_mapper=post_api_v1_data_standards_data_standard_id_actions_evaluate_scope_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_data_standards_data_standard_id_actions_status(
        self,
        data_standard_id: str,
        body: PublicApiUpdateDataStandardStatusRequestDto | PublicApiUpdateDataStandardStatusRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PublicApiUpdateDataStandardStatusResponse, PostApiV1DataStandardsDataStandardIdActionsStatusErrorBody
    ]:
        """This endpoint transitions a data standard to a new status without modifying its contents, scope, owners or
        schedule.

        Allowed transitions are validated; an invalid transition is rejected with a 400 error.

        ## Authorization

        Only users with **Manage data standards** permission can update a data standard's status.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dataStandards/{dataStandardId}/actions/status"),
            path_params=[param[str]("dataStandardId", data_standard_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicApiUpdateDataStandardStatusRequestDto | PublicApiUpdateDataStandardStatusRequestDtoDict
            ](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiUpdateDataStandardStatusResponse],
            error_mapper=post_api_v1_data_standards_data_standard_id_actions_status_error_mapper,
            request_options=request_options,
        )


class AsyncDataStandardsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_api_v1_data_standards_data_standard_id(
        self, data_standard_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteDataStandardResponse, DeleteApiV1DataStandardsDataStandardIdErrorBody]:
        """Schedules a data standard for deletion. Deletion is processed asynchronously: the standard and its dataset
        associations, owners and YAML file are removed in the background.

        ## Authorization

        Only users with **Manage data standards** permission can delete data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/dataStandards/{dataStandardId}"),
            path_params=[param[str]("dataStandardId", data_standard_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDeleteDataStandardResponse],
            error_mapper=delete_api_v1_data_standards_data_standard_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_data_standards(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        sort: DataStandardSortFieldDtoOrStr | None = None,
        status: DataStandardStatusDtoOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListDataStandardsResponse, GetApiV1DataStandardsErrorBody]:
        """This endpoint allows you to list the data standards in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the data standard name and label.

        - ``status``: Optionally, use this parameter to list only data standards with a given status (``draft``,
            ``active``, ``paused``, or ``invalid``).

        - ``sort``: Optionally, sort the results by ``name`` (default) or ``label``.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            sort: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/dataStandards"),
            query_params=[
                param[int | None]("page", page),
                param[str | None]("search", search),
                param[int | None]("size", size),
                param[DataStandardSortFieldDtoOrStr | None]("sort", sort),
                param[DataStandardStatusDtoOrStr | None]("status", status),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiListDataStandardsResponse],
            error_mapper=get_api_v1_data_standards_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_data_standards_activity(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDataStandardsActivityResponse, GetApiV1DataStandardsActivityErrorBody]:
        """This endpoint returns an organization-wide rollup of data standards activity, including counts of active and
        total standards, matched datasets, and check results.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/dataStandards/activity"),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDataStandardsActivityResponse],
            error_mapper=get_api_v1_data_standards_activity_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_data_standards_data_standard_id(
        self, data_standard_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiGetDataStandardResponse, GetApiV1DataStandardsDataStandardIdErrorBody]:
        """This endpoint allows you to retrieve a specific data standard, including its YAML contents and scope.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/dataStandards/{dataStandardId}"),
            path_params=[param[str]("dataStandardId", data_standard_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiGetDataStandardResponse],
            error_mapper=get_api_v1_data_standards_data_standard_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_data_standards_data_standard_id_checks(
        self,
        data_standard_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListDataStandardChecksResponse, GetApiV1DataStandardsDataStandardIdChecksErrorBody]:
        """This endpoint allows you to list the aggregated checks of a specific data standard.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/dataStandards/{dataStandardId}/checks"),
            path_params=[param[str]("dataStandardId", data_standard_id)],
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiListDataStandardChecksResponse],
            error_mapper=get_api_v1_data_standards_data_standard_id_checks_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_data_standards_data_standard_id_datasets(
        self,
        data_standard_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListDataStandardDatasetsResponse, GetApiV1DataStandardsDataStandardIdDatasetsErrorBody]:
        """This endpoint allows you to list the datasets matched by a specific data standard.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/dataStandards/{dataStandardId}/datasets"),
            path_params=[param[str]("dataStandardId", data_standard_id)],
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiListDataStandardDatasetsResponse],
            error_mapper=get_api_v1_data_standards_data_standard_id_datasets_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_data_standards(
        self,
        body: PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiCreateDataStandardResponse, PostApiV1DataStandardsErrorBody]:
        """This endpoint allows you to create a new data standard from YAML contents, a structured scope, status, owners
        and an optional schedule.

        The ``contents`` field must contain valid data standard YAML. If the YAML is malformed, the request is rejected
        with a 400 error.

        ## Authorization

        Only users with **Manage data standards** permission can create data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dataStandards"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiCreateDataStandardResponse],
            error_mapper=post_api_v1_data_standards_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_data_standards_actions_execute(
        self,
        body: PublicApiExecuteDataStandardsRequestDto | PublicApiExecuteDataStandardsRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiExecuteDataStandardsResponse, PostApiV1DataStandardsActionsExecuteErrorBody]:
        """This endpoint triggers a scan that runs the active data standards linked to the specified dataset.

        The response, when successful, is ``201`` and contains the header ``X-Soda-Scan-Id`` and a ``Location`` header
        which identify the triggered scan. Use the value of ``X-Soda-Scan-Id`` in the ``scanId`` parameter of the **Get
        scan status**, **Get scan logs**, and **Cancel a scan** endpoints.

        ## Authorization

        Only users with **Manage data standards** permission can execute data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dataStandards/actions/execute"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiExecuteDataStandardsRequestDto | PublicApiExecuteDataStandardsRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiExecuteDataStandardsResponse],
            error_mapper=post_api_v1_data_standards_actions_execute_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_data_standards_actions_preview_scope(
        self,
        body: PublicApiPreviewDataStandardScopeRequestDto | PublicApiPreviewDataStandardScopeRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiPreviewDataStandardScopeResponse, PostApiV1DataStandardsActionsPreviewScopeErrorBody]:
        """This endpoint evaluates a candidate scope and returns the datasets that would match it, without creating or
        modifying any data standard.

        The ``scope`` uses the same structured rule grammar as the create-data-standard endpoint. An omitted or empty
        scope matches **all** datasets, mirroring how a data standard without a scope applies to every dataset. Results
        are paged with ``page`` (0-based, default 0) and ``size`` (between 1 and 1000, default 10).

        ## Authorization

        Only users with **Manage data standards** permission can preview a data standard scope.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dataStandards/actions/previewScope"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicApiPreviewDataStandardScopeRequestDto | PublicApiPreviewDataStandardScopeRequestDtoDict
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiPreviewDataStandardScopeResponse],
            error_mapper=post_api_v1_data_standards_actions_preview_scope_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_data_standards_actions_test(
        self,
        body: PublicApiTestDataStandardRequestDto | PublicApiTestDataStandardRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiTestDataStandardResponse, PostApiV1DataStandardsActionsTestErrorBody]:
        """This endpoint runs the checks of an unsaved data standard against one dataset's live data, without creating
        or modifying any data standard. The tested standard does not appear in your data standards and no checks or
        check results are persisted; the outcome is only visible on the triggered scan.

        The ``contents`` field must contain valid data standard YAML. If the YAML is malformed, the request is rejected
        with a 400 error.

        The response, when successful, is ``201`` and contains the header ``X-Soda-Scan-Id`` and a ``Location`` header
        which identify the triggered scan. Use the value of ``X-Soda-Scan-Id`` in the ``scanId`` parameter of the **Get
        scan status**, **Get scan logs**, and **Cancel a scan** endpoints.

        ## Authorization

        Only users with **Manage data standards** permission who can view the dataset's datasource can test a data
        standard.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dataStandards/actions/test"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiTestDataStandardRequestDto | PublicApiTestDataStandardRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiTestDataStandardResponse],
            error_mapper=post_api_v1_data_standards_actions_test_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_data_standards_data_standard_id(
        self,
        data_standard_id: str,
        body: PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateDataStandardResponse, PostApiV1DataStandardsDataStandardIdErrorBody]:
        """This endpoint allows you to replace an existing data standard's YAML contents, scope, status, owners and
        schedule.

        The ``contents`` field must contain valid data standard YAML. If the YAML is malformed, the request is rejected
        with a 400 error.

        ## Authorization

        Only users with **Manage data standards** permission can update data standards.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dataStandards/{dataStandardId}"),
            path_params=[param[str]("dataStandardId", data_standard_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiDataStandardRequestDto | PublicApiDataStandardRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiUpdateDataStandardResponse],
            error_mapper=post_api_v1_data_standards_data_standard_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_data_standards_data_standard_id_actions_evaluate_scope(
        self, data_standard_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        PublicApiEvaluateDataStandardScopeResponse, PostApiV1DataStandardsDataStandardIdActionsEvaluateScopeErrorBody
    ]:
        """This endpoint re-evaluates a data standard's scope and returns the ids of the datasets that currently match
        it.

        ## Authorization

        Only users with **Manage data standards** permission can evaluate a data standard's scope.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dataStandards/{dataStandardId}/actions/evaluateScope"),
            path_params=[param[str]("dataStandardId", data_standard_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiEvaluateDataStandardScopeResponse],
            error_mapper=post_api_v1_data_standards_data_standard_id_actions_evaluate_scope_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_data_standards_data_standard_id_actions_status(
        self,
        data_standard_id: str,
        body: PublicApiUpdateDataStandardStatusRequestDto | PublicApiUpdateDataStandardStatusRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PublicApiUpdateDataStandardStatusResponse, PostApiV1DataStandardsDataStandardIdActionsStatusErrorBody
    ]:
        """This endpoint transitions a data standard to a new status without modifying its contents, scope, owners or
        schedule.

        Allowed transitions are validated; an invalid transition is rejected with a 400 error.

        ## Authorization

        Only users with **Manage data standards** permission can update a data standard's status.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATA_STANDARDS to execute this call.

        ## Tags

        ``Data Standards``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            data_standard_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/dataStandards/{dataStandardId}/actions/status"),
            path_params=[param[str]("dataStandardId", data_standard_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicApiUpdateDataStandardStatusRequestDto | PublicApiUpdateDataStandardStatusRequestDtoDict
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiUpdateDataStandardStatusResponse],
            error_mapper=post_api_v1_data_standards_data_standard_id_actions_status_error_mapper,
            request_options=request_options,
        )
