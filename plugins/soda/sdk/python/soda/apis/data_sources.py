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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_api_v1_datasources_datasource_id_error import (
    DeleteApiV1DatasourcesDatasourceIdErrorBody,
    delete_api_v1_datasources_datasource_id_error_mapper,
)
from ..errors.delete_api_v1_datasources_roles_role_id_error import (
    DeleteApiV1DatasourcesRolesRoleIdErrorBody,
    delete_api_v1_datasources_roles_role_id_error_mapper,
)
from ..errors.get_api_v1_datasources_actions_test_connection_operation_id_error import (
    GetApiV1DatasourcesActionsTestConnectionOperationIdErrorBody,
    get_api_v1_datasources_actions_test_connection_operation_id_error_mapper,
)
from ..errors.get_api_v1_datasources_datasource_id_diagnostics_warehouse_error import (
    GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody,
    get_api_v1_datasources_datasource_id_diagnostics_warehouse_error_mapper,
)
from ..errors.get_api_v1_datasources_datasource_id_error import (
    GetApiV1DatasourcesDatasourceIdErrorBody,
    get_api_v1_datasources_datasource_id_error_mapper,
)
from ..errors.get_api_v1_datasources_datasource_id_onboard_datasets_operation_id_error import (
    GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdErrorBody,
    get_api_v1_datasources_datasource_id_onboard_datasets_operation_id_error_mapper,
)
from ..errors.get_api_v1_datasources_datasource_id_responsibilities_error import (
    GetApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody,
    get_api_v1_datasources_datasource_id_responsibilities_error_mapper,
)
from ..errors.get_api_v1_datasources_error import GetApiV1DatasourcesErrorBody, get_api_v1_datasources_error_mapper
from ..errors.get_api_v1_datasources_roles_error import (
    GetApiV1DatasourcesRolesErrorBody,
    get_api_v1_datasources_roles_error_mapper,
)
from ..errors.post_api_v1_datasources_actions_test_connection_error import (
    PostApiV1DatasourcesActionsTestConnectionErrorBody,
    post_api_v1_datasources_actions_test_connection_error_mapper,
)
from ..errors.post_api_v1_datasources_datasource_id_diagnostics_warehouse_error import (
    PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody,
    post_api_v1_datasources_datasource_id_diagnostics_warehouse_error_mapper,
)
from ..errors.post_api_v1_datasources_datasource_id_discover_error import (
    PostApiV1DatasourcesDatasourceIdDiscoverErrorBody,
    post_api_v1_datasources_datasource_id_discover_error_mapper,
)
from ..errors.post_api_v1_datasources_datasource_id_error import (
    PostApiV1DatasourcesDatasourceIdErrorBody,
    post_api_v1_datasources_datasource_id_error_mapper,
)
from ..errors.post_api_v1_datasources_datasource_id_onboard_datasets_error import (
    PostApiV1DatasourcesDatasourceIdOnboardDatasetsErrorBody,
    post_api_v1_datasources_datasource_id_onboard_datasets_error_mapper,
)
from ..errors.post_api_v1_datasources_datasource_id_responsibilities_error import (
    PostApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody,
    post_api_v1_datasources_datasource_id_responsibilities_error_mapper,
)
from ..errors.post_api_v1_datasources_error import PostApiV1DatasourcesErrorBody, post_api_v1_datasources_error_mapper
from ..errors.post_api_v1_datasources_roles_error import (
    PostApiV1DatasourcesRolesErrorBody,
    post_api_v1_datasources_roles_error_mapper,
)
from ..errors.post_api_v1_datasources_roles_role_id_error import (
    PostApiV1DatasourcesRolesRoleIdErrorBody,
    post_api_v1_datasources_roles_role_id_error_mapper,
)
from ..models.public_api_create_datasource_request_dto import (
    PublicApiCreateDatasourceRequestDto,
    PublicApiCreateDatasourceRequestDtoDict,
)
from ..models.public_api_create_datasource_response import PublicApiCreateDatasourceResponse
from ..models.public_api_create_datasource_role_response import PublicApiCreateDatasourceRoleResponse
from ..models.public_api_datasource_diagnostics_warehouse_response import (
    PublicApiDatasourceDiagnosticsWarehouseResponse,
)
from ..models.public_api_datasource_responsibilities_response import PublicApiDatasourceResponsibilitiesResponse
from ..models.public_api_datasource_role_request_dto import (
    PublicApiDatasourceRoleRequestDto,
    PublicApiDatasourceRoleRequestDtoDict,
)
from ..models.public_api_datasource_roles_response import PublicApiDatasourceRolesResponse
from ..models.public_api_delete_datasource_response import PublicApiDeleteDatasourceResponse
from ..models.public_api_delete_datasource_role_response import PublicApiDeleteDatasourceRoleResponse
from ..models.public_api_get_datasource_response import PublicApiGetDatasourceResponse
from ..models.public_api_list_datasources_response import PublicApiListDatasourcesResponse
from ..models.public_api_onboard_datasets_request_dto import (
    PublicApiOnboardDatasetsRequestDto,
    PublicApiOnboardDatasetsRequestDtoDict,
)
from ..models.public_api_onboard_datasets_status_response import PublicApiOnboardDatasetsStatusResponse
from ..models.public_api_test_connection_request_dto import (
    PublicApiTestConnectionRequestDto,
    PublicApiTestConnectionRequestDtoDict,
)
from ..models.public_api_test_connection_status_response import PublicApiTestConnectionStatusResponse
from ..models.public_api_update_datasource_diagnostics_warehouse_request_dto import (
    PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto,
    PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoDict,
)
from ..models.public_api_update_datasource_request_dto import (
    PublicApiUpdateDatasourceRequestDto,
    PublicApiUpdateDatasourceRequestDtoDict,
)
from ..models.public_api_update_datasource_response import PublicApiUpdateDatasourceResponse
from ..models.public_api_update_datasource_responsibilities_request_dto import (
    PublicApiUpdateDatasourceResponsibilitiesRequestDto,
    PublicApiUpdateDatasourceResponsibilitiesRequestDtoDict,
)
from ..models.public_api_update_datasource_role_response import PublicApiUpdateDatasourceRoleResponse
from ..server.server import Server


