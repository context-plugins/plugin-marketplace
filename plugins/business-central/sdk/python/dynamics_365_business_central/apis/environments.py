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
from ..errors.copy_environment_error import CopyEnvironmentErrorBody, copy_environment_error_mapper
from ..errors.create_environment_error import CreateEnvironmentErrorBody, create_environment_error_mapper
from ..errors.delete_environment_error import DeleteEnvironmentErrorBody, delete_environment_error_mapper
from ..errors.get_available_restore_periods_error import (
    GetAvailableRestorePeriodsErrorBody,
    get_available_restore_periods_error_mapper,
)
from ..errors.get_environment_error import GetEnvironmentErrorBody, get_environment_error_mapper
from ..errors.list_all_environments_error import ListAllEnvironmentsErrorBody, list_all_environments_error_mapper
from ..errors.list_environments_error import ListEnvironmentsErrorBody, list_environments_error_mapper
from ..errors.recover_environment_error import RecoverEnvironmentErrorBody, recover_environment_error_mapper
from ..errors.rename_environment_error import RenameEnvironmentErrorBody, rename_environment_error_mapper
from ..errors.restore_environment_error import RestoreEnvironmentErrorBody, restore_environment_error_mapper
from ..models.applications_environments_available_restore_periods_response import (
    ApplicationsEnvironmentsAvailableRestorePeriodsResponse,
)
from ..models.applications_environments_rename_request import (
    ApplicationsEnvironmentsRenameRequest,
    ApplicationsEnvironmentsRenameRequestDict,
)
from ..models.applications_environments_response import ApplicationsEnvironmentsResponse
from ..models.copy_environment_request import CopyEnvironmentRequest, CopyEnvironmentRequestDict
from ..models.create_environment_request import CreateEnvironmentRequest, CreateEnvironmentRequestDict
from ..models.environment_model import EnvironmentModel
from ..models.environment_operation import EnvironmentOperation
from ..models.restore_environment_request import RestoreEnvironmentRequest, RestoreEnvironmentRequestDict
from ..server.server import Server


