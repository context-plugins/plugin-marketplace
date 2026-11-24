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
from ..errors.install_app_error import InstallAppErrorBody, install_app_error_mapper
from ..errors.list_installed_apps_error import ListInstalledAppsErrorBody, list_installed_apps_error_mapper
from ..errors.uninstall_app_error import UninstallAppErrorBody, uninstall_app_error_mapper
from ..errors.update_app_error import UpdateAppErrorBody, update_app_error_mapper
from ..models.app_install_request import AppInstallRequest, AppInstallRequestDict
from ..models.app_update_request import AppUpdateRequest, AppUpdateRequestDict
from ..models.applications_environments_apps_app_id_uninstall_request import (
    ApplicationsEnvironmentsAppsAppIdUninstallRequest,
    ApplicationsEnvironmentsAppsAppIdUninstallRequestDict,
)
from ..models.applications_environments_apps_response import ApplicationsEnvironmentsAppsResponse
from ..models.environment_operation import EnvironmentOperation
from ..server.server import Server


class AppManagement:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AppManagementWithRawResponse(client, server, auth)

    def install_app(
        self,
        environment_name: str,
        app_id: UUID,
        body: AppInstallRequest | AppInstallRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentOperation:
        """Installs the specified app in the environment.

        Args:
            environment_name: The name of the environment
            app_id: Value sent with the request.
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            App installation scheduled

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterAppManagementApi | RawError``."""
        return unwrap(
            self._with_raw_response.install_app(
                environment_name, app_id, body, application_family=application_family, request_options=request_options
            ),
        )

    def list_installed_apps(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApplicationsEnvironmentsAppsResponse:
        """Returns a list of apps installed in the specified environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved installed apps

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterAppManagementApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_installed_apps(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    def uninstall_app(
        self,
        environment_name: str,
        app_id: UUID,
        *,
        application_family: str = "BusinessCentral",
        body: (
            ApplicationsEnvironmentsAppsAppIdUninstallRequest
            | ApplicationsEnvironmentsAppsAppIdUninstallRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentOperation:
        """Uninstalls the specified app from the environment.

        Args:
            environment_name: The name of the environment
            app_id: Value sent with the request.
            application_family: The application family (e.g., BusinessCentral)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            App uninstallation scheduled

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterAppManagementApi | RawError``."""
        return unwrap(
            self._with_raw_response.uninstall_app(
                environment_name,
                app_id,
                application_family=application_family,
                body=body,
                request_options=request_options,
            ),
        )

    def update_app(
        self,
        environment_name: str,
        app_id: UUID,
        body: AppUpdateRequest | AppUpdateRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentOperation:
        """Schedules an update of the specified app to a newer version.

        Args:
            environment_name: The name of the environment
            app_id: Value sent with the request.
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            App update scheduled

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterAppManagementApi | RawError``."""
        return unwrap(
            self._with_raw_response.update_app(
                environment_name, app_id, body, application_family=application_family, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AppManagementWithRawResponse:
        return self._with_raw_response


class AsyncAppManagement:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAppManagementWithRawResponse(client, server, auth)

    async def install_app(
        self,
        environment_name: str,
        app_id: UUID,
        body: AppInstallRequest | AppInstallRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentOperation:
        """Installs the specified app in the environment.

        Args:
            environment_name: The name of the environment
            app_id: Value sent with the request.
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            App installation scheduled

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterAppManagementApi | RawError``."""
        return unwrap(
            await self._with_raw_response.install_app(
                environment_name, app_id, body, application_family=application_family, request_options=request_options
            ),
        )

    async def list_installed_apps(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApplicationsEnvironmentsAppsResponse:
        """Returns a list of apps installed in the specified environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved installed apps

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterAppManagementApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_installed_apps(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    async def uninstall_app(
        self,
        environment_name: str,
        app_id: UUID,
        *,
        application_family: str = "BusinessCentral",
        body: (
            ApplicationsEnvironmentsAppsAppIdUninstallRequest
            | ApplicationsEnvironmentsAppsAppIdUninstallRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentOperation:
        """Uninstalls the specified app from the environment.

        Args:
            environment_name: The name of the environment
            app_id: Value sent with the request.
            application_family: The application family (e.g., BusinessCentral)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            App uninstallation scheduled

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterAppManagementApi | RawError``."""
        return unwrap(
            await self._with_raw_response.uninstall_app(
                environment_name,
                app_id,
                application_family=application_family,
                body=body,
                request_options=request_options,
            ),
        )

    async def update_app(
        self,
        environment_name: str,
        app_id: UUID,
        body: AppUpdateRequest | AppUpdateRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentOperation:
        """Schedules an update of the specified app to a newer version.

        Args:
            environment_name: The name of the environment
            app_id: Value sent with the request.
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            App update scheduled

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterAppManagementApi | RawError``."""
        return unwrap(
            await self._with_raw_response.update_app(
                environment_name, app_id, body, application_family=application_family, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAppManagementWithRawResponse:
        return self._with_raw_response


class AppManagementWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def install_app(
        self,
        environment_name: str,
        app_id: UUID,
        body: AppInstallRequest | AppInstallRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentOperation, InstallAppErrorBody]:
        """Installs the specified app in the environment.

        Args:
            environment_name: The name of the environment
            app_id: Value sent with the request.
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/install"
            ),
            path_params=[
                param[str]("applicationFamily", application_family),
                param[str]("environmentName", environment_name),
                param[UUID]("appId", app_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AppInstallRequest | AppInstallRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[EnvironmentOperation],
            error_mapper=install_app_error_mapper,
            request_options=request_options,
        )

    def list_installed_apps(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApplicationsEnvironmentsAppsResponse, ListInstalledAppsErrorBody]:
        """Returns a list of apps installed in the specified environment.

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
                "/applications/{applicationFamily}/environments/{environmentName}/apps"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[ApplicationsEnvironmentsAppsResponse],
            error_mapper=list_installed_apps_error_mapper,
            request_options=request_options,
        )

    def uninstall_app(
        self,
        environment_name: str,
        app_id: UUID,
        *,
        application_family: str = "BusinessCentral",
        body: (
            ApplicationsEnvironmentsAppsAppIdUninstallRequest
            | ApplicationsEnvironmentsAppsAppIdUninstallRequestDict
            | None
        ) = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentOperation, UninstallAppErrorBody]:
        """Uninstalls the specified app from the environment.

        Args:
            environment_name: The name of the environment
            app_id: Value sent with the request.
            application_family: The application family (e.g., BusinessCentral)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/uninstall"
            ),
            path_params=[
                param[str]("applicationFamily", application_family),
                param[str]("environmentName", environment_name),
                param[UUID]("appId", app_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApplicationsEnvironmentsAppsAppIdUninstallRequest
                    | ApplicationsEnvironmentsAppsAppIdUninstallRequestDict
                    | None
                )
            ](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[EnvironmentOperation],
            error_mapper=uninstall_app_error_mapper,
            request_options=request_options,
        )

    def update_app(
        self,
        environment_name: str,
        app_id: UUID,
        body: AppUpdateRequest | AppUpdateRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentOperation, UpdateAppErrorBody]:
        """Schedules an update of the specified app to a newer version.

        Args:
            environment_name: The name of the environment
            app_id: Value sent with the request.
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/update"
            ),
            path_params=[
                param[str]("applicationFamily", application_family),
                param[str]("environmentName", environment_name),
                param[UUID]("appId", app_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AppUpdateRequest | AppUpdateRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[EnvironmentOperation],
            error_mapper=update_app_error_mapper,
            request_options=request_options,
        )


class AsyncAppManagementWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def install_app(
        self,
        environment_name: str,
        app_id: UUID,
        body: AppInstallRequest | AppInstallRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentOperation, InstallAppErrorBody]:
        """Installs the specified app in the environment.

        Args:
            environment_name: The name of the environment
            app_id: Value sent with the request.
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/install"
            ),
            path_params=[
                param[str]("applicationFamily", application_family),
                param[str]("environmentName", environment_name),
                param[UUID]("appId", app_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AppInstallRequest | AppInstallRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[EnvironmentOperation],
            error_mapper=install_app_error_mapper,
            request_options=request_options,
        )

    async def list_installed_apps(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApplicationsEnvironmentsAppsResponse, ListInstalledAppsErrorBody]:
        """Returns a list of apps installed in the specified environment.

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
                "/applications/{applicationFamily}/environments/{environmentName}/apps"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[ApplicationsEnvironmentsAppsResponse],
            error_mapper=list_installed_apps_error_mapper,
            request_options=request_options,
        )

    async def uninstall_app(
        self,
        environment_name: str,
        app_id: UUID,
        *,
        application_family: str = "BusinessCentral",
        body: (
            ApplicationsEnvironmentsAppsAppIdUninstallRequest
            | ApplicationsEnvironmentsAppsAppIdUninstallRequestDict
            | None
        ) = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentOperation, UninstallAppErrorBody]:
        """Uninstalls the specified app from the environment.

        Args:
            environment_name: The name of the environment
            app_id: Value sent with the request.
            application_family: The application family (e.g., BusinessCentral)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/uninstall"
            ),
            path_params=[
                param[str]("applicationFamily", application_family),
                param[str]("environmentName", environment_name),
                param[UUID]("appId", app_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApplicationsEnvironmentsAppsAppIdUninstallRequest
                    | ApplicationsEnvironmentsAppsAppIdUninstallRequestDict
                    | None
                )
            ](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[EnvironmentOperation],
            error_mapper=uninstall_app_error_mapper,
            request_options=request_options,
        )

    async def update_app(
        self,
        environment_name: str,
        app_id: UUID,
        body: AppUpdateRequest | AppUpdateRequestDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentOperation, UpdateAppErrorBody]:
        """Schedules an update of the specified app to a newer version.

        Args:
            environment_name: The name of the environment
            app_id: Value sent with the request.
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/{environmentName}/apps/{appId}/update"
            ),
            path_params=[
                param[str]("applicationFamily", application_family),
                param[str]("environmentName", environment_name),
                param[UUID]("appId", app_id),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AppUpdateRequest | AppUpdateRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[EnvironmentOperation],
            error_mapper=update_app_error_mapper,
            request_options=request_options,
        )