class DataSources:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DataSourcesWithRawResponse(client, server, auth)

    def delete_api_v1_datasources_roles_role_id(
        self, role_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDeleteDatasourceRoleResponse:
        """This endpoint allows you to delete a custom datasource role from your organization's Soda Cloud account.
        Datasource roles define a named set of permissions that control what actions users can perform on individual
        datasources, such as creating datasets, managing datasource settings, managing permissions, or deleting the
        datasource.

        Deletion is performed asynchronously and may take some time to complete.

        Deletion will fail if the role is still assigned to any datasource permissions or used in responsibility
        settings.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasources``

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
            self._with_raw_response.delete_api_v1_datasources_roles_role_id(role_id, request_options=request_options)
        )

    def delete_api_v1_datasources_datasource_id(
        self, datasource_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDeleteDatasourceResponse:
        """Deletes an existing datasource and all its associated resources.

        The deletion is performed asynchronously.

        ## Authorization

        Users with the **Delete** permission on the datasource, or the organization-level **Manage datasources and
        runners** permission, can delete it.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_api_v1_datasources_datasource_id(
                datasource_id, request_options=request_options
            ),
        )

    def get_api_v1_datasources(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiListDatasourcesResponse:
        """This endpoint allows you to list datasources in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Supply a string value to filter datasources by name (case-insensitive partial match).

        ## Authorization

        Soda only returns datasources for which the user has the **View** permission. Soda Cloud Admins have access to
        all datasources.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_datasources(
                page=page, search=search, size=size, request_options=request_options
            ),
        )

    def get_api_v1_datasources_actions_test_connection_operation_id(
        self, operation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiTestConnectionStatusResponse:
        """This endpoint allows you to check the status of an asynchronous connection test operation.

        Use the operation ID returned by the test connection endpoint to poll for its current state.

        ## Authorization

        Any authenticated Soda Cloud user in your organization may poll the status of a connection test operation.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_datasources_actions_test_connection_operation_id(
                operation_id, request_options=request_options
            ),
        )

    def get_api_v1_datasources_roles(
        self, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDatasourceRolesResponse:
        """This endpoint enables you to gather information about the datasource roles available in your organization's
        Soda Cloud account. Use the datasource roles to manage access to individual datasources.

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

        ``Datasources``

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
            self._with_raw_response.get_api_v1_datasources_roles(page=page, size=size, request_options=request_options)
        )

    def get_api_v1_datasources_datasource_id(
        self, datasource_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiGetDatasourceResponse:
        """This endpoint allows you to retrieve a specific datasource by its ID.

        ## Authorization

        Users with the **View** permission on the datasource can retrieve its details.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_datasources_datasource_id(datasource_id, request_options=request_options)
        )

    def get_api_v1_datasources_datasource_id_diagnostics_warehouse(
        self, datasource_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiDatasourceDiagnosticsWarehouseResponse:
        """This endpoint allows you to retrieve the diagnostics warehouse configuration for a specific datasource in
        your organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely
        forwards it to the customer's warehouse for storage and analysis.

        ## Authorization

        Users with the **View** permission on the datasource can retrieve its diagnostics warehouse configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_datasources_datasource_id_diagnostics_warehouse(
                datasource_id, request_options=request_options
            ),
        )

    def get_api_v1_datasources_datasource_id_onboard_datasets_operation_id(
        self, datasource_id: str, operation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PublicApiOnboardDatasetsStatusResponse:
        """This endpoint allows you to check the status of an asynchronous dataset onboarding operation.

        Use the operation ID returned by the onboard datasets endpoint to poll for its current state.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_datasources_datasource_id_onboard_datasets_operation_id(
                datasource_id, operation_id, request_options=request_options
            ),
        )

    def get_api_v1_datasources_datasource_id_responsibilities(
        self,
        datasource_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiDatasourceResponsibilitiesResponse:
        """This endpoint enables you to gather information about the user and user groups permissions assigned to a
        datasource, and their associated roles in your organization's Soda Cloud account.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 100, inclusive. The default value is 100.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authorization

        Soda only returns the datasource responsibilities to which the user has **View datasource** permissions. Soda
        Cloud Admins have access to all datasource responsibilities.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
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
            self._with_raw_response.get_api_v1_datasources_datasource_id_responsibilities(
                datasource_id, page=page, size=size, request_options=request_options
            ),
        )

    def post_api_v1_datasources(
        self,
        body: PublicApiCreateDatasourceRequestDto | PublicApiCreateDatasourceRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiCreateDatasourceResponse:
        """Creates a new V4 datasource with the provided configuration.

        The datasource type is extracted from the YAML configuration file contents.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_api_v1_datasources(body, request_options=request_options))

    def post_api_v1_datasources_actions_test_connection(
        self,
        body: PublicApiTestConnectionRequestDto | PublicApiTestConnectionRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This endpoint triggers an asynchronous connection test for a datasource configuration.

        The response includes an operation ID that you can use to poll the status of the connection test.

        ## Authorization

        Any authenticated Soda Cloud user in your organization may test a datasource connection. The test runs against a
        configuration provided in the request, not against an existing datasource.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_datasources_actions_test_connection(
                body, request_options=request_options
            ),
        )

    def post_api_v1_datasources_roles(
        self,
        body: PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiCreateDatasourceRoleResponse:
        """This endpoint allows you to create a new custom datasource role in your organization's Soda Cloud account.
        Datasource roles define a named set of permissions that control what actions users can perform on individual
        datasources, such as creating datasets, managing datasource settings, managing permissions, or deleting the
        datasource.

        Once created, the role can be assigned to users or user groups via the datasource responsibilities endpoints.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasources``

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
        return unwrap(self._with_raw_response.post_api_v1_datasources_roles(body, request_options=request_options))

    def post_api_v1_datasources_roles_role_id(
        self,
        role_id: str,
        body: PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateDatasourceRoleResponse:
        """This endpoint allows you to update the name or permissions of an existing custom datasource role. Datasource
        roles define a named set of permissions that control what actions users can perform on individual datasources,
        such as creating datasets, managing datasource settings, managing permissions, or deleting the datasource.

        Changes apply immediately to all users and user groups assigned this role.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasources``

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
            self._with_raw_response.post_api_v1_datasources_roles_role_id(
                role_id, body, request_options=request_options
            ),
        )

    def post_api_v1_datasources_datasource_id(
        self,
        datasource_id: str,
        body: PublicApiUpdateDatasourceRequestDto | PublicApiUpdateDatasourceRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateDatasourceResponse:
        """Updates the configuration of an existing contract (V4) datasource.

        Only the fields provided in the request body will be updated.

        ## Authorization

        Users with the **Manage datasource settings** permission on the datasource, or the organization-level **Manage
        datasources and runners** permission, can update its configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_datasources_datasource_id(
                datasource_id, body, request_options=request_options
            ),
        )

    def post_api_v1_datasources_datasource_id_diagnostics_warehouse(
        self,
        datasource_id: str,
        body: (
            PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto
            | PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PublicApiDatasourceDiagnosticsWarehouseResponse:
        """This endpoint allows you to update the diagnostics warehouse configuration for a specific datasource in your
        organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely stores it
        in your warehouse for storage and analysis.

        ## Table name template

        The ``tableNameTemplate`` field controls how diagnostic tables are named in the warehouse. Use the
        ``{dataset_name}`` placeholder to include the source dataset name. For example, ``dwh_{dataset_name}_failed``
        produces table names like ``dwh_orders_failed``.

        ## Authorization

        Users with the **Manage datasource settings** permission on the datasource, or the organization-level **Manage
        datasources and runners** permission, can update its diagnostics warehouse configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_datasources_datasource_id_diagnostics_warehouse(
                datasource_id, body, request_options=request_options
            ),
        )

    def post_api_v1_datasources_datasource_id_discover(
        self, datasource_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """This endpoint triggers a discovery scan on the specified datasource.

        Discovery scans detect new tables and schemas in the datasource. Use this to run discovery on-demand instead of
        waiting for the scheduled cron.

        The response includes a ``Location`` header and ``X-Soda-Scan-Id`` header identifying the triggered scan. Use
        the scan ID with the **Get scan status** endpoint to poll for completion.

        ## Authorization

        Users with the **Manage datasource settings** permission on the datasource, or the organization-level **Manage
        datasources and runners** permission, can trigger discovery on the datasource.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_datasources_datasource_id_discover(
                datasource_id, request_options=request_options
            ),
        )

    def post_api_v1_datasources_datasource_id_onboard_datasets(
        self,
        datasource_id: str,
        body: PublicApiOnboardDatasetsRequestDto | PublicApiOnboardDatasetsRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This endpoint triggers the asynchronous onboarding of discovered datasets for a datasource.

        Supply a list of discovered dataset IDs in the request body to onboard them as datasets.

        The response includes an onboarding ID that you can use to poll the status of the onboarding process.

        ## Authorization

        Users with the **Create datasets** permission on the datasource, or the organization-level **Create new
        datasources and datasets** permission, can onboard discovered datasets.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_datasources_datasource_id_onboard_datasets(
                datasource_id, body, request_options=request_options
            ),
        )

    def post_api_v1_datasources_datasource_id_responsibilities(
        self,
        datasource_id: str,
        body: (
            PublicApiUpdateDatasourceResponsibilitiesRequestDto
            | PublicApiUpdateDatasourceResponsibilitiesRequestDtoDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This endpoint enables you to update the user and user groups permissions and their associated roles for a
        datasource in your organization's Soda Cloud account.

        **Note**: This API fully replaces the existing responsibilities. The entire list of responsibilities must be
        provided in the request, including both new and existing entries, as any omissions will result in their removal.

        ## Authorization

        Only users with **Manage datasource responsibilities** permission can update datasource responsibilities. Soda
        Cloud Admins have permission to update all datasources responsibilities.The Response of this call, when
        successful, is ``201`` and contains header ``Location`` which identify the URL where the responsibilities will
        eventually become available.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_datasources_datasource_id_responsibilities(
                datasource_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DataSourcesWithRawResponse:
        return self._with_raw_response


class AsyncDataSources:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDataSourcesWithRawResponse(client, server, auth)

    async def delete_api_v1_datasources_roles_role_id(
        self, role_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiDeleteDatasourceRoleResponse:
        """This endpoint allows you to delete a custom datasource role from your organization's Soda Cloud account.
        Datasource roles define a named set of permissions that control what actions users can perform on individual
        datasources, such as creating datasets, managing datasource settings, managing permissions, or deleting the
        datasource.

        Deletion is performed asynchronously and may take some time to complete.

        Deletion will fail if the role is still assigned to any datasource permissions or used in responsibility
        settings.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasources``

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
            await self._with_raw_response.delete_api_v1_datasources_roles_role_id(
                role_id, request_options=request_options
            ),
        )

    async def delete_api_v1_datasources_datasource_id(
        self, datasource_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiDeleteDatasourceResponse:
        """Deletes an existing datasource and all its associated resources.

        The deletion is performed asynchronously.

        ## Authorization

        Users with the **Delete** permission on the datasource, or the organization-level **Manage datasources and
        runners** permission, can delete it.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_api_v1_datasources_datasource_id(
                datasource_id, request_options=request_options
            ),
        )

    async def get_api_v1_datasources(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiListDatasourcesResponse:
        """This endpoint allows you to list datasources in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Supply a string value to filter datasources by name (case-insensitive partial match).

        ## Authorization

        Soda only returns datasources for which the user has the **View** permission. Soda Cloud Admins have access to
        all datasources.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_datasources(
                page=page, search=search, size=size, request_options=request_options
            ),
        )

    async def get_api_v1_datasources_actions_test_connection_operation_id(
        self, operation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiTestConnectionStatusResponse:
        """This endpoint allows you to check the status of an asynchronous connection test operation.

        Use the operation ID returned by the test connection endpoint to poll for its current state.

        ## Authorization

        Any authenticated Soda Cloud user in your organization may poll the status of a connection test operation.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_datasources_actions_test_connection_operation_id(
                operation_id, request_options=request_options
            ),
        )

    async def get_api_v1_datasources_roles(
        self,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiDatasourceRolesResponse:
        """This endpoint enables you to gather information about the datasource roles available in your organization's
        Soda Cloud account. Use the datasource roles to manage access to individual datasources.

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

        ``Datasources``

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
            await self._with_raw_response.get_api_v1_datasources_roles(
                page=page, size=size, request_options=request_options
            ),
        )

    async def get_api_v1_datasources_datasource_id(
        self, datasource_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiGetDatasourceResponse:
        """This endpoint allows you to retrieve a specific datasource by its ID.

        ## Authorization

        Users with the **View** permission on the datasource can retrieve its details.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_datasources_datasource_id(
                datasource_id, request_options=request_options
            ),
        )

    async def get_api_v1_datasources_datasource_id_diagnostics_warehouse(
        self, datasource_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiDatasourceDiagnosticsWarehouseResponse:
        """This endpoint allows you to retrieve the diagnostics warehouse configuration for a specific datasource in
        your organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely
        forwards it to the customer's warehouse for storage and analysis.

        ## Authorization

        Users with the **View** permission on the datasource can retrieve its diagnostics warehouse configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_datasources_datasource_id_diagnostics_warehouse(
                datasource_id, request_options=request_options
            ),
        )

    async def get_api_v1_datasources_datasource_id_onboard_datasets_operation_id(
        self, datasource_id: str, operation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PublicApiOnboardDatasetsStatusResponse:
        """This endpoint allows you to check the status of an asynchronous dataset onboarding operation.

        Use the operation ID returned by the onboard datasets endpoint to poll for its current state.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_datasources_datasource_id_onboard_datasets_operation_id(
                datasource_id, operation_id, request_options=request_options
            ),
        )

    async def get_api_v1_datasources_datasource_id_responsibilities(
        self,
        datasource_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiDatasourceResponsibilitiesResponse:
        """This endpoint enables you to gather information about the user and user groups permissions assigned to a
        datasource, and their associated roles in your organization's Soda Cloud account.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 100, inclusive. The default value is 100.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authorization

        Soda only returns the datasource responsibilities to which the user has **View datasource** permissions. Soda
        Cloud Admins have access to all datasource responsibilities.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
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
            await self._with_raw_response.get_api_v1_datasources_datasource_id_responsibilities(
                datasource_id, page=page, size=size, request_options=request_options
            ),
        )

    async def post_api_v1_datasources(
        self,
        body: PublicApiCreateDatasourceRequestDto | PublicApiCreateDatasourceRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiCreateDatasourceResponse:
        """Creates a new V4 datasource with the provided configuration.

        The datasource type is extracted from the YAML configuration file contents.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_api_v1_datasources(body, request_options=request_options))

    async def post_api_v1_datasources_actions_test_connection(
        self,
        body: PublicApiTestConnectionRequestDto | PublicApiTestConnectionRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This endpoint triggers an asynchronous connection test for a datasource configuration.

        The response includes an operation ID that you can use to poll the status of the connection test.

        ## Authorization

        Any authenticated Soda Cloud user in your organization may test a datasource connection. The test runs against a
        configuration provided in the request, not against an existing datasource.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted

        Raises:
            ApiError: Bad request Unauthorized Forbidden Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_datasources_actions_test_connection(
                body, request_options=request_options
            ),
        )

    async def post_api_v1_datasources_roles(
        self,
        body: PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiCreateDatasourceRoleResponse:
        """This endpoint allows you to create a new custom datasource role in your organization's Soda Cloud account.
        Datasource roles define a named set of permissions that control what actions users can perform on individual
        datasources, such as creating datasets, managing datasource settings, managing permissions, or deleting the
        datasource.

        Once created, the role can be assigned to users or user groups via the datasource responsibilities endpoints.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasources``

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
        return unwrap(
            await self._with_raw_response.post_api_v1_datasources_roles(body, request_options=request_options)
        )

    async def post_api_v1_datasources_roles_role_id(
        self,
        role_id: str,
        body: PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateDatasourceRoleResponse:
        """This endpoint allows you to update the name or permissions of an existing custom datasource role. Datasource
        roles define a named set of permissions that control what actions users can perform on individual datasources,
        such as creating datasets, managing datasource settings, managing permissions, or deleting the datasource.

        Changes apply immediately to all users and user groups assigned this role.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasources``

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
            await self._with_raw_response.post_api_v1_datasources_roles_role_id(
                role_id, body, request_options=request_options
            ),
        )

    async def post_api_v1_datasources_datasource_id(
        self,
        datasource_id: str,
        body: PublicApiUpdateDatasourceRequestDto | PublicApiUpdateDatasourceRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiUpdateDatasourceResponse:
        """Updates the configuration of an existing contract (V4) datasource.

        Only the fields provided in the request body will be updated.

        ## Authorization

        Users with the **Manage datasource settings** permission on the datasource, or the organization-level **Manage
        datasources and runners** permission, can update its configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_datasources_datasource_id(
                datasource_id, body, request_options=request_options
            ),
        )

    async def post_api_v1_datasources_datasource_id_diagnostics_warehouse(
        self,
        datasource_id: str,
        body: (
            PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto
            | PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PublicApiDatasourceDiagnosticsWarehouseResponse:
        """This endpoint allows you to update the diagnostics warehouse configuration for a specific datasource in your
        organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely stores it
        in your warehouse for storage and analysis.

        ## Table name template

        The ``tableNameTemplate`` field controls how diagnostic tables are named in the warehouse. Use the
        ``{dataset_name}`` placeholder to include the source dataset name. For example, ``dwh_{dataset_name}_failed``
        produces table names like ``dwh_orders_failed``.

        ## Authorization

        Users with the **Manage datasource settings** permission on the datasource, or the organization-level **Manage
        datasources and runners** permission, can update its diagnostics warehouse configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_datasources_datasource_id_diagnostics_warehouse(
                datasource_id, body, request_options=request_options
            ),
        )

    async def post_api_v1_datasources_datasource_id_discover(
        self, datasource_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """This endpoint triggers a discovery scan on the specified datasource.

        Discovery scans detect new tables and schemas in the datasource. Use this to run discovery on-demand instead of
        waiting for the scheduled cron.

        The response includes a ``Location`` header and ``X-Soda-Scan-Id`` header identifying the triggered scan. Use
        the scan ID with the **Get scan status** endpoint to poll for completion.

        ## Authorization

        Users with the **Manage datasource settings** permission on the datasource, or the organization-level **Manage
        datasources and runners** permission, can trigger discovery on the datasource.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_datasources_datasource_id_discover(
                datasource_id, request_options=request_options
            ),
        )

    async def post_api_v1_datasources_datasource_id_onboard_datasets(
        self,
        datasource_id: str,
        body: PublicApiOnboardDatasetsRequestDto | PublicApiOnboardDatasetsRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This endpoint triggers the asynchronous onboarding of discovered datasets for a datasource.

        Supply a list of discovered dataset IDs in the request body to onboard them as datasets.

        The response includes an onboarding ID that you can use to poll the status of the onboarding process.

        ## Authorization

        Users with the **Create datasets** permission on the datasource, or the organization-level **Create new
        datasources and datasets** permission, can onboard discovered datasets.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Accepted

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_datasources_datasource_id_onboard_datasets(
                datasource_id, body, request_options=request_options
            ),
        )

    async def post_api_v1_datasources_datasource_id_responsibilities(
        self,
        datasource_id: str,
        body: (
            PublicApiUpdateDatasourceResponsibilitiesRequestDto
            | PublicApiUpdateDatasourceResponsibilitiesRequestDtoDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This endpoint enables you to update the user and user groups permissions and their associated roles for a
        datasource in your organization's Soda Cloud account.

        **Note**: This API fully replaces the existing responsibilities. The entire list of responsibilities must be
        provided in the request, including both new and existing entries, as any omissions will result in their removal.

        ## Authorization

        Only users with **Manage datasource responsibilities** permission can update datasource responsibilities. Soda
        Cloud Admins have permission to update all datasources responsibilities.The Response of this call, when
        successful, is ``201`` and contains header ``Location`` which identify the URL where the responsibilities will
        eventually become available.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Forbidden Not found Too many requests Internal server error ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_datasources_datasource_id_responsibilities(
                datasource_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDataSourcesWithRawResponse:
        return self._with_raw_response


class DataSourcesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_api_v1_datasources_roles_role_id(
        self, role_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteDatasourceRoleResponse, DeleteApiV1DatasourcesRolesRoleIdErrorBody]:
        """This endpoint allows you to delete a custom datasource role from your organization's Soda Cloud account.
        Datasource roles define a named set of permissions that control what actions users can perform on individual
        datasources, such as creating datasets, managing datasource settings, managing permissions, or deleting the
        datasource.

        Deletion is performed asynchronously and may take some time to complete.

        Deletion will fail if the role is still assigned to any datasource permissions or used in responsibility
        settings.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasources``

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
            url_template=self._server.default("/api/v1/datasources/roles/{roleId}"),
            path_params=[param[str]("roleId", role_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDeleteDatasourceRoleResponse],
            error_mapper=delete_api_v1_datasources_roles_role_id_error_mapper,
            request_options=request_options,
        )

    def delete_api_v1_datasources_datasource_id(
        self, datasource_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteDatasourceResponse, DeleteApiV1DatasourcesDatasourceIdErrorBody]:
        """Deletes an existing datasource and all its associated resources.

        The deletion is performed asynchronously.

        ## Authorization

        Users with the **Delete** permission on the datasource, or the organization-level **Manage datasources and
        runners** permission, can delete it.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}"),
            path_params=[param[str]("datasourceId", datasource_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDeleteDatasourceResponse],
            error_mapper=delete_api_v1_datasources_datasource_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasources(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListDatasourcesResponse, GetApiV1DatasourcesErrorBody]:
        """This endpoint allows you to list datasources in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Supply a string value to filter datasources by name (case-insensitive partial match).

        ## Authorization

        Soda only returns datasources for which the user has the **View** permission. Soda Cloud Admins have access to
        all datasources.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasources"),
            query_params=[
                param[int | None]("page", page), param[str | None]("search", search), param[int | None]("size", size)
            ],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiListDatasourcesResponse],
            error_mapper=get_api_v1_datasources_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasources_actions_test_connection_operation_id(
        self, operation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiTestConnectionStatusResponse, GetApiV1DatasourcesActionsTestConnectionOperationIdErrorBody]:
        """This endpoint allows you to check the status of an asynchronous connection test operation.

        Use the operation ID returned by the test connection endpoint to poll for its current state.

        ## Authorization

        Any authenticated Soda Cloud user in your organization may poll the status of a connection test operation.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasources/actions/testConnection/{operationId}"),
            path_params=[param[str]("operationId", operation_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiTestConnectionStatusResponse],
            error_mapper=get_api_v1_datasources_actions_test_connection_operation_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasources_roles(
        self, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDatasourceRolesResponse, GetApiV1DatasourcesRolesErrorBody]:
        """This endpoint enables you to gather information about the datasource roles available in your organization's
        Soda Cloud account. Use the datasource roles to manage access to individual datasources.

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

        ``Datasources``

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
            url_template=self._server.default("/api/v1/datasources/roles"),
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDatasourceRolesResponse],
            error_mapper=get_api_v1_datasources_roles_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasources_datasource_id(
        self, datasource_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiGetDatasourceResponse, GetApiV1DatasourcesDatasourceIdErrorBody]:
        """This endpoint allows you to retrieve a specific datasource by its ID.

        ## Authorization

        Users with the **View** permission on the datasource can retrieve its details.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}"),
            path_params=[param[str]("datasourceId", datasource_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiGetDatasourceResponse],
            error_mapper=get_api_v1_datasources_datasource_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasources_datasource_id_diagnostics_warehouse(
        self, datasource_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        PublicApiDatasourceDiagnosticsWarehouseResponse, GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody
    ]:
        """This endpoint allows you to retrieve the diagnostics warehouse configuration for a specific datasource in
        your organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely
        forwards it to the customer's warehouse for storage and analysis.

        ## Authorization

        Users with the **View** permission on the datasource can retrieve its diagnostics warehouse configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}/diagnosticsWarehouse"),
            path_params=[param[str]("datasourceId", datasource_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDatasourceDiagnosticsWarehouseResponse],
            error_mapper=get_api_v1_datasources_datasource_id_diagnostics_warehouse_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasources_datasource_id_onboard_datasets_operation_id(
        self, datasource_id: str, operation_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[
        PublicApiOnboardDatasetsStatusResponse, GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdErrorBody
    ]:
        """This endpoint allows you to check the status of an asynchronous dataset onboarding operation.

        Use the operation ID returned by the onboard datasets endpoint to poll for its current state.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}/onboardDatasets/{operationId}"),
            path_params=[param[str]("datasourceId", datasource_id), param[str]("operationId", operation_id)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiOnboardDatasetsStatusResponse],
            error_mapper=get_api_v1_datasources_datasource_id_onboard_datasets_operation_id_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_datasources_datasource_id_responsibilities(
        self,
        datasource_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PublicApiDatasourceResponsibilitiesResponse, GetApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody
    ]:
        """This endpoint enables you to gather information about the user and user groups permissions assigned to a
        datasource, and their associated roles in your organization's Soda Cloud account.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 100, inclusive. The default value is 100.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authorization

        Soda only returns the datasource responsibilities to which the user has **View datasource** permissions. Soda
        Cloud Admins have access to all datasource responsibilities.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}/responsibilities"),
            path_params=[param[str]("datasourceId", datasource_id)],
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDatasourceResponsibilitiesResponse],
            error_mapper=get_api_v1_datasources_datasource_id_responsibilities_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasources(
        self,
        body: PublicApiCreateDatasourceRequestDto | PublicApiCreateDatasourceRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiCreateDatasourceResponse, PostApiV1DatasourcesErrorBody]:
        """Creates a new V4 datasource with the provided configuration.

        The datasource type is extracted from the YAML configuration file contents.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Datasources``

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
            url_template=self._server.default("/api/v1/datasources"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateDatasourceRequestDto | PublicApiCreateDatasourceRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiCreateDatasourceResponse],
            error_mapper=post_api_v1_datasources_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasources_actions_test_connection(
        self,
        body: PublicApiTestConnectionRequestDto | PublicApiTestConnectionRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1DatasourcesActionsTestConnectionErrorBody]:
        """This endpoint triggers an asynchronous connection test for a datasource configuration.

        The response includes an operation ID that you can use to poll the status of the connection test.

        ## Authorization

        Any authenticated Soda Cloud user in your organization may test a datasource connection. The test runs against a
        configuration provided in the request, not against an existing datasource.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

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
            url_template=self._server.default("/api/v1/datasources/actions/testConnection"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiTestConnectionRequestDto | PublicApiTestConnectionRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=empty_response,
            error_mapper=post_api_v1_datasources_actions_test_connection_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasources_roles(
        self,
        body: PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiCreateDatasourceRoleResponse, PostApiV1DatasourcesRolesErrorBody]:
        """This endpoint allows you to create a new custom datasource role in your organization's Soda Cloud account.
        Datasource roles define a named set of permissions that control what actions users can perform on individual
        datasources, such as creating datasets, managing datasource settings, managing permissions, or deleting the
        datasource.

        Once created, the role can be assigned to users or user groups via the datasource responsibilities endpoints.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasources``

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
            url_template=self._server.default("/api/v1/datasources/roles"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiCreateDatasourceRoleResponse],
            error_mapper=post_api_v1_datasources_roles_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasources_roles_role_id(
        self,
        role_id: str,
        body: PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateDatasourceRoleResponse, PostApiV1DatasourcesRolesRoleIdErrorBody]:
        """This endpoint allows you to update the name or permissions of an existing custom datasource role. Datasource
        roles define a named set of permissions that control what actions users can perform on individual datasources,
        such as creating datasets, managing datasource settings, managing permissions, or deleting the datasource.

        Changes apply immediately to all users and user groups assigned this role.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasources``

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
            url_template=self._server.default("/api/v1/datasources/roles/{roleId}"),
            path_params=[param[str]("roleId", role_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiUpdateDatasourceRoleResponse],
            error_mapper=post_api_v1_datasources_roles_role_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasources_datasource_id(
        self,
        datasource_id: str,
        body: PublicApiUpdateDatasourceRequestDto | PublicApiUpdateDatasourceRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateDatasourceResponse, PostApiV1DatasourcesDatasourceIdErrorBody]:
        """Updates the configuration of an existing contract (V4) datasource.

        Only the fields provided in the request body will be updated.

        ## Authorization

        Users with the **Manage datasource settings** permission on the datasource, or the organization-level **Manage
        datasources and runners** permission, can update its configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}"),
            path_params=[param[str]("datasourceId", datasource_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiUpdateDatasourceRequestDto | PublicApiUpdateDatasourceRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiUpdateDatasourceResponse],
            error_mapper=post_api_v1_datasources_datasource_id_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasources_datasource_id_diagnostics_warehouse(
        self,
        datasource_id: str,
        body: (
            PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto
            | PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PublicApiDatasourceDiagnosticsWarehouseResponse, PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody
    ]:
        """This endpoint allows you to update the diagnostics warehouse configuration for a specific datasource in your
        organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely stores it
        in your warehouse for storage and analysis.

        ## Table name template

        The ``tableNameTemplate`` field controls how diagnostic tables are named in the warehouse. Use the
        ``{dataset_name}`` placeholder to include the source dataset name. For example, ``dwh_{dataset_name}_failed``
        produces table names like ``dwh_orders_failed``.

        ## Authorization

        Users with the **Manage datasource settings** permission on the datasource, or the organization-level **Manage
        datasources and runners** permission, can update its diagnostics warehouse configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}/diagnosticsWarehouse"),
            path_params=[param[str]("datasourceId", datasource_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto
                    | PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=json_decoder[PublicApiDatasourceDiagnosticsWarehouseResponse],
            error_mapper=post_api_v1_datasources_datasource_id_diagnostics_warehouse_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasources_datasource_id_discover(
        self, datasource_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, PostApiV1DatasourcesDatasourceIdDiscoverErrorBody]:
        """This endpoint triggers a discovery scan on the specified datasource.

        Discovery scans detect new tables and schemas in the datasource. Use this to run discovery on-demand instead of
        waiting for the scheduled cron.

        The response includes a ``Location`` header and ``X-Soda-Scan-Id`` header identifying the triggered scan. Use
        the scan ID with the **Get scan status** endpoint to poll for completion.

        ## Authorization

        Users with the **Manage datasource settings** permission on the datasource, or the organization-level **Manage
        datasources and runners** permission, can trigger discovery on the datasource.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}/discover"),
            path_params=[param[str]("datasourceId", datasource_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=empty_response,
            error_mapper=post_api_v1_datasources_datasource_id_discover_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasources_datasource_id_onboard_datasets(
        self,
        datasource_id: str,
        body: PublicApiOnboardDatasetsRequestDto | PublicApiOnboardDatasetsRequestDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1DatasourcesDatasourceIdOnboardDatasetsErrorBody]:
        """This endpoint triggers the asynchronous onboarding of discovered datasets for a datasource.

        Supply a list of discovered dataset IDs in the request body to onboard them as datasets.

        The response includes an onboarding ID that you can use to poll the status of the onboarding process.

        ## Authorization

        Users with the **Create datasets** permission on the datasource, or the organization-level **Create new
        datasources and datasets** permission, can onboard discovered datasets.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}/onboardDatasets"),
            path_params=[param[str]("datasourceId", datasource_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiOnboardDatasetsRequestDto | PublicApiOnboardDatasetsRequestDtoDict](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=empty_response,
            error_mapper=post_api_v1_datasources_datasource_id_onboard_datasets_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_datasources_datasource_id_responsibilities(
        self,
        datasource_id: str,
        body: (
            PublicApiUpdateDatasourceResponsibilitiesRequestDto
            | PublicApiUpdateDatasourceResponsibilitiesRequestDtoDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody]:
        """This endpoint enables you to update the user and user groups permissions and their associated roles for a
        datasource in your organization's Soda Cloud account.

        **Note**: This API fully replaces the existing responsibilities. The entire list of responsibilities must be
        provided in the request, including both new and existing entries, as any omissions will result in their removal.

        ## Authorization

        Only users with **Manage datasource responsibilities** permission can update datasource responsibilities. Soda
        Cloud Admins have permission to update all datasources responsibilities.The Response of this call, when
        successful, is ``201`` and contains header ``Location`` which identify the URL where the responsibilities will
        eventually become available.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}/responsibilities"),
            path_params=[param[str]("datasourceId", datasource_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    PublicApiUpdateDatasourceResponsibilitiesRequestDto
                    | PublicApiUpdateDatasourceResponsibilitiesRequestDtoDict
                )
            ](body),
            auth_scheme=AnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=empty_response,
            error_mapper=post_api_v1_datasources_datasource_id_responsibilities_error_mapper,
            request_options=request_options,
        )


class AsyncDataSourcesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_api_v1_datasources_roles_role_id(
        self, role_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteDatasourceRoleResponse, DeleteApiV1DatasourcesRolesRoleIdErrorBody]:
        """This endpoint allows you to delete a custom datasource role from your organization's Soda Cloud account.
        Datasource roles define a named set of permissions that control what actions users can perform on individual
        datasources, such as creating datasets, managing datasource settings, managing permissions, or deleting the
        datasource.

        Deletion is performed asynchronously and may take some time to complete.

        Deletion will fail if the role is still assigned to any datasource permissions or used in responsibility
        settings.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasources``

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
            url_template=self._server.default("/api/v1/datasources/roles/{roleId}"),
            path_params=[param[str]("roleId", role_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDeleteDatasourceRoleResponse],
            error_mapper=delete_api_v1_datasources_roles_role_id_error_mapper,
            request_options=request_options,
        )

    async def delete_api_v1_datasources_datasource_id(
        self, datasource_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiDeleteDatasourceResponse, DeleteApiV1DatasourcesDatasourceIdErrorBody]:
        """Deletes an existing datasource and all its associated resources.

        The deletion is performed asynchronously.

        ## Authorization

        Users with the **Delete** permission on the datasource, or the organization-level **Manage datasources and
        runners** permission, can delete it.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}"),
            path_params=[param[str]("datasourceId", datasource_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDeleteDatasourceResponse],
            error_mapper=delete_api_v1_datasources_datasource_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasources(
        self,
        *,
        page: int | None = None,
        search: str | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiListDatasourcesResponse, GetApiV1DatasourcesErrorBody]:
        """This endpoint allows you to list datasources in your organization.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 10 and 1000, inclusive. The default value is 10.

        - ``page``: Supply an integer value. The default value is 0.

        - ``search``: Supply a string value to filter datasources by name (case-insensitive partial match).

        ## Authorization

        Soda only returns datasources for which the user has the **View** permission. Soda Cloud Admins have access to
        all datasources.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            page: Value sent with the request.
            search: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasources"),
            query_params=[
                param[int | None]("page", page), param[str | None]("search", search), param[int | None]("size", size)
            ],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiListDatasourcesResponse],
            error_mapper=get_api_v1_datasources_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasources_actions_test_connection_operation_id(
        self, operation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiTestConnectionStatusResponse, GetApiV1DatasourcesActionsTestConnectionOperationIdErrorBody]:
        """This endpoint allows you to check the status of an asynchronous connection test operation.

        Use the operation ID returned by the test connection endpoint to poll for its current state.

        ## Authorization

        Any authenticated Soda Cloud user in your organization may poll the status of a connection test operation.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasources/actions/testConnection/{operationId}"),
            path_params=[param[str]("operationId", operation_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiTestConnectionStatusResponse],
            error_mapper=get_api_v1_datasources_actions_test_connection_operation_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasources_roles(
        self,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiDatasourceRolesResponse, GetApiV1DatasourcesRolesErrorBody]:
        """This endpoint enables you to gather information about the datasource roles available in your organization's
        Soda Cloud account. Use the datasource roles to manage access to individual datasources.

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

        ``Datasources``

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
            url_template=self._server.default("/api/v1/datasources/roles"),
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDatasourceRolesResponse],
            error_mapper=get_api_v1_datasources_roles_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasources_datasource_id(
        self, datasource_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PublicApiGetDatasourceResponse, GetApiV1DatasourcesDatasourceIdErrorBody]:
        """This endpoint allows you to retrieve a specific datasource by its ID.

        ## Authorization

        Users with the **View** permission on the datasource can retrieve its details.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}"),
            path_params=[param[str]("datasourceId", datasource_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiGetDatasourceResponse],
            error_mapper=get_api_v1_datasources_datasource_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasources_datasource_id_diagnostics_warehouse(
        self, datasource_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        PublicApiDatasourceDiagnosticsWarehouseResponse, GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody
    ]:
        """This endpoint allows you to retrieve the diagnostics warehouse configuration for a specific datasource in
        your organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely
        forwards it to the customer's warehouse for storage and analysis.

        ## Authorization

        Users with the **View** permission on the datasource can retrieve its diagnostics warehouse configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        1000 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}/diagnosticsWarehouse"),
            path_params=[param[str]("datasourceId", datasource_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDatasourceDiagnosticsWarehouseResponse],
            error_mapper=get_api_v1_datasources_datasource_id_diagnostics_warehouse_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasources_datasource_id_onboard_datasets_operation_id(
        self, datasource_id: str, operation_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[
        PublicApiOnboardDatasetsStatusResponse, GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdErrorBody
    ]:
        """This endpoint allows you to check the status of an asynchronous dataset onboarding operation.

        Use the operation ID returned by the onboard datasets endpoint to poll for its current state.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        60 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            operation_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}/onboardDatasets/{operationId}"),
            path_params=[param[str]("datasourceId", datasource_id), param[str]("operationId", operation_id)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiOnboardDatasetsStatusResponse],
            error_mapper=get_api_v1_datasources_datasource_id_onboard_datasets_operation_id_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_datasources_datasource_id_responsibilities(
        self,
        datasource_id: str,
        *,
        page: int | None = None,
        size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PublicApiDatasourceResponsibilitiesResponse, GetApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody
    ]:
        """This endpoint enables you to gather information about the user and user groups permissions assigned to a
        datasource, and their associated roles in your organization's Soda Cloud account.

        This GET is a paginated API that uses the following parameters to request specific details:

        - ``size``: Supply an integer value between 1 and 100, inclusive. The default value is 100.

        - ``page``: Supply an integer value. The default value is 0.

        ## Authorization

        Soda only returns the datasource responsibilities to which the user has **View datasource** permissions. Soda
        Cloud Admins have access to all datasource responsibilities.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            page: Value sent with the request.
            size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}/responsibilities"),
            path_params=[param[str]("datasourceId", datasource_id)],
            query_params=[param[int | None]("page", page), param[int | None]("size", size)],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDatasourceResponsibilitiesResponse],
            error_mapper=get_api_v1_datasources_datasource_id_responsibilities_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasources(
        self,
        body: PublicApiCreateDatasourceRequestDto | PublicApiCreateDatasourceRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiCreateDatasourceResponse, PostApiV1DatasourcesErrorBody]:
        """Creates a new V4 datasource with the provided configuration.

        The datasource type is extracted from the YAML configuration file contents.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_DATASOURCES_AND_AGENTS to execute this call.

        ## Tags

        ``Datasources``

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
            url_template=self._server.default("/api/v1/datasources"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiCreateDatasourceRequestDto | PublicApiCreateDatasourceRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiCreateDatasourceResponse],
            error_mapper=post_api_v1_datasources_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasources_actions_test_connection(
        self,
        body: PublicApiTestConnectionRequestDto | PublicApiTestConnectionRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1DatasourcesActionsTestConnectionErrorBody]:
        """This endpoint triggers an asynchronous connection test for a datasource configuration.

        The response includes an operation ID that you can use to poll the status of the connection test.

        ## Authorization

        Any authenticated Soda Cloud user in your organization may test a datasource connection. The test runs against a
        configuration provided in the request, not against an existing datasource.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

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
            url_template=self._server.default("/api/v1/datasources/actions/testConnection"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiTestConnectionRequestDto | PublicApiTestConnectionRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_empty_response,
            error_mapper=post_api_v1_datasources_actions_test_connection_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasources_roles(
        self,
        body: PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiCreateDatasourceRoleResponse, PostApiV1DatasourcesRolesErrorBody]:
        """This endpoint allows you to create a new custom datasource role in your organization's Soda Cloud account.
        Datasource roles define a named set of permissions that control what actions users can perform on individual
        datasources, such as creating datasets, managing datasource settings, managing permissions, or deleting the
        datasource.

        Once created, the role can be assigned to users or user groups via the datasource responsibilities endpoints.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasources``

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
            url_template=self._server.default("/api/v1/datasources/roles"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiCreateDatasourceRoleResponse],
            error_mapper=post_api_v1_datasources_roles_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasources_roles_role_id(
        self,
        role_id: str,
        body: PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateDatasourceRoleResponse, PostApiV1DatasourcesRolesRoleIdErrorBody]:
        """This endpoint allows you to update the name or permissions of an existing custom datasource role. Datasource
        roles define a named set of permissions that control what actions users can perform on individual datasources,
        such as creating datasets, managing datasource settings, managing permissions, or deleting the datasource.

        Changes apply immediately to all users and user groups assigned this role.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Authorization

        Users must have global role permission MANAGE_ORGANISATION_SETTINGS to execute this call.

        ## Tags

        ``Datasources``

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
            url_template=self._server.default("/api/v1/datasources/roles/{roleId}"),
            path_params=[param[str]("roleId", role_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiDatasourceRoleRequestDto | PublicApiDatasourceRoleRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiUpdateDatasourceRoleResponse],
            error_mapper=post_api_v1_datasources_roles_role_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasources_datasource_id(
        self,
        datasource_id: str,
        body: PublicApiUpdateDatasourceRequestDto | PublicApiUpdateDatasourceRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PublicApiUpdateDatasourceResponse, PostApiV1DatasourcesDatasourceIdErrorBody]:
        """Updates the configuration of an existing contract (V4) datasource.

        Only the fields provided in the request body will be updated.

        ## Authorization

        Users with the **Manage datasource settings** permission on the datasource, or the organization-level **Manage
        datasources and runners** permission, can update its configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}"),
            path_params=[param[str]("datasourceId", datasource_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiUpdateDatasourceRequestDto | PublicApiUpdateDatasourceRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiUpdateDatasourceResponse],
            error_mapper=post_api_v1_datasources_datasource_id_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasources_datasource_id_diagnostics_warehouse(
        self,
        datasource_id: str,
        body: (
            PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto
            | PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[
        PublicApiDatasourceDiagnosticsWarehouseResponse, PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseErrorBody
    ]:
        """This endpoint allows you to update the diagnostics warehouse configuration for a specific datasource in your
        organization's Soda Cloud account. The diagnostics warehouse collects scan-related data and securely stores it
        in your warehouse for storage and analysis.

        ## Table name template

        The ``tableNameTemplate`` field controls how diagnostic tables are named in the warehouse. Use the
        ``{dataset_name}`` placeholder to include the source dataset name. For example, ``dwh_{dataset_name}_failed``
        produces table names like ``dwh_orders_failed``.

        ## Authorization

        Users with the **Manage datasource settings** permission on the datasource, or the organization-level **Manage
        datasources and runners** permission, can update its diagnostics warehouse configuration.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}/diagnosticsWarehouse"),
            path_params=[param[str]("datasourceId", datasource_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto
                    | PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDtoDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_json_decoder[PublicApiDatasourceDiagnosticsWarehouseResponse],
            error_mapper=post_api_v1_datasources_datasource_id_diagnostics_warehouse_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasources_datasource_id_discover(
        self, datasource_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PostApiV1DatasourcesDatasourceIdDiscoverErrorBody]:
        """This endpoint triggers a discovery scan on the specified datasource.

        Discovery scans detect new tables and schemas in the datasource. Use this to run discovery on-demand instead of
        waiting for the scheduled cron.

        The response includes a ``Location`` header and ``X-Soda-Scan-Id`` header identifying the triggered scan. Use
        the scan ID with the **Get scan status** endpoint to poll for completion.

        ## Authorization

        Users with the **Manage datasource settings** permission on the datasource, or the organization-level **Manage
        datasources and runners** permission, can trigger discovery on the datasource.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}/discover"),
            path_params=[param[str]("datasourceId", datasource_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_empty_response,
            error_mapper=post_api_v1_datasources_datasource_id_discover_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasources_datasource_id_onboard_datasets(
        self,
        datasource_id: str,
        body: PublicApiOnboardDatasetsRequestDto | PublicApiOnboardDatasetsRequestDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1DatasourcesDatasourceIdOnboardDatasetsErrorBody]:
        """This endpoint triggers the asynchronous onboarding of discovered datasets for a datasource.

        Supply a list of discovered dataset IDs in the request body to onboard them as datasets.

        The response includes an onboarding ID that you can use to poll the status of the onboarding process.

        ## Authorization

        Users with the **Create datasets** permission on the datasource, or the organization-level **Create new
        datasources and datasets** permission, can onboard discovered datasets.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        10 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}/onboardDatasets"),
            path_params=[param[str]("datasourceId", datasource_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublicApiOnboardDatasetsRequestDto | PublicApiOnboardDatasetsRequestDtoDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_empty_response,
            error_mapper=post_api_v1_datasources_datasource_id_onboard_datasets_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_datasources_datasource_id_responsibilities(
        self,
        datasource_id: str,
        body: (
            PublicApiUpdateDatasourceResponsibilitiesRequestDto
            | PublicApiUpdateDatasourceResponsibilitiesRequestDtoDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, PostApiV1DatasourcesDatasourceIdResponsibilitiesErrorBody]:
        """This endpoint enables you to update the user and user groups permissions and their associated roles for a
        datasource in your organization's Soda Cloud account.

        **Note**: This API fully replaces the existing responsibilities. The entire list of responsibilities must be
        provided in the request, including both new and existing entries, as any omissions will result in their removal.

        ## Authorization

        Only users with **Manage datasource responsibilities** permission can update datasource responsibilities. Soda
        Cloud Admins have permission to update all datasources responsibilities.The Response of this call, when
        successful, is ``201`` and contains header ``Location`` which identify the URL where the responsibilities will
        eventually become available.

        ## Authentication

        User authentication required: ``true``

        This endpoint accepts authentication via API keys in the ``Basic`` authentication header, or a pre-authenticated
        token in HTTP cookie ``token``. Cookie sessions extend automatically on each request.

        ## Tags

        ``Datasources``

        ## Rate limiting

        100 requests/60 seconds

        Args:
            datasource_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/datasources/{datasourceId}/responsibilities"),
            path_params=[param[str]("datasourceId", datasource_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    PublicApiUpdateDatasourceResponsibilitiesRequestDto
                    | PublicApiUpdateDatasourceResponsibilitiesRequestDtoDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(self._auth.basic_auth_api_key, self._auth.cookie_token),
            decoder=async_empty_response,
            error_mapper=post_api_v1_datasources_datasource_id_responsibilities_error_mapper,
            request_options=request_options,
        )