class Environments:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EnvironmentsWithRawResponse(client, server, auth)

    def copy_environment(
        self,
        environment_name: str,
        body: CopyEnvironmentRequest | CopyEnvironmentRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentModel:
        """Creates a new environment as a copy of an existing environment's data.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Copy initiated (API v2.8 and earlier)

        Raises:
            ApiError: Bad request Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            self._with_raw_response.copy_environment(
                environment_name, body, application_family=application_family, request_options=request_options
            ),
        )

    def create_environment(
        self,
        environment_name: str,
        body: CreateEnvironmentRequest | CreateEnvironmentRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentModel:
        """Creates a new environment with sample data. The operation is asynchronous; poll the environment operations
        endpoint to track status.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Environment creation initiated (API v2.8 and earlier)

        Raises:
            ApiError: Bad request Unauthorized - authentication required Environment already exists ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            self._with_raw_response.create_environment(
                environment_name, body, application_family=application_family, request_options=request_options
            ),
        )

    def delete_environment(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentOperation:
        """Soft deletes the specified environment. The environment is retained for 14 days during which it can be
        recovered. Environments with status Creating Failed or Removing Failed are permanently deleted immediately.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete operation scheduled

        Raises:
            ApiError: Unauthorized - authentication required Environment not found ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            self._with_raw_response.delete_environment(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    def get_available_restore_periods(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApplicationsEnvironmentsAvailableRestorePeriodsResponse:
        """Returns an ordered list of available restore periods for the environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved restore periods

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_available_restore_periods(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    def get_environment(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentModel:
        """Returns the properties for the specified environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved environment

        Raises:
            ApiError: Unauthorized - authentication required Environment not found ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_environment(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    def list_all_environments(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApplicationsEnvironmentsResponse:
        """Returns a list of all environments across all application families for the tenant.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved environments

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(self._with_raw_response.list_all_environments(request_options=request_options))

    def list_environments(
        self, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None
    ) -> ApplicationsEnvironmentsResponse:
        """Returns a list of environments for the specified application family.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved environments

        Raises:
            ApiError: Unauthorized - authentication required Application family not found ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_environments(
                application_family=application_family, request_options=request_options
            ),
        )

    def recover_environment(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentOperation:
        """Recovers a soft-deleted environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recovery operation scheduled

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            self._with_raw_response.recover_environment(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    def rename_environment(
        self,
        environment_name: str,
        body: ApplicationsEnvironmentsRenameRequest | ApplicationsEnvironmentsRenameRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentOperation:
        """Schedules a rename operation on an environment.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Rename operation scheduled

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            self._with_raw_response.rename_environment(
                environment_name, body, application_family=application_family, request_options=request_options
            ),
        )

    def restore_environment(
        self,
        environment_name: str,
        body: RestoreEnvironmentRequest | RestoreEnvironmentRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentOperation:
        """Restores an existing environment from a point in time in the past.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore operation scheduled

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            self._with_raw_response.restore_environment(
                environment_name, body, application_family=application_family, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> EnvironmentsWithRawResponse:
        return self._with_raw_response


class AsyncEnvironments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEnvironmentsWithRawResponse(client, server, auth)

    async def copy_environment(
        self,
        environment_name: str,
        body: CopyEnvironmentRequest | CopyEnvironmentRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentModel:
        """Creates a new environment as a copy of an existing environment's data.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Copy initiated (API v2.8 and earlier)

        Raises:
            ApiError: Bad request Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.copy_environment(
                environment_name, body, application_family=application_family, request_options=request_options
            ),
        )

    async def create_environment(
        self,
        environment_name: str,
        body: CreateEnvironmentRequest | CreateEnvironmentRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentModel:
        """Creates a new environment with sample data. The operation is asynchronous; poll the environment operations
        endpoint to track status.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Environment creation initiated (API v2.8 and earlier)

        Raises:
            ApiError: Bad request Unauthorized - authentication required Environment already exists ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.create_environment(
                environment_name, body, application_family=application_family, request_options=request_options
            ),
        )

    async def delete_environment(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentOperation:
        """Soft deletes the specified environment. The environment is retained for 14 days during which it can be
        recovered. Environments with status Creating Failed or Removing Failed are permanently deleted immediately.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete operation scheduled

        Raises:
            ApiError: Unauthorized - authentication required Environment not found ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_environment(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    async def get_available_restore_periods(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApplicationsEnvironmentsAvailableRestorePeriodsResponse:
        """Returns an ordered list of available restore periods for the environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved restore periods

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_available_restore_periods(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    async def get_environment(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentModel:
        """Returns the properties for the specified environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved environment

        Raises:
            ApiError: Unauthorized - authentication required Environment not found ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_environment(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    async def list_all_environments(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApplicationsEnvironmentsResponse:
        """Returns a list of all environments across all application families for the tenant.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved environments

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(await self._with_raw_response.list_all_environments(request_options=request_options))

    async def list_environments(
        self, *, application_family: str = "BusinessCentral", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApplicationsEnvironmentsResponse:
        """Returns a list of environments for the specified application family.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved environments

        Raises:
            ApiError: Unauthorized - authentication required Application family not found ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_environments(
                application_family=application_family, request_options=request_options
            ),
        )

    async def recover_environment(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentOperation:
        """Recovers a soft-deleted environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recovery operation scheduled

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.recover_environment(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    async def rename_environment(
        self,
        environment_name: str,
        body: ApplicationsEnvironmentsRenameRequest | ApplicationsEnvironmentsRenameRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentOperation:
        """Schedules a rename operation on an environment.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Rename operation scheduled

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.rename_environment(
                environment_name, body, application_family=application_family, request_options=request_options
            ),
        )

    async def restore_environment(
        self,
        environment_name: str,
        body: RestoreEnvironmentRequest | RestoreEnvironmentRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentOperation:
        """Restores an existing environment from a point in time in the past.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore operation scheduled

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_environment(
                environment_name, body, application_family=application_family, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEnvironmentsWithRawResponse:
        return self._with_raw_response


class EnvironmentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def copy_environment(
        self,
        environment_name: str,
        body: CopyEnvironmentRequest | CopyEnvironmentRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentModel, CopyEnvironmentErrorBody]:
        """Creates a new environment as a copy of an existing environment's data.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/copy"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CopyEnvironmentRequest | CopyEnvironmentRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[EnvironmentModel],
            error_mapper=copy_environment_error_mapper,
            request_options=request_options,
        )

    def create_environment(
        self,
        environment_name: str,
        body: CreateEnvironmentRequest | CreateEnvironmentRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentModel, CreateEnvironmentErrorBody]:
        """Creates a new environment with sample data. The operation is asynchronous; poll the environment operations
        endpoint to track status.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEnvironmentRequest | CreateEnvironmentRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[EnvironmentModel],
            error_mapper=create_environment_error_mapper,
            request_options=request_options,
        )

    def delete_environment(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentOperation, DeleteEnvironmentErrorBody]:
        """Soft deletes the specified environment. The environment is retained for 14 days during which it can be
        recovered. Environments with status Creating Failed or Removing Failed are permanently deleted immediately.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[EnvironmentOperation],
            error_mapper=delete_environment_error_mapper,
            request_options=request_options,
        )

    def get_available_restore_periods(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApplicationsEnvironmentsAvailableRestorePeriodsResponse, GetAvailableRestorePeriodsErrorBody]:
        """Returns an ordered list of available restore periods for the environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/availableRestorePeriods"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[ApplicationsEnvironmentsAvailableRestorePeriodsResponse],
            error_mapper=get_available_restore_periods_error_mapper,
            request_options=request_options,
        )

    def get_environment(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentModel, GetEnvironmentErrorBody]:
        """Returns the properties for the specified environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[EnvironmentModel],
            error_mapper=get_environment_error_mapper,
            request_options=request_options,
        )

    def list_all_environments(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApplicationsEnvironmentsResponse, ListAllEnvironmentsErrorBody]:
        """Returns a list of all environments across all application families for the tenant.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/environments"
            ),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[ApplicationsEnvironmentsResponse],
            error_mapper=list_all_environments_error_mapper,
            request_options=request_options,
        )

    def list_environments(
        self, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApplicationsEnvironmentsResponse, ListEnvironmentsErrorBody]:
        """Returns a list of environments for the specified application family.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments"
            ),
            path_params=[param[str]("applicationFamily", application_family)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[ApplicationsEnvironmentsResponse],
            error_mapper=list_environments_error_mapper,
            request_options=request_options,
        )

    def recover_environment(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentOperation, RecoverEnvironmentErrorBody]:
        """Recovers a soft-deleted environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/recover"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[EnvironmentOperation],
            error_mapper=recover_environment_error_mapper,
            request_options=request_options,
        )

    def rename_environment(
        self,
        environment_name: str,
        body: ApplicationsEnvironmentsRenameRequest | ApplicationsEnvironmentsRenameRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentOperation, RenameEnvironmentErrorBody]:
        """Schedules a rename operation on an environment.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/rename"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApplicationsEnvironmentsRenameRequest | ApplicationsEnvironmentsRenameRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[EnvironmentOperation],
            error_mapper=rename_environment_error_mapper,
            request_options=request_options,
        )

    def restore_environment(
        self,
        environment_name: str,
        body: RestoreEnvironmentRequest | RestoreEnvironmentRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentOperation, RestoreEnvironmentErrorBody]:
        """Restores an existing environment from a point in time in the past.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/restore"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RestoreEnvironmentRequest | RestoreEnvironmentRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[EnvironmentOperation],
            error_mapper=restore_environment_error_mapper,
            request_options=request_options,
        )


class AsyncEnvironmentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def copy_environment(
        self,
        environment_name: str,
        body: CopyEnvironmentRequest | CopyEnvironmentRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentModel, CopyEnvironmentErrorBody]:
        """Creates a new environment as a copy of an existing environment's data.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/copy"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CopyEnvironmentRequest | CopyEnvironmentRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[EnvironmentModel],
            error_mapper=copy_environment_error_mapper,
            request_options=request_options,
        )

    async def create_environment(
        self,
        environment_name: str,
        body: CreateEnvironmentRequest | CreateEnvironmentRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentModel, CreateEnvironmentErrorBody]:
        """Creates a new environment with sample data. The operation is asynchronous; poll the environment operations
        endpoint to track status.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateEnvironmentRequest | CreateEnvironmentRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[EnvironmentModel],
            error_mapper=create_environment_error_mapper,
            request_options=request_options,
        )

    async def delete_environment(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentOperation, DeleteEnvironmentErrorBody]:
        """Soft deletes the specified environment. The environment is retained for 14 days during which it can be
        recovered. Environments with status Creating Failed or Removing Failed are permanently deleted immediately.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[EnvironmentOperation],
            error_mapper=delete_environment_error_mapper,
            request_options=request_options,
        )

    async def get_available_restore_periods(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApplicationsEnvironmentsAvailableRestorePeriodsResponse, GetAvailableRestorePeriodsErrorBody]:
        """Returns an ordered list of available restore periods for the environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/availableRestorePeriods"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[ApplicationsEnvironmentsAvailableRestorePeriodsResponse],
            error_mapper=get_available_restore_periods_error_mapper,
            request_options=request_options,
        )

    async def get_environment(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentModel, GetEnvironmentErrorBody]:
        """Returns the properties for the specified environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[EnvironmentModel],
            error_mapper=get_environment_error_mapper,
            request_options=request_options,
        )

    async def list_all_environments(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApplicationsEnvironmentsResponse, ListAllEnvironmentsErrorBody]:
        """Returns a list of all environments across all application families for the tenant.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/environments"
            ),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[ApplicationsEnvironmentsResponse],
            error_mapper=list_all_environments_error_mapper,
            request_options=request_options,
        )

    async def list_environments(
        self, *, application_family: str = "BusinessCentral", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApplicationsEnvironmentsResponse, ListEnvironmentsErrorBody]:
        """Returns a list of environments for the specified application family.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments"
            ),
            path_params=[param[str]("applicationFamily", application_family)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[ApplicationsEnvironmentsResponse],
            error_mapper=list_environments_error_mapper,
            request_options=request_options,
        )

    async def recover_environment(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentOperation, RecoverEnvironmentErrorBody]:
        """Recovers a soft-deleted environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/recover"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[EnvironmentOperation],
            error_mapper=recover_environment_error_mapper,
            request_options=request_options,
        )

    async def rename_environment(
        self,
        environment_name: str,
        body: ApplicationsEnvironmentsRenameRequest | ApplicationsEnvironmentsRenameRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentOperation, RenameEnvironmentErrorBody]:
        """Schedules a rename operation on an environment.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/rename"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApplicationsEnvironmentsRenameRequest | ApplicationsEnvironmentsRenameRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[EnvironmentOperation],
            error_mapper=rename_environment_error_mapper,
            request_options=request_options,
        )

    async def restore_environment(
        self,
        environment_name: str,
        body: RestoreEnvironmentRequest | RestoreEnvironmentRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentOperation, RestoreEnvironmentErrorBody]:
        """Restores an existing environment from a point in time in the past.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/restore"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RestoreEnvironmentRequest | RestoreEnvironmentRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[EnvironmentOperation],
            error_mapper=restore_environment_error_mapper,
            request_options=request_options,
        )
