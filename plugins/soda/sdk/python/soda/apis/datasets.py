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
    RFC3339DateTime,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error import (
    DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody,
    delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error_mapper,
)
from ..errors.delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error import (
    DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody,
    delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error_mapper,
)
from ..errors.delete_api_v1_datasets_dataset_id_error import (
    DeleteApiV1DatasetsDatasetIdErrorBody,
    delete_api_v1_datasets_dataset_id_error_mapper,
)
from ..errors.delete_api_v1_datasets_roles_role_id_error import (
    DeleteApiV1DatasetsRolesRoleIdErrorBody,
    delete_api_v1_datasets_roles_role_id_error_mapper,
)
from ..errors.get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name_error import (
    GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameErrorBody,
    get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name_error_mapper,
)
from ..errors.get_api_v1_datasets_dataset_id_columns_error import (
    GetApiV1DatasetsDatasetIdColumnsErrorBody,
    get_api_v1_datasets_dataset_id_columns_error_mapper,
)
from ..errors.get_api_v1_datasets_dataset_id_compute_warehouse_error import (
    GetApiV1DatasetsDatasetIdComputeWarehouseErrorBody,
    get_api_v1_datasets_dataset_id_compute_warehouse_error_mapper,
)
from ..errors.get_api_v1_datasets_dataset_id_diagnostics_warehouse_error import (
    GetApiV1DatasetsDatasetIdDiagnosticsWarehouseErrorBody,
    get_api_v1_datasets_dataset_id_diagnostics_warehouse_error_mapper,
)
from ..errors.get_api_v1_datasets_dataset_id_error import (
    GetApiV1DatasetsDatasetIdErrorBody,
    get_api_v1_datasets_dataset_id_error_mapper,
)
from ..errors.get_api_v1_datasets_dataset_id_metric_monitoring_error import (
    GetApiV1DatasetsDatasetIdMetricMonitoringErrorBody,
    get_api_v1_datasets_dataset_id_metric_monitoring_error_mapper,
)
from ..errors.get_api_v1_datasets_dataset_id_profiling_error import (
    GetApiV1DatasetsDatasetIdProfilingErrorBody,
    get_api_v1_datasets_dataset_id_profiling_error_mapper,
)
from ..errors.get_api_v1_datasets_dataset_id_responsibilities_error import (
    GetApiV1DatasetsDatasetIdResponsibilitiesErrorBody,
    get_api_v1_datasets_dataset_id_responsibilities_error_mapper,
)
from ..errors.get_api_v1_datasets_error import GetApiV1DatasetsErrorBody, get_api_v1_datasets_error_mapper
from ..errors.get_api_v1_datasets_roles_error import (
    GetApiV1DatasetsRolesErrorBody,
    get_api_v1_datasets_roles_error_mapper,
)
from ..errors.post_api_v1_datasets_dataset_id_column_attributes_error import (
    PostApiV1DatasetsDatasetIdColumnAttributesErrorBody,
    post_api_v1_datasets_dataset_id_column_attributes_error_mapper,
)
from ..errors.post_api_v1_datasets_dataset_id_column_metric_monitors_error import (
    PostApiV1DatasetsDatasetIdColumnMetricMonitorsErrorBody,
    post_api_v1_datasets_dataset_id_column_metric_monitors_error_mapper,
)
from ..errors.post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error import (
    PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody,
    post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error_mapper,
)
from ..errors.post_api_v1_datasets_dataset_id_custom_sql_monitors_error import (
    PostApiV1DatasetsDatasetIdCustomSqlMonitorsErrorBody,
    post_api_v1_datasets_dataset_id_custom_sql_monitors_error_mapper,
)
from ..errors.post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error import (
    PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody,
    post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error_mapper,
)
from ..errors.post_api_v1_datasets_dataset_id_error import (
    PostApiV1DatasetsDatasetIdErrorBody,
    post_api_v1_datasets_dataset_id_error_mapper,
)
from ..errors.post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection_error import (
    PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody,
    post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection_error_mapper,
)
from ..errors.post_api_v1_datasets_dataset_id_responsibilities_error import (
    PostApiV1DatasetsDatasetIdResponsibilitiesErrorBody,
    post_api_v1_datasets_dataset_id_responsibilities_error_mapper,
)
from ..errors.post_api_v1_datasets_roles_error import (
    PostApiV1DatasetsRolesErrorBody,
    post_api_v1_datasets_roles_error_mapper,
)
from ..errors.post_api_v1_datasets_roles_role_id_error import (
    PostApiV1DatasetsRolesRoleIdErrorBody,
    post_api_v1_datasets_roles_role_id_error_mapper,
)
from ..models.dataset_compute_warehouse_configuration_dto import DatasetComputeWarehouseConfigurationDto
from ..models.datasets_content_dto import DatasetsContentDto
from ..models.public_api_create_column_metric_monitor_request_dto import (
    PublicApiCreateColumnMetricMonitorRequestDto,
    PublicApiCreateColumnMetricMonitorRequestDtoDict,
)
from ..models.public_api_create_custom_sql_monitor_request_dto import (
    PublicApiCreateCustomSqlMonitorRequestDto,
    PublicApiCreateCustomSqlMonitorRequestDtoDict,
)
from ..models.public_api_create_custom_sql_monitor_response import PublicApiCreateCustomSqlMonitorResponse
from ..models.public_api_dataset_diagnostics_warehouse_response import PublicApiDatasetDiagnosticsWarehouseResponse
from ..models.public_api_dataset_metric_monitoring_response import PublicApiDatasetMetricMonitoringResponse
from ..models.public_api_dataset_profiling_response import PublicApiDatasetProfilingResponse
from ..models.public_api_dataset_responsibilities_response import PublicApiDatasetResponsibilitiesResponse
from ..models.public_api_dataset_role_request_dto import (
    PublicApiDatasetRoleRequestDto,
    PublicApiDatasetRoleRequestDtoDict,
)
from ..models.public_api_dataset_roles_response import PublicApiDatasetRolesResponse
from ..models.public_api_datasets_response import PublicApiDatasetsResponse
from ..models.public_api_delete_dataset_response import PublicApiDeleteDatasetResponse
from ..models.public_api_list_dataset_columns_response import PublicApiListDatasetColumnsResponse
from ..models.public_api_set_column_attributes_request_dto import (
    PublicApiSetColumnAttributesRequestDto,
    PublicApiSetColumnAttributesRequestDtoDict,
)
from ..models.public_api_update_column_metric_monitor_request_dto import (
    PublicApiUpdateColumnMetricMonitorRequestDto,
    PublicApiUpdateColumnMetricMonitorRequestDtoDict,
)
from ..models.public_api_update_column_metric_monitor_response import PublicApiUpdateColumnMetricMonitorResponse
from ..models.public_api_update_custom_sql_monitor_request_dto import (
    PublicApiUpdateCustomSqlMonitorRequestDto,
    PublicApiUpdateCustomSqlMonitorRequestDtoDict,
)
from ..models.public_api_update_custom_sql_monitor_response import PublicApiUpdateCustomSqlMonitorResponse
from ..models.public_api_update_dataset_dto import PublicApiUpdateDatasetDto, PublicApiUpdateDatasetDtoDict
from ..models.public_api_update_dataset_responsibilities_request_dto import (
    PublicApiUpdateDatasetResponsibilitiesRequestDto,
    PublicApiUpdateDatasetResponsibilitiesRequestDtoDict,
)
from ..models.public_api_update_dataset_role_response import PublicApiUpdateDatasetRoleResponse
from ..server.server import Server


class Datasets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DatasetsWithRawResponse(client, server, auth)

    def delete_api_v1_datasets_roles_role_id(
        self, role_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDeleteDatasetResponse:
        """This endpoint allows you to delete a custom dataset role from your organization's Soda Cloud account. Dataset
        roles define a named set of permissions that control what actions users can perform on individual datasets, such
        as managing checks, viewing profiling data, configuring the dataset, or managing incidents.

        Deletion is performed asynchronously and may take some time to complete.

        Deletion will fail if the role is still assigned to any dataset permissions or used in responsibility settings.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            role_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_api_v1_datasets_roles_role_id(role_id, request_options=request_options)
        )

    def delete_api_v1_datasets_dataset_id(
        self, dataset_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDeleteDatasetResponse:
        """This endpoint enables you to delete an existing dataset in your organization's Soda Cloud account.

        Deletion is not immediate and can take some time to complete, depending on the size of your dataset. You can
        check the status of the deletion by calling the **Get dataset** endpoint.

        ## Authorization

        Only users with **Delete dataset** permission can delete a dataset. Soda Cloud Admins have permission to delete
        any dataset.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_api_v1_datasets_dataset_id(dataset_id, request_options=request_options)
        )

    def delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
        self, dataset_id: str, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDeleteDatasetResponse:
        """This endpoint allows you to delete a column metric monitor for a specific dataset in your organization's Soda
        Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        delete column metric monitors. Soda Cloud Admins can delete column metric monitors for all datasets. **See
        Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
                dataset_id, monitor_id, request_options=request_options
            ),
        )

    def delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
        self, dataset_id: str, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDeleteDatasetResponse:
        """This endpoint allows you to delete a custom SQL monitor for a specific dataset in your organization's Soda
        Cloud account.

        ## Authorization

        Only users with **Manage contracts** permission can delete custom SQL monitors. Soda Cloud Admins can delete
        custom SQL monitors for all datasets. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
                dataset_id, monitor_id, request_options=request_options
            ),
        )

    def get_api_v1_datasets(
        self,
        *,
        datasource_name: str | None = None,
        from_: RFC3339DateTime | None = None,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiDatasetsResponse:
        """This endpoint enables you to gather information about the datasets that in exist in your organization's Soda
        Cloud account, including information about the Soda Cloud resources with which it is associated, such as data
        source, incidents, attributes and health status.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``from``: Optionally, use this parameter to collect only the information for datasets that have been updated
            after a particular point in time. Supply an ISO8601 timestamp value. Example: ``2023-12-31T10:15:30+01:00``

        - ``datasourceName``: Optionally, use this parameter to collect only the information for datasets associated
            with a specific datasource.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the dataset name.

        If not specified, the query gathers information for all datasets in the account and sorts the results first by
        dataset name and then by datasource name in ascending order.

        ## Authorization

        Soda only returns the datasets to which the user has **View dataset** permissions. Soda Cloud Admins have access
        to all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        30 requests/60 seconds

        Args:
            datasource_name: Value sent with the request.
            from_: Value sent with the request.
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_datasets(
                datasource_name=datasource_name,
                from_=from_,
                page=page,
                search=search,
                size=size,
                request_options=request_options,
            ),
        )

    def get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name(
        self, dataset_qualified_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DatasetsContentDto:
        """This endpoint enables you to retrieve a single dataset by its qualified name (contractIdentifier) from your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **View dataset** permission can view a dataset. Soda Cloud Admins have permission to view any
        dataset. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_qualified_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name(
                dataset_qualified_name, request_options=request_options
            ),
        )

    def get_api_v1_datasets_roles(
        self, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDatasetRolesResponse:
        """This endpoint enables you to gather information about the dataset roles available in your organization's Soda
        Cloud account. Use the dataset roles to manage access to individual datasets.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 100, inclusive. The default value is 100.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
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
            self._with_raw_response.get_api_v1_datasets_roles(page=page, size=size, request_options=request_options)
        )

    def get_api_v1_datasets_dataset_id(
        self, dataset_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DatasetsContentDto:
        """This endpoint enables you to retrieve a single dataset by its ID from your organization's Soda Cloud account.

        ## Authorization

        Only users with **View dataset** permission can view a dataset. Soda Cloud Admins have permission to view any
        dataset. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_datasets_dataset_id(dataset_id, request_options=request_options)
        )

    def get_api_v1_datasets_dataset_id_columns(
        self,
        dataset_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiListDatasetColumnsResponse:
        """Returns the active columns of a dataset, each with the attribute values currently assigned to it.

        Columns are ordered by name ascending. Columns with no assigned attribute values are returned with an empty
        ``attributes`` map.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply a non-negative integer. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have dataset role permission VIEW to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
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
            self._with_raw_response.get_api_v1_datasets_dataset_id_columns(
                dataset_id, page=page, size=size, request_options=request_options
            ),
        )

    def get_api_v1_datasets_dataset_id_compute_warehouse(
        self, dataset_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DatasetComputeWarehouseConfigurationDto:
        """This endpoint retrieves the compute warehouse configuration for a specific dataset in your organization's
        Soda Cloud account. When the compute warehouse configuration is enabled, the warehouse in the configuration will
        be used for compute-heavy tasks like data contract execution, metric monitoring, and profiling.

        ## Authorization

        Only users with **View dataset** permission can retrieve dataset compute warehouse configuration. Soda Cloud
        Admins have permission to view all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_datasets_dataset_id_compute_warehouse(
                dataset_id, request_options=request_options
            ),
        )

    def get_api_v1_datasets_dataset_id_diagnostics_warehouse(
        self, dataset_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDatasetDiagnosticsWarehouseResponse:
        """This endpoint allows you to retrieve detailed diagnostics warehouse information for a specific dataset in
        your organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely
        forwards it to the customer's warehouse for storage and analysis.

        ## Authorization

        Only users with **View dataset** permission can view dataset diagnostics warehouse. Soda Cloud Admins have
        access to diagnostics warehouse information for all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_datasets_dataset_id_diagnostics_warehouse(
                dataset_id, request_options=request_options
            ),
        )

    def get_api_v1_datasets_dataset_id_metric_monitoring(
        self, dataset_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDatasetMetricMonitoringResponse:
        """This endpoint allows you to retrieve detailed metric monitoring configuration information for a specific
        dataset in your organization's Soda Cloud account.

        ## Authorization

        Only users with **View dataset** permission can view dataset metric monitoring configuration. Soda Cloud Admins
        have access to metric monitoring configuration information for all datasets.**See Manage dataset roles for more
        information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_datasets_dataset_id_metric_monitoring(
                dataset_id, request_options=request_options
            ),
        )

    def get_api_v1_datasets_dataset_id_profiling(
        self, dataset_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDatasetProfilingResponse:
        """This endpoint allows you to retrieve detailed profiling information for a specific dataset in your
        organization's Soda Cloud account. Profiling information provides insights into the dataset's structure,
        statistical summaries, and data characteristics.

        ## Authorization

        Only users with **Access dataset profiling and sampling** permission can view dataset profiling. Soda Cloud
        Admins have access to profiling information for all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_datasets_dataset_id_profiling(
                dataset_id, request_options=request_options
            ),
        )

    def get_api_v1_datasets_dataset_id_responsibilities(
        self,
        dataset_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiDatasetResponsibilitiesResponse:
        """This endpoint enables you to gather information about the user and user groups permissions assigned to a
        dataset, and their associated roles in your organization's Soda Cloud account.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 100, inclusive. The default value is 100.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authorization

        Soda only returns the dataset responsibilities to which the user has **View dataset** permissions. Soda Cloud
        Admins have access to all dataset responsibilities.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
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
            self._with_raw_response.get_api_v1_datasets_dataset_id_responsibilities(
                dataset_id, page=page, size=size, request_options=request_options
            ),
        )

    def post_api_v1_datasets_roles(
        self,
        body: PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateDatasetRoleResponse:
        """This endpoint allows you to create a new custom dataset role in your organization's Soda Cloud account.
        Dataset roles define a named set of permissions that control what actions users can perform on individual
        datasets, such as managing checks, viewing profiling data, configuring the dataset, or managing incidents.

        Once created, the role can be assigned to users or user groups via the dataset responsibilities endpoints.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_datasets_roles(body, request_options=request_options))

    def post_api_v1_datasets_roles_role_id(
        self,
        role_id: str,
        body: PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateDatasetRoleResponse:
        """This endpoint allows you to update the name or permissions of an existing custom dataset role. Dataset roles
        define a named set of permissions that control what actions users can perform on individual datasets, such as
        managing checks, viewing profiling data, configuring the dataset, or managing incidents.

        Changes apply immediately to all users and user groups assigned this role.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            role_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_datasets_roles_role_id(role_id, body, request_options=request_options)
        )

    def post_api_v1_datasets_dataset_id(
        self,
        dataset_id: str,
        body: PublicApiUpdateDatasetDto | PublicApiUpdateDatasetDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DatasetsContentDto:
        """This endpoint enables you to update an existing dataset properties in your organization's Soda Cloud account.

        ## Authorization

        Only users with **Configure dataset** permission can update dataset properties. Soda Cloud Admins have
        permission to update all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_datasets_dataset_id(dataset_id, body, request_options=request_options)
        )

    def post_api_v1_datasets_dataset_id_column_attributes(
        self,
        dataset_id: str,
        body: PublicApiSetColumnAttributesRequestDto | PublicApiSetColumnAttributesRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Upsert attribute values on the columns of a dataset.

        The request body maps a column name to a map of attribute-name to value. Setting one attribute on a column does
        not affect other attribute values on the same column. If any column or attribute name is unknown, or any value
        has the wrong type, the entire request is rejected and no changes are persisted.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have dataset role permission CONFIGURE_DATASET to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_datasets_dataset_id_column_attributes(
                dataset_id, body, request_options=request_options
            ),
        )

    def post_api_v1_datasets_dataset_id_column_metric_monitors(
        self,
        dataset_id: str,
        body: PublicApiCreateColumnMetricMonitorRequestDto | PublicApiCreateColumnMetricMonitorRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateColumnMetricMonitorResponse:
        """This endpoint allows you to create a new column metric monitor for a specific dataset in your organization's
        Soda Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        create column metric monitors. Soda Cloud Admins can create column metric monitors for all datasets.**See Manage
        dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_datasets_dataset_id_column_metric_monitors(
                dataset_id, body, request_options=request_options
            ),
        )

    def post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
        self,
        dataset_id: str,
        monitor_id: str,
        body: PublicApiUpdateColumnMetricMonitorRequestDto | PublicApiUpdateColumnMetricMonitorRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateColumnMetricMonitorResponse:
        """This endpoint allows you to update an existing column metric monitor for a specific dataset in your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        update column metric monitors. Soda Cloud Admins can update column metric monitors for all datasets. **See
        Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
                dataset_id, monitor_id, body, request_options=request_options
            ),
        )

    def post_api_v1_datasets_dataset_id_custom_sql_monitors(
        self,
        dataset_id: str,
        body: PublicApiCreateCustomSqlMonitorRequestDto | PublicApiCreateCustomSqlMonitorRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiCreateCustomSqlMonitorResponse:
        """This endpoint allows you to create a new custom SQL monitor for a specific dataset in your organization's
        Soda Cloud account.

        ## Authorization

        Only users with **Manage contracts** permission can create custom SQL monitors. Soda Cloud Admins can create
        custom SQL monitors for all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_datasets_dataset_id_custom_sql_monitors(
                dataset_id, body, request_options=request_options
            ),
        )

    def post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
        self,
        dataset_id: str,
        monitor_id: str,
        body: PublicApiUpdateCustomSqlMonitorRequestDto | PublicApiUpdateCustomSqlMonitorRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateCustomSqlMonitorResponse:
        """This endpoint allows you to update an existing custom SQL monitor for a specific dataset in your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage contracts** permission can update custom SQL monitors. Soda Cloud Admins can update
        custom SQL monitors for all datasets. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
                dataset_id, monitor_id, body, request_options=request_options
            ),
        )

    def post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection(
        self, dataset_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """This endpoint triggers a historical metric collection scan for a specific dataset in your organization's Soda
        Cloud account.

        The dataset must have metric monitoring enabled and a historical collection scan definition configured.

        The response includes the scan ID and a Location header pointing to the scan status endpoint.

        ## Authorization

        Only users with **Manage contracts** permission can run historical metric collection. Soda Cloud Admins have
        access to run historical metric collection for all datasets. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection(
                dataset_id, request_options=request_options
            ),
        )

    def post_api_v1_datasets_dataset_id_responsibilities(
        self,
        dataset_id: str,
        body: PublicApiUpdateDatasetResponsibilitiesRequestDto | PublicApiUpdateDatasetResponsibilitiesRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This endpoint enables you to update the user and user groups permissions and their associated roles for a
        dataset in your organization's Soda Cloud account.

        **Note**: This API fully replaces the existing responsibilities. The entire list of responsibilities must be
        provided in the request, including both new and existing entries, as any omissions will result in their removal.

        ## Authorization

        Only users with **Manage dataset responsibilities** permission can update dataset responsibilities. Soda Cloud
        Admins have permission to update all datasets responsibilities.**See Manage dataset roles for more
        information.**The Response of this call, when successful, is ``201`` and contains header ``Location`` which
        identify the URL where the responsibilities will eventually become available.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_datasets_dataset_id_responsibilities(
                dataset_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DatasetsWithRawResponse:
        return self._with_raw_response


class AsyncDatasets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDatasetsWithRawResponse(client, server, auth)

    async def delete_api_v1_datasets_roles_role_id(
        self, role_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiDeleteDatasetResponse:
        """This endpoint allows you to delete a custom dataset role from your organization's Soda Cloud account. Dataset
        roles define a named set of permissions that control what actions users can perform on individual datasets, such
        as managing checks, viewing profiling data, configuring the dataset, or managing incidents.

        Deletion is performed asynchronously and may take some time to complete.

        Deletion will fail if the role is still assigned to any dataset permissions or used in responsibility settings.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            role_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_datasets_roles_role_id(role_id, request_options=request_options)
        )

    async def delete_api_v1_datasets_dataset_id(
        self, dataset_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiDeleteDatasetResponse:
        """This endpoint enables you to delete an existing dataset in your organization's Soda Cloud account.

        Deletion is not immediate and can take some time to complete, depending on the size of your dataset. You can
        check the status of the deletion by calling the **Get dataset** endpoint.

        ## Authorization

        Only users with **Delete dataset** permission can delete a dataset. Soda Cloud Admins have permission to delete
        any dataset.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_datasets_dataset_id(dataset_id, request_options=request_options)
        )

    async def delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
        self, dataset_id: str, monitor_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiDeleteDatasetResponse:
        """This endpoint allows you to delete a column metric monitor for a specific dataset in your organization's Soda
        Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        delete column metric monitors. Soda Cloud Admins can delete column metric monitors for all datasets. **See
        Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
                dataset_id, monitor_id, request_options=request_options
            ),
        )

    async def delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
        self, dataset_id: str, monitor_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiDeleteDatasetResponse:
        """This endpoint allows you to delete a custom SQL monitor for a specific dataset in your organization's Soda
        Cloud account.

        ## Authorization

        Only users with **Manage contracts** permission can delete custom SQL monitors. Soda Cloud Admins can delete
        custom SQL monitors for all datasets. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
                dataset_id, monitor_id, request_options=request_options
            ),
        )

    async def get_api_v1_datasets(
        self,
        *,
        datasource_name: str | None = None,
        from_: RFC3339DateTime | None = None,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiDatasetsResponse:
        """This endpoint enables you to gather information about the datasets that in exist in your organization's Soda
        Cloud account, including information about the Soda Cloud resources with which it is associated, such as data
        source, incidents, attributes and health status.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``from``: Optionally, use this parameter to collect only the information for datasets that have been updated
            after a particular point in time. Supply an ISO8601 timestamp value. Example: ``2023-12-31T10:15:30+01:00``

        - ``datasourceName``: Optionally, use this parameter to collect only the information for datasets associated
            with a specific datasource.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the dataset name.

        If not specified, the query gathers information for all datasets in the account and sorts the results first by
        dataset name and then by datasource name in ascending order.

        ## Authorization

        Soda only returns the datasets to which the user has **View dataset** permissions. Soda Cloud Admins have access
        to all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        30 requests/60 seconds

        Args:
            datasource_name: Value sent with the request.
            from_: Value sent with the request.
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_datasets(
                datasource_name=datasource_name,
                from_=from_,
                page=page,
                search=search,
                size=size,
                request_options=request_options,
            ),
        )

    async def get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name(
        self, dataset_qualified_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DatasetsContentDto:
        """This endpoint enables you to retrieve a single dataset by its qualified name (contractIdentifier) from your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **View dataset** permission can view a dataset. Soda Cloud Admins have permission to view any
        dataset. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_qualified_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name(
                dataset_qualified_name, request_options=request_options
            ),
        )

    async def get_api_v1_datasets_roles(
        self,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiDatasetRolesResponse:
        """This endpoint enables you to gather information about the dataset roles available in your organization's Soda
        Cloud account. Use the dataset roles to manage access to individual datasets.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 100, inclusive. The default value is 100.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
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
            await self._with_raw_response.get_api_v1_datasets_roles(
                page=page, size=size, request_options=request_options
            ),
        )

    async def get_api_v1_datasets_dataset_id(
        self, dataset_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DatasetsContentDto:
        """This endpoint enables you to retrieve a single dataset by its ID from your organization's Soda Cloud account.

        ## Authorization

        Only users with **View dataset** permission can view a dataset. Soda Cloud Admins have permission to view any
        dataset. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_datasets_dataset_id(dataset_id, request_options=request_options)
        )

    async def get_api_v1_datasets_dataset_id_columns(
        self,
        dataset_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiListDatasetColumnsResponse:
        """Returns the active columns of a dataset, each with the attribute values currently assigned to it.

        Columns are ordered by name ascending. Columns with no assigned attribute values are returned with an empty
        ``attributes`` map.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply a non-negative integer. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have dataset role permission VIEW to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
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
            await self._with_raw_response.get_api_v1_datasets_dataset_id_columns(
                dataset_id, page=page, size=size, request_options=request_options
            ),
        )

    async def get_api_v1_datasets_dataset_id_compute_warehouse(
        self, dataset_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DatasetComputeWarehouseConfigurationDto:
        """This endpoint retrieves the compute warehouse configuration for a specific dataset in your organization's
        Soda Cloud account. When the compute warehouse configuration is enabled, the warehouse in the configuration will
        be used for compute-heavy tasks like data contract execution, metric monitoring, and profiling.

        ## Authorization

        Only users with **View dataset** permission can retrieve dataset compute warehouse configuration. Soda Cloud
        Admins have permission to view all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_datasets_dataset_id_compute_warehouse(
                dataset_id, request_options=request_options
            ),
        )

    async def get_api_v1_datasets_dataset_id_diagnostics_warehouse(
        self, dataset_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiDatasetDiagnosticsWarehouseResponse:
        """This endpoint allows you to retrieve detailed diagnostics warehouse information for a specific dataset in
        your organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely
        forwards it to the customer's warehouse for storage and analysis.

        ## Authorization

        Only users with **View dataset** permission can view dataset diagnostics warehouse. Soda Cloud Admins have
        access to diagnostics warehouse information for all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_datasets_dataset_id_diagnostics_warehouse(
                dataset_id, request_options=request_options
            ),
        )

    async def get_api_v1_datasets_dataset_id_metric_monitoring(
        self, dataset_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiDatasetMetricMonitoringResponse:
        """This endpoint allows you to retrieve detailed metric monitoring configuration information for a specific
        dataset in your organization's Soda Cloud account.

        ## Authorization

        Only users with **View dataset** permission can view dataset metric monitoring configuration. Soda Cloud Admins
        have access to metric monitoring configuration information for all datasets.**See Manage dataset roles for more
        information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_datasets_dataset_id_metric_monitoring(
                dataset_id, request_options=request_options
            ),
        )

    async def get_api_v1_datasets_dataset_id_profiling(
        self, dataset_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiDatasetProfilingResponse:
        """This endpoint allows you to retrieve detailed profiling information for a specific dataset in your
        organization's Soda Cloud account. Profiling information provides insights into the dataset's structure,
        statistical summaries, and data characteristics.

        ## Authorization

        Only users with **Access dataset profiling and sampling** permission can view dataset profiling. Soda Cloud
        Admins have access to profiling information for all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_datasets_dataset_id_profiling(
                dataset_id, request_options=request_options
            ),
        )

    async def get_api_v1_datasets_dataset_id_responsibilities(
        self,
        dataset_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiDatasetResponsibilitiesResponse:
        """This endpoint enables you to gather information about the user and user groups permissions assigned to a
        dataset, and their associated roles in your organization's Soda Cloud account.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 100, inclusive. The default value is 100.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authorization

        Soda only returns the dataset responsibilities to which the user has **View dataset** permissions. Soda Cloud
        Admins have access to all dataset responsibilities.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
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
            await self._with_raw_response.get_api_v1_datasets_dataset_id_responsibilities(
                dataset_id, page=page, size=size, request_options=request_options
            ),
        )

    async def post_api_v1_datasets_roles(
        self,
        body: PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateDatasetRoleResponse:
        """This endpoint allows you to create a new custom dataset role in your organization's Soda Cloud account.
        Dataset roles define a named set of permissions that control what actions users can perform on individual
        datasets, such as managing checks, viewing profiling data, configuring the dataset, or managing incidents.

        Once created, the role can be assigned to users or user groups via the dataset responsibilities endpoints.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_datasets_roles(body, request_options=request_options))

    async def post_api_v1_datasets_roles_role_id(
        self,
        role_id: str,
        body: PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateDatasetRoleResponse:
        """This endpoint allows you to update the name or permissions of an existing custom dataset role. Dataset roles
        define a named set of permissions that control what actions users can perform on individual datasets, such as
        managing checks, viewing profiling data, configuring the dataset, or managing incidents.

        Changes apply immediately to all users and user groups assigned this role.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            role_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_datasets_roles_role_id(
                role_id, body, request_options=request_options
            ),
        )

    async def post_api_v1_datasets_dataset_id(
        self,
        dataset_id: str,
        body: PublicApiUpdateDatasetDto | PublicApiUpdateDatasetDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DatasetsContentDto:
        """This endpoint enables you to update an existing dataset properties in your organization's Soda Cloud account.

        ## Authorization

        Only users with **Configure dataset** permission can update dataset properties. Soda Cloud Admins have
        permission to update all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_datasets_dataset_id(
                dataset_id, body, request_options=request_options
            ),
        )

    async def post_api_v1_datasets_dataset_id_column_attributes(
        self,
        dataset_id: str,
        body: PublicApiSetColumnAttributesRequestDto | PublicApiSetColumnAttributesRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Upsert attribute values on the columns of a dataset.

        The request body maps a column name to a map of attribute-name to value. Setting one attribute on a column does
        not affect other attribute values on the same column. If any column or attribute name is unknown, or any value
        has the wrong type, the entire request is rejected and no changes are persisted.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have dataset role permission CONFIGURE_DATASET to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_datasets_dataset_id_column_attributes(
                dataset_id, body, request_options=request_options
            ),
        )

    async def post_api_v1_datasets_dataset_id_column_metric_monitors(
        self,
        dataset_id: str,
        body: PublicApiCreateColumnMetricMonitorRequestDto | PublicApiCreateColumnMetricMonitorRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateColumnMetricMonitorResponse:
        """This endpoint allows you to create a new column metric monitor for a specific dataset in your organization's
        Soda Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        create column metric monitors. Soda Cloud Admins can create column metric monitors for all datasets.**See Manage
        dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_datasets_dataset_id_column_metric_monitors(
                dataset_id, body, request_options=request_options
            ),
        )

    async def post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
        self,
        dataset_id: str,
        monitor_id: str,
        body: PublicApiUpdateColumnMetricMonitorRequestDto | PublicApiUpdateColumnMetricMonitorRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateColumnMetricMonitorResponse:
        """This endpoint allows you to update an existing column metric monitor for a specific dataset in your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        update column metric monitors. Soda Cloud Admins can update column metric monitors for all datasets. **See
        Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
                dataset_id, monitor_id, body, request_options=request_options
            ),
        )

    async def post_api_v1_datasets_dataset_id_custom_sql_monitors(
        self,
        dataset_id: str,
        body: PublicApiCreateCustomSqlMonitorRequestDto | PublicApiCreateCustomSqlMonitorRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiCreateCustomSqlMonitorResponse:
        """This endpoint allows you to create a new custom SQL monitor for a specific dataset in your organization's
        Soda Cloud account.

        ## Authorization

        Only users with **Manage contracts** permission can create custom SQL monitors. Soda Cloud Admins can create
        custom SQL monitors for all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_datasets_dataset_id_custom_sql_monitors(
                dataset_id, body, request_options=request_options
            ),
        )

    async def post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
        self,
        dataset_id: str,
        monitor_id: str,
        body: PublicApiUpdateCustomSqlMonitorRequestDto | PublicApiUpdateCustomSqlMonitorRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateCustomSqlMonitorResponse:
        """This endpoint allows you to update an existing custom SQL monitor for a specific dataset in your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage contracts** permission can update custom SQL monitors. Soda Cloud Admins can update
        custom SQL monitors for all datasets. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
                dataset_id, monitor_id, body, request_options=request_options
            ),
        )

    async def post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection(
        self, dataset_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """This endpoint triggers a historical metric collection scan for a specific dataset in your organization's Soda
        Cloud account.

        The dataset must have metric monitoring enabled and a historical collection scan definition configured.

        The response includes the scan ID and a Location header pointing to the scan status endpoint.

        ## Authorization

        Only users with **Manage contracts** permission can run historical metric collection. Soda Cloud Admins have
        access to run historical metric collection for all datasets. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection(
                dataset_id, request_options=request_options
            ),
        )

    async def post_api_v1_datasets_dataset_id_responsibilities(
        self,
        dataset_id: str,
        body: PublicApiUpdateDatasetResponsibilitiesRequestDto | PublicApiUpdateDatasetResponsibilitiesRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This endpoint enables you to update the user and user groups permissions and their associated roles for a
        dataset in your organization's Soda Cloud account.

        **Note**: This API fully replaces the existing responsibilities. The entire list of responsibilities must be
        provided in the request, including both new and existing entries, as any omissions will result in their removal.

        ## Authorization

        Only users with **Manage dataset responsibilities** permission can update dataset responsibilities. Soda Cloud
        Admins have permission to update all datasets responsibilities.**See Manage dataset roles for more
        information.**The Response of this call, when successful, is ``201`` and contains header ``Location`` which
        identify the URL where the responsibilities will eventually become available.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_datasets_dataset_id_responsibilities(
                dataset_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDatasetsWithRawResponse:
        return self._with_raw_response


class DatasetsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_api_v1_datasets_roles_role_id(
        self, role_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsRolesRoleIdErrorBody]:
        """This endpoint allows you to delete a custom dataset role from your organization's Soda Cloud account. Dataset
        roles define a named set of permissions that control what actions users can perform on individual datasets, such
        as managing checks, viewing profiling data, configuring the dataset, or managing incidents.

        Deletion is performed asynchronously and may take some time to complete.

        Deletion will fail if the role is still assigned to any dataset permissions or used in responsibility settings.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            role_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/datasets/roles/{roleId}"),
            path_params=[param[str]("roleId", role_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDeleteDatasetResponse],
            error_mapper=delete_api_v1_datasets_roles_role_id_error_mapper,
            request_options=request_options,
        )

    def delete_api_v1_datasets_dataset_id(
        self, dataset_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsDatasetIdErrorBody]:
        """This endpoint enables you to delete an existing dataset in your organization's Soda Cloud account.

        Deletion is not immediate and can take some time to complete, depending on the size of your dataset. You can
        check the status of the deletion by calling the **Get dataset** endpoint.

        ## Authorization

        Only users with **Delete dataset** permission can delete a dataset. Soda Cloud Admins have permission to delete
        any dataset.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/datasets/{datasetId}"),
            path_params=[param[str]("datasetId", dataset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDeleteDatasetResponse],
            error_mapper=delete_api_v1_datasets_dataset_id_error_mapper,
            request_options=request_options,
        )

    def delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
        self, dataset_id: str, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody]:
        """This endpoint allows you to delete a column metric monitor for a specific dataset in your organization's Soda
        Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        delete column metric monitors. Soda Cloud Admins can delete column metric monitors for all datasets. **See
        Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/columnMetricMonitors/{monitorId}"),
            path_params=[param[str]("datasetId", dataset_id), param[str]("monitorId", monitor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDeleteDatasetResponse],
            error_mapper=delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error_mapper,
            request_options=request_options,
        )

    def delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
        self, dataset_id: str, monitor_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody]:
        """This endpoint allows you to delete a custom SQL monitor for a specific dataset in your organization's Soda
        Cloud account.

        ## Authorization

        Only users with **Manage contracts** permission can delete custom SQL monitors. Soda Cloud Admins can delete
        custom SQL monitors for all datasets. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/customSqlMonitors/{monitorId}"),
            path_params=[param[str]("datasetId", dataset_id), param[str]("monitorId", monitor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDeleteDatasetResponse],
            error_mapper=delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasets(
        self,
        *,
        datasource_name: str | None = None,
        from_: RFC3339DateTime | None = None,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiDatasetsResponse, GetApiV1DatasetsErrorBody]:
        """This endpoint enables you to gather information about the datasets that in exist in your organization's Soda
        Cloud account, including information about the Soda Cloud resources with which it is associated, such as data
        source, incidents, attributes and health status.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``from``: Optionally, use this parameter to collect only the information for datasets that have been updated
            after a particular point in time. Supply an ISO8601 timestamp value. Example: ``2023-12-31T10:15:30+01:00``

        - ``datasourceName``: Optionally, use this parameter to collect only the information for datasets associated
            with a specific datasource.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the dataset name.

        If not specified, the query gathers information for all datasets in the account and sorts the results first by
        dataset name and then by datasource name in ascending order.

        ## Authorization

        Soda only returns the datasets to which the user has **View dataset** permissions. Soda Cloud Admins have access
        to all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        30 requests/60 seconds

        Args:
            datasource_name: Value sent with the request.
            from_: Value sent with the request.
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets"),
            query_params=[
                param[str | None]("datasourceName", datasource_name),
                param[RFC3339DateTime | None]("from", from_),
                param[int | None]("page", page),
                param[str | None]("search", search),
                param[int | None]("size", size),
            ],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDatasetsResponse],
            error_mapper=get_api_v1_datasets_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name(
        self, dataset_qualified_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DatasetsContentDto, GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameErrorBody]:
        """This endpoint enables you to retrieve a single dataset by its qualified name (contractIdentifier) from your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **View dataset** permission can view a dataset. Soda Cloud Admins have permission to view any
        dataset. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_qualified_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/byDatasetQualifiedName/{datasetQualifiedName}"),
            path_params=[param[str]("datasetQualifiedName", dataset_qualified_name)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[DatasetsContentDto],
            error_mapper=get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasets_roles(
        self, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDatasetRolesResponse, GetApiV1DatasetsRolesErrorBody]:
        """This endpoint enables you to gather information about the dataset roles available in your organization's Soda
        Cloud account. Use the dataset roles to manage access to individual datasets.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 100, inclusive. The default value is 100.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/roles"),
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDatasetRolesResponse],
            error_mapper=get_api_v1_datasets_roles_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasets_dataset_id(
        self, dataset_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DatasetsContentDto, GetApiV1DatasetsDatasetIdErrorBody]:
        """This endpoint enables you to retrieve a single dataset by its ID from your organization's Soda Cloud account.

        ## Authorization

        Only users with **View dataset** permission can view a dataset. Soda Cloud Admins have permission to view any
        dataset. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/{datasetId}"),
            path_params=[param[str]("datasetId", dataset_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[DatasetsContentDto],
            error_mapper=get_api_v1_datasets_dataset_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasets_dataset_id_columns(
        self,
        dataset_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListDatasetColumnsResponse, GetApiV1DatasetsDatasetIdColumnsErrorBody]:
        """Returns the active columns of a dataset, each with the attribute values currently assigned to it.

        Columns are ordered by name ascending. Columns with no assigned attribute values are returned with an empty
        ``attributes`` map.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply a non-negative integer. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have dataset role permission VIEW to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/columns"),
            path_params=[param[str]("datasetId", dataset_id)],
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiListDatasetColumnsResponse],
            error_mapper=get_api_v1_datasets_dataset_id_columns_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasets_dataset_id_compute_warehouse(
        self, dataset_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DatasetComputeWarehouseConfigurationDto, GetApiV1DatasetsDatasetIdComputeWarehouseErrorBody]:
        """This endpoint retrieves the compute warehouse configuration for a specific dataset in your organization's
        Soda Cloud account. When the compute warehouse configuration is enabled, the warehouse in the configuration will
        be used for compute-heavy tasks like data contract execution, metric monitoring, and profiling.

        ## Authorization

        Only users with **View dataset** permission can retrieve dataset compute warehouse configuration. Soda Cloud
        Admins have permission to view all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/computeWarehouse"),
            path_params=[param[str]("datasetId", dataset_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[DatasetComputeWarehouseConfigurationDto],
            error_mapper=get_api_v1_datasets_dataset_id_compute_warehouse_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasets_dataset_id_diagnostics_warehouse(
        self, dataset_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        PublicApiDatasetDiagnosticsWarehouseResponse, GetApiV1DatasetsDatasetIdDiagnosticsWarehouseErrorBody
    ]:
        """This endpoint allows you to retrieve detailed diagnostics warehouse information for a specific dataset in
        your organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely
        forwards it to the customer's warehouse for storage and analysis.

        ## Authorization

        Only users with **View dataset** permission can view dataset diagnostics warehouse. Soda Cloud Admins have
        access to diagnostics warehouse information for all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/diagnosticsWarehouse"),
            path_params=[param[str]("datasetId", dataset_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDatasetDiagnosticsWarehouseResponse],
            error_mapper=get_api_v1_datasets_dataset_id_diagnostics_warehouse_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasets_dataset_id_metric_monitoring(
        self, dataset_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDatasetMetricMonitoringResponse, GetApiV1DatasetsDatasetIdMetricMonitoringErrorBody]:
        """This endpoint allows you to retrieve detailed metric monitoring configuration information for a specific
        dataset in your organization's Soda Cloud account.

        ## Authorization

        Only users with **View dataset** permission can view dataset metric monitoring configuration. Soda Cloud Admins
        have access to metric monitoring configuration information for all datasets.**See Manage dataset roles for more
        information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/metricMonitoring"),
            path_params=[param[str]("datasetId", dataset_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDatasetMetricMonitoringResponse],
            error_mapper=get_api_v1_datasets_dataset_id_metric_monitoring_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasets_dataset_id_profiling(
        self, dataset_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDatasetProfilingResponse, GetApiV1DatasetsDatasetIdProfilingErrorBody]:
        """This endpoint allows you to retrieve detailed profiling information for a specific dataset in your
        organization's Soda Cloud account. Profiling information provides insights into the dataset's structure,
        statistical summaries, and data characteristics.

        ## Authorization

        Only users with **Access dataset profiling and sampling** permission can view dataset profiling. Soda Cloud
        Admins have access to profiling information for all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/profiling"),
            path_params=[param[str]("datasetId", dataset_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDatasetProfilingResponse],
            error_mapper=get_api_v1_datasets_dataset_id_profiling_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasets_dataset_id_responsibilities(
        self,
        dataset_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiDatasetResponsibilitiesResponse, GetApiV1DatasetsDatasetIdResponsibilitiesErrorBody]:
        """This endpoint enables you to gather information about the user and user groups permissions assigned to a
        dataset, and their associated roles in your organization's Soda Cloud account.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 100, inclusive. The default value is 100.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authorization

        Soda only returns the dataset responsibilities to which the user has **View dataset** permissions. Soda Cloud
        Admins have access to all dataset responsibilities.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/responsibilities"),
            path_params=[param[str]("datasetId", dataset_id)],
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDatasetResponsibilitiesResponse],
            error_mapper=get_api_v1_datasets_dataset_id_responsibilities_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasets_roles(
        self,
        body: PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateDatasetRoleResponse, PostApiV1DatasetsRolesErrorBody]:
        """This endpoint allows you to create a new custom dataset role in your organization's Soda Cloud account.
        Dataset roles define a named set of permissions that control what actions users can perform on individual
        datasets, such as managing checks, viewing profiling data, configuring the dataset, or managing incidents.

        Once created, the role can be assigned to users or user groups via the dataset responsibilities endpoints.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/roles"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiUpdateDatasetRoleResponse],
            error_mapper=post_api_v1_datasets_roles_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasets_roles_role_id(
        self,
        role_id: str,
        body: PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateDatasetRoleResponse, PostApiV1DatasetsRolesRoleIdErrorBody]:
        """This endpoint allows you to update the name or permissions of an existing custom dataset role. Dataset roles
        define a named set of permissions that control what actions users can perform on individual datasets, such as
        managing checks, viewing profiling data, configuring the dataset, or managing incidents.

        Changes apply immediately to all users and user groups assigned this role.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            role_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/roles/{roleId}"),
            path_params=[param[str]("roleId", role_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiUpdateDatasetRoleResponse],
            error_mapper=post_api_v1_datasets_roles_role_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasets_dataset_id(
        self,
        dataset_id: str,
        body: PublicApiUpdateDatasetDto | PublicApiUpdateDatasetDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DatasetsContentDto, PostApiV1DatasetsDatasetIdErrorBody]:
        """This endpoint enables you to update an existing dataset properties in your organization's Soda Cloud account.

        ## Authorization

        Only users with **Configure dataset** permission can update dataset properties. Soda Cloud Admins have
        permission to update all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/{datasetId}"),
            path_params=[param[str]("datasetId", dataset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiUpdateDatasetDto | PublicApiUpdateDatasetDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[DatasetsContentDto],
            error_mapper=post_api_v1_datasets_dataset_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasets_dataset_id_column_attributes(
        self,
        dataset_id: str,
        body: PublicApiSetColumnAttributesRequestDto | PublicApiSetColumnAttributesRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1DatasetsDatasetIdColumnAttributesErrorBody]:
        """Upsert attribute values on the columns of a dataset.

        The request body maps a column name to a map of attribute-name to value. Setting one attribute on a column does
        not affect other attribute values on the same column. If any column or attribute name is unknown, or any value
        has the wrong type, the entire request is rejected and no changes are persisted.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have dataset role permission CONFIGURE_DATASET to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/columnAttributes"),
            path_params=[param[str]("datasetId", dataset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiSetColumnAttributesRequestDto | PublicApiSetColumnAttributesRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=empty_response,
            error_mapper=post_api_v1_datasets_dataset_id_column_attributes_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasets_dataset_id_column_metric_monitors(
        self,
        dataset_id: str,
        body: PublicApiCreateColumnMetricMonitorRequestDto | PublicApiCreateColumnMetricMonitorRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateColumnMetricMonitorResponse, PostApiV1DatasetsDatasetIdColumnMetricMonitorsErrorBody]:
        """This endpoint allows you to create a new column metric monitor for a specific dataset in your organization's
        Soda Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        create column metric monitors. Soda Cloud Admins can create column metric monitors for all datasets.**See Manage
        dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/columnMetricMonitors"),
            path_params=[param[str]("datasetId", dataset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicApiCreateColumnMetricMonitorRequestDto | PublicApiCreateColumnMetricMonitorRequestDtoDict
            ](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiUpdateColumnMetricMonitorResponse],
            error_mapper=post_api_v1_datasets_dataset_id_column_metric_monitors_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
        self,
        dataset_id: str,
        monitor_id: str,
        body: PublicApiUpdateColumnMetricMonitorRequestDto | PublicApiUpdateColumnMetricMonitorRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PublicApiUpdateColumnMetricMonitorResponse, PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody
    ]:
        """This endpoint allows you to update an existing column metric monitor for a specific dataset in your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        update column metric monitors. Soda Cloud Admins can update column metric monitors for all datasets. **See
        Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/columnMetricMonitors/{monitorId}"),
            path_params=[param[str]("datasetId", dataset_id), param[str]("monitorId", monitor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicApiUpdateColumnMetricMonitorRequestDto | PublicApiUpdateColumnMetricMonitorRequestDtoDict
            ](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiUpdateColumnMetricMonitorResponse],
            error_mapper=post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasets_dataset_id_custom_sql_monitors(
        self,
        dataset_id: str,
        body: PublicApiCreateCustomSqlMonitorRequestDto | PublicApiCreateCustomSqlMonitorRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiCreateCustomSqlMonitorResponse, PostApiV1DatasetsDatasetIdCustomSqlMonitorsErrorBody]:
        """This endpoint allows you to create a new custom SQL monitor for a specific dataset in your organization's
        Soda Cloud account.

        ## Authorization

        Only users with **Manage contracts** permission can create custom SQL monitors. Soda Cloud Admins can create
        custom SQL monitors for all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/customSqlMonitors"),
            path_params=[param[str]("datasetId", dataset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateCustomSqlMonitorRequestDto | PublicApiCreateCustomSqlMonitorRequestDtoDict](
                body
            ),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiCreateCustomSqlMonitorResponse],
            error_mapper=post_api_v1_datasets_dataset_id_custom_sql_monitors_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
        self,
        dataset_id: str,
        monitor_id: str,
        body: PublicApiUpdateCustomSqlMonitorRequestDto | PublicApiUpdateCustomSqlMonitorRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PublicApiUpdateCustomSqlMonitorResponse, PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody
    ]:
        """This endpoint allows you to update an existing custom SQL monitor for a specific dataset in your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage contracts** permission can update custom SQL monitors. Soda Cloud Admins can update
        custom SQL monitors for all datasets. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/customSqlMonitors/{monitorId}"),
            path_params=[param[str]("datasetId", dataset_id), param[str]("monitorId", monitor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiUpdateCustomSqlMonitorRequestDto | PublicApiUpdateCustomSqlMonitorRequestDtoDict](
                body
            ),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiUpdateCustomSqlMonitorResponse],
            error_mapper=post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection(
        self, dataset_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody]:
        """This endpoint triggers a historical metric collection scan for a specific dataset in your organization's Soda
        Cloud account.

        The dataset must have metric monitoring enabled and a historical collection scan definition configured.

        The response includes the scan ID and a Location header pointing to the scan status endpoint.

        ## Authorization

        Only users with **Manage contracts** permission can run historical metric collection. Soda Cloud Admins have
        access to run historical metric collection for all datasets. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/api/v1/datasets/{datasetId}/metricMonitoring/historicalMetricCollection"
            ),
            path_params=[param[str]("datasetId", dataset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=empty_response,
            error_mapper=post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasets_dataset_id_responsibilities(
        self,
        dataset_id: str,
        body: PublicApiUpdateDatasetResponsibilitiesRequestDto | PublicApiUpdateDatasetResponsibilitiesRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1DatasetsDatasetIdResponsibilitiesErrorBody]:
        """This endpoint enables you to update the user and user groups permissions and their associated roles for a
        dataset in your organization's Soda Cloud account.

        **Note**: This API fully replaces the existing responsibilities. The entire list of responsibilities must be
        provided in the request, including both new and existing entries, as any omissions will result in their removal.

        ## Authorization

        Only users with **Manage dataset responsibilities** permission can update dataset responsibilities. Soda Cloud
        Admins have permission to update all datasets responsibilities.**See Manage dataset roles for more
        information.**The Response of this call, when successful, is ``201`` and contains header ``Location`` which
        identify the URL where the responsibilities will eventually become available.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/responsibilities"),
            path_params=[param[str]("datasetId", dataset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicApiUpdateDatasetResponsibilitiesRequestDto | PublicApiUpdateDatasetResponsibilitiesRequestDtoDict
            ](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=empty_response,
            error_mapper=post_api_v1_datasets_dataset_id_responsibilities_error_mapper,
            request_options=request_options,
        )


class AsyncDatasetsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_api_v1_datasets_roles_role_id(
        self, role_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsRolesRoleIdErrorBody]:
        """This endpoint allows you to delete a custom dataset role from your organization's Soda Cloud account. Dataset
        roles define a named set of permissions that control what actions users can perform on individual datasets, such
        as managing checks, viewing profiling data, configuring the dataset, or managing incidents.

        Deletion is performed asynchronously and may take some time to complete.

        Deletion will fail if the role is still assigned to any dataset permissions or used in responsibility settings.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            role_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/datasets/roles/{roleId}"),
            path_params=[param[str]("roleId", role_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDeleteDatasetResponse],
            error_mapper=delete_api_v1_datasets_roles_role_id_error_mapper,
            request_options=request_options,
        )

    async def delete_api_v1_datasets_dataset_id(
        self, dataset_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsDatasetIdErrorBody]:
        """This endpoint enables you to delete an existing dataset in your organization's Soda Cloud account.

        Deletion is not immediate and can take some time to complete, depending on the size of your dataset. You can
        check the status of the deletion by calling the **Get dataset** endpoint.

        ## Authorization

        Only users with **Delete dataset** permission can delete a dataset. Soda Cloud Admins have permission to delete
        any dataset.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/datasets/{datasetId}"),
            path_params=[param[str]("datasetId", dataset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDeleteDatasetResponse],
            error_mapper=delete_api_v1_datasets_dataset_id_error_mapper,
            request_options=request_options,
        )

    async def delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
        self, dataset_id: str, monitor_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody]:
        """This endpoint allows you to delete a column metric monitor for a specific dataset in your organization's Soda
        Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        delete column metric monitors. Soda Cloud Admins can delete column metric monitors for all datasets. **See
        Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/columnMetricMonitors/{monitorId}"),
            path_params=[param[str]("datasetId", dataset_id), param[str]("monitorId", monitor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDeleteDatasetResponse],
            error_mapper=delete_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error_mapper,
            request_options=request_options,
        )

    async def delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
        self, dataset_id: str, monitor_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteDatasetResponse, DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody]:
        """This endpoint allows you to delete a custom SQL monitor for a specific dataset in your organization's Soda
        Cloud account.

        ## Authorization

        Only users with **Manage contracts** permission can delete custom SQL monitors. Soda Cloud Admins can delete
        custom SQL monitors for all datasets. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/customSqlMonitors/{monitorId}"),
            path_params=[param[str]("datasetId", dataset_id), param[str]("monitorId", monitor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDeleteDatasetResponse],
            error_mapper=delete_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasets(
        self,
        *,
        datasource_name: str | None = None,
        from_: RFC3339DateTime | None = None,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiDatasetsResponse, GetApiV1DatasetsErrorBody]:
        """This endpoint enables you to gather information about the datasets that in exist in your organization's Soda
        Cloud account, including information about the Soda Cloud resources with which it is associated, such as data
        source, incidents, attributes and health status.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``from``: Optionally, use this parameter to collect only the information for datasets that have been updated
            after a particular point in time. Supply an ISO8601 timestamp value. Example: ``2023-12-31T10:15:30+01:00``

        - ``datasourceName``: Optionally, use this parameter to collect only the information for datasets associated
            with a specific datasource.

        - ``search``: Optionally, use this parameter to perform a fuzzy search on the dataset name.

        If not specified, the query gathers information for all datasets in the account and sorts the results first by
        dataset name and then by datasource name in ascending order.

        ## Authorization

        Soda only returns the datasets to which the user has **View dataset** permissions. Soda Cloud Admins have access
        to all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        30 requests/60 seconds

        Args:
            datasource_name: Value sent with the request.
            from_: Value sent with the request.
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets"),
            query_params=[
                param[str | None]("datasourceName", datasource_name),
                param[RFC3339DateTime | None]("from", from_),
                param[int | None]("page", page),
                param[str | None]("search", search),
                param[int | None]("size", size),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDatasetsResponse],
            error_mapper=get_api_v1_datasets_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name(
        self, dataset_qualified_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DatasetsContentDto, GetApiV1DatasetsByDatasetQualifiedNameDatasetQualifiedNameErrorBody]:
        """This endpoint enables you to retrieve a single dataset by its qualified name (contractIdentifier) from your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **View dataset** permission can view a dataset. Soda Cloud Admins have permission to view any
        dataset. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_qualified_name: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/byDatasetQualifiedName/{datasetQualifiedName}"),
            path_params=[param[str]("datasetQualifiedName", dataset_qualified_name)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[DatasetsContentDto],
            error_mapper=get_api_v1_datasets_by_dataset_qualified_name_dataset_qualified_name_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasets_roles(
        self,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiDatasetRolesResponse, GetApiV1DatasetsRolesErrorBody]:
        """This endpoint enables you to gather information about the dataset roles available in your organization's Soda
        Cloud account. Use the dataset roles to manage access to individual datasets.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 100, inclusive. The default value is 100.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Any Soda Cloud user in your organization may execute this query.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/roles"),
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDatasetRolesResponse],
            error_mapper=get_api_v1_datasets_roles_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasets_dataset_id(
        self, dataset_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DatasetsContentDto, GetApiV1DatasetsDatasetIdErrorBody]:
        """This endpoint enables you to retrieve a single dataset by its ID from your organization's Soda Cloud account.

        ## Authorization

        Only users with **View dataset** permission can view a dataset. Soda Cloud Admins have permission to view any
        dataset. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/{datasetId}"),
            path_params=[param[str]("datasetId", dataset_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[DatasetsContentDto],
            error_mapper=get_api_v1_datasets_dataset_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasets_dataset_id_columns(
        self,
        dataset_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListDatasetColumnsResponse, GetApiV1DatasetsDatasetIdColumnsErrorBody]:
        """Returns the active columns of a dataset, each with the attribute values currently assigned to it.

        Columns are ordered by name ascending. Columns with no assigned attribute values are returned with an empty
        ``attributes`` map.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 1000.

        - ``page``: Supply a non-negative integer. The default value is 0.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have dataset role permission VIEW to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/columns"),
            path_params=[param[str]("datasetId", dataset_id)],
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiListDatasetColumnsResponse],
            error_mapper=get_api_v1_datasets_dataset_id_columns_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasets_dataset_id_compute_warehouse(
        self, dataset_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DatasetComputeWarehouseConfigurationDto, GetApiV1DatasetsDatasetIdComputeWarehouseErrorBody]:
        """This endpoint retrieves the compute warehouse configuration for a specific dataset in your organization's
        Soda Cloud account. When the compute warehouse configuration is enabled, the warehouse in the configuration will
        be used for compute-heavy tasks like data contract execution, metric monitoring, and profiling.

        ## Authorization

        Only users with **View dataset** permission can retrieve dataset compute warehouse configuration. Soda Cloud
        Admins have permission to view all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/computeWarehouse"),
            path_params=[param[str]("datasetId", dataset_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[DatasetComputeWarehouseConfigurationDto],
            error_mapper=get_api_v1_datasets_dataset_id_compute_warehouse_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasets_dataset_id_diagnostics_warehouse(
        self, dataset_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        PublicApiDatasetDiagnosticsWarehouseResponse, GetApiV1DatasetsDatasetIdDiagnosticsWarehouseErrorBody
    ]:
        """This endpoint allows you to retrieve detailed diagnostics warehouse information for a specific dataset in
        your organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely
        forwards it to the customer's warehouse for storage and analysis.

        ## Authorization

        Only users with **View dataset** permission can view dataset diagnostics warehouse. Soda Cloud Admins have
        access to diagnostics warehouse information for all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/diagnosticsWarehouse"),
            path_params=[param[str]("datasetId", dataset_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDatasetDiagnosticsWarehouseResponse],
            error_mapper=get_api_v1_datasets_dataset_id_diagnostics_warehouse_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasets_dataset_id_metric_monitoring(
        self, dataset_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDatasetMetricMonitoringResponse, GetApiV1DatasetsDatasetIdMetricMonitoringErrorBody]:
        """This endpoint allows you to retrieve detailed metric monitoring configuration information for a specific
        dataset in your organization's Soda Cloud account.

        ## Authorization

        Only users with **View dataset** permission can view dataset metric monitoring configuration. Soda Cloud Admins
        have access to metric monitoring configuration information for all datasets.**See Manage dataset roles for more
        information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/metricMonitoring"),
            path_params=[param[str]("datasetId", dataset_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDatasetMetricMonitoringResponse],
            error_mapper=get_api_v1_datasets_dataset_id_metric_monitoring_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasets_dataset_id_profiling(
        self, dataset_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDatasetProfilingResponse, GetApiV1DatasetsDatasetIdProfilingErrorBody]:
        """This endpoint allows you to retrieve detailed profiling information for a specific dataset in your
        organization's Soda Cloud account. Profiling information provides insights into the dataset's structure,
        statistical summaries, and data characteristics.

        ## Authorization

        Only users with **Access dataset profiling and sampling** permission can view dataset profiling. Soda Cloud
        Admins have access to profiling information for all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/profiling"),
            path_params=[param[str]("datasetId", dataset_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDatasetProfilingResponse],
            error_mapper=get_api_v1_datasets_dataset_id_profiling_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasets_dataset_id_responsibilities(
        self,
        dataset_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiDatasetResponsibilitiesResponse, GetApiV1DatasetsDatasetIdResponsibilitiesErrorBody]:
        """This endpoint enables you to gather information about the user and user groups permissions assigned to a
        dataset, and their associated roles in your organization's Soda Cloud account.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 100, inclusive. The default value is 100.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authorization

        Soda only returns the dataset responsibilities to which the user has **View dataset** permissions. Soda Cloud
        Admins have access to all dataset responsibilities.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/responsibilities"),
            path_params=[param[str]("datasetId", dataset_id)],
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDatasetResponsibilitiesResponse],
            error_mapper=get_api_v1_datasets_dataset_id_responsibilities_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasets_roles(
        self,
        body: PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateDatasetRoleResponse, PostApiV1DatasetsRolesErrorBody]:
        """This endpoint allows you to create a new custom dataset role in your organization's Soda Cloud account.
        Dataset roles define a named set of permissions that control what actions users can perform on individual
        datasets, such as managing checks, viewing profiling data, configuring the dataset, or managing incidents.

        Once created, the role can be assigned to users or user groups via the dataset responsibilities endpoints.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/roles"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiUpdateDatasetRoleResponse],
            error_mapper=post_api_v1_datasets_roles_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasets_roles_role_id(
        self,
        role_id: str,
        body: PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateDatasetRoleResponse, PostApiV1DatasetsRolesRoleIdErrorBody]:
        """This endpoint allows you to update the name or permissions of an existing custom dataset role. Dataset roles
        define a named set of permissions that control what actions users can perform on individual datasets, such as
        managing checks, viewing profiling data, configuring the dataset, or managing incidents.

        Changes apply immediately to all users and user groups assigned this role.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            role_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/roles/{roleId}"),
            path_params=[param[str]("roleId", role_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiDatasetRoleRequestDto | PublicApiDatasetRoleRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiUpdateDatasetRoleResponse],
            error_mapper=post_api_v1_datasets_roles_role_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasets_dataset_id(
        self,
        dataset_id: str,
        body: PublicApiUpdateDatasetDto | PublicApiUpdateDatasetDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DatasetsContentDto, PostApiV1DatasetsDatasetIdErrorBody]:
        """This endpoint enables you to update an existing dataset properties in your organization's Soda Cloud account.

        ## Authorization

        Only users with **Configure dataset** permission can update dataset properties. Soda Cloud Admins have
        permission to update all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/{datasetId}"),
            path_params=[param[str]("datasetId", dataset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiUpdateDatasetDto | PublicApiUpdateDatasetDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[DatasetsContentDto],
            error_mapper=post_api_v1_datasets_dataset_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasets_dataset_id_column_attributes(
        self,
        dataset_id: str,
        body: PublicApiSetColumnAttributesRequestDto | PublicApiSetColumnAttributesRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1DatasetsDatasetIdColumnAttributesErrorBody]:
        """Upsert attribute values on the columns of a dataset.

        The request body maps a column name to a map of attribute-name to value. Setting one attribute on a column does
        not affect other attribute values on the same column. If any column or attribute name is unknown, or any value
        has the wrong type, the entire request is rejected and no changes are persisted.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have dataset role permission CONFIGURE_DATASET to execute this call.

        ## Tags

        ``Datasets``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/columnAttributes"),
            path_params=[param[str]("datasetId", dataset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiSetColumnAttributesRequestDto | PublicApiSetColumnAttributesRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_empty_response,
            error_mapper=post_api_v1_datasets_dataset_id_column_attributes_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasets_dataset_id_column_metric_monitors(
        self,
        dataset_id: str,
        body: PublicApiCreateColumnMetricMonitorRequestDto | PublicApiCreateColumnMetricMonitorRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateColumnMetricMonitorResponse, PostApiV1DatasetsDatasetIdColumnMetricMonitorsErrorBody]:
        """This endpoint allows you to create a new column metric monitor for a specific dataset in your organization's
        Soda Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        create column metric monitors. Soda Cloud Admins can create column metric monitors for all datasets.**See Manage
        dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/columnMetricMonitors"),
            path_params=[param[str]("datasetId", dataset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicApiCreateColumnMetricMonitorRequestDto | PublicApiCreateColumnMetricMonitorRequestDtoDict
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiUpdateColumnMetricMonitorResponse],
            error_mapper=post_api_v1_datasets_dataset_id_column_metric_monitors_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id(
        self,
        dataset_id: str,
        monitor_id: str,
        body: PublicApiUpdateColumnMetricMonitorRequestDto | PublicApiUpdateColumnMetricMonitorRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PublicApiUpdateColumnMetricMonitorResponse, PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdErrorBody
    ]:
        """This endpoint allows you to update an existing column metric monitor for a specific dataset in your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage checks** permission (V3 datasets) or **Manage contracts** permission (V4 datasets) can
        update column metric monitors. Soda Cloud Admins can update column metric monitors for all datasets. **See
        Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/columnMetricMonitors/{monitorId}"),
            path_params=[param[str]("datasetId", dataset_id), param[str]("monitorId", monitor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicApiUpdateColumnMetricMonitorRequestDto | PublicApiUpdateColumnMetricMonitorRequestDtoDict
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiUpdateColumnMetricMonitorResponse],
            error_mapper=post_api_v1_datasets_dataset_id_column_metric_monitors_monitor_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasets_dataset_id_custom_sql_monitors(
        self,
        dataset_id: str,
        body: PublicApiCreateCustomSqlMonitorRequestDto | PublicApiCreateCustomSqlMonitorRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiCreateCustomSqlMonitorResponse, PostApiV1DatasetsDatasetIdCustomSqlMonitorsErrorBody]:
        """This endpoint allows you to create a new custom SQL monitor for a specific dataset in your organization's
        Soda Cloud account.

        ## Authorization

        Only users with **Manage contracts** permission can create custom SQL monitors. Soda Cloud Admins can create
        custom SQL monitors for all datasets.**See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/customSqlMonitors"),
            path_params=[param[str]("datasetId", dataset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateCustomSqlMonitorRequestDto | PublicApiCreateCustomSqlMonitorRequestDtoDict](
                body
            ),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiCreateCustomSqlMonitorResponse],
            error_mapper=post_api_v1_datasets_dataset_id_custom_sql_monitors_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id(
        self,
        dataset_id: str,
        monitor_id: str,
        body: PublicApiUpdateCustomSqlMonitorRequestDto | PublicApiUpdateCustomSqlMonitorRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PublicApiUpdateCustomSqlMonitorResponse, PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdErrorBody
    ]:
        """This endpoint allows you to update an existing custom SQL monitor for a specific dataset in your
        organization's Soda Cloud account.

        ## Authorization

        Only users with **Manage contracts** permission can update custom SQL monitors. Soda Cloud Admins can update
        custom SQL monitors for all datasets. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            monitor_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/customSqlMonitors/{monitorId}"),
            path_params=[param[str]("datasetId", dataset_id), param[str]("monitorId", monitor_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiUpdateCustomSqlMonitorRequestDto | PublicApiUpdateCustomSqlMonitorRequestDtoDict](
                body
            ),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiUpdateCustomSqlMonitorResponse],
            error_mapper=post_api_v1_datasets_dataset_id_custom_sql_monitors_monitor_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection(
        self, dataset_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionErrorBody]:
        """This endpoint triggers a historical metric collection scan for a specific dataset in your organization's Soda
        Cloud account.

        The dataset must have metric monitoring enabled and a historical collection scan definition configured.

        The response includes the scan ID and a Location header pointing to the scan status endpoint.

        ## Authorization

        Only users with **Manage contracts** permission can run historical metric collection. Soda Cloud Admins have
        access to run historical metric collection for all datasets. **See Manage dataset roles for more information.**

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default(
                "/api/v1/datasets/{datasetId}/metricMonitoring/historicalMetricCollection"
            ),
            path_params=[param[str]("datasetId", dataset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_empty_response,
            error_mapper=post_api_v1_datasets_dataset_id_metric_monitoring_historical_metric_collection_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasets_dataset_id_responsibilities(
        self,
        dataset_id: str,
        body: PublicApiUpdateDatasetResponsibilitiesRequestDto | PublicApiUpdateDatasetResponsibilitiesRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1DatasetsDatasetIdResponsibilitiesErrorBody]:
        """This endpoint enables you to update the user and user groups permissions and their associated roles for a
        dataset in your organization's Soda Cloud account.

        **Note**: This API fully replaces the existing responsibilities. The entire list of responsibilities must be
        provided in the request, including both new and existing entries, as any omissions will result in their removal.

        ## Authorization

        Only users with **Manage dataset responsibilities** permission can update dataset responsibilities. Soda Cloud
        Admins have permission to update all datasets responsibilities.**See Manage dataset roles for more
        information.**The Response of this call, when successful, is ``201`` and contains header ``Location`` which
        identify the URL where the responsibilities will eventually become available.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasets``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            dataset_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasets/{datasetId}/responsibilities"),
            path_params=[param[str]("datasetId", dataset_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                PublicApiUpdateDatasetResponsibilitiesRequestDto | PublicApiUpdateDatasetResponsibilitiesRequestDtoDict
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_empty_response,
            error_mapper=post_api_v1_datasets_dataset_id_responsibilities_error_mapper,
            request_options=request_options,
        )
