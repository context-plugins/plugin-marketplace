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
from ..errors.get_scheduled_upgrade_error import GetScheduledUpgradeErrorBody, get_scheduled_upgrade_error_mapper
from ..errors.set_update_settings_error import SetUpdateSettingsErrorBody, set_update_settings_error_mapper
from ..models.scheduled_upgrade import ScheduledUpgrade
from ..models.update_settings import UpdateSettings, UpdateSettingsDict
from ..server.server import Server


class UpdateManagement:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UpdateManagementWithRawResponse(client, server, auth)

    def get_scheduled_upgrade(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ScheduledUpgrade:
        """Returns information about any pending scheduled upgrade for the environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved scheduled upgrade information

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_scheduled_upgrade(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    def set_update_settings(
        self,
        environment_name: str,
        body: UpdateSettings | UpdateSettingsDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Sets the update window and other update-related settings for the environment.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update settings applied

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi | RawError``."""
        return unwrap(
            self._with_raw_response.set_update_settings(
                environment_name, body, application_family=application_family, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> UpdateManagementWithRawResponse:
        return self._with_raw_response


class AsyncUpdateManagement:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUpdateManagementWithRawResponse(client, server, auth)

    async def get_scheduled_upgrade(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ScheduledUpgrade:
        """Returns information about any pending scheduled upgrade for the environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved scheduled upgrade information

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_scheduled_upgrade(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    async def set_update_settings(
        self,
        environment_name: str,
        body: UpdateSettings | UpdateSettingsDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Sets the update window and other update-related settings for the environment.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update settings applied

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterUpdateManagementApi | RawError``."""
        return unwrap(
            await self._with_raw_response.set_update_settings(
                environment_name, body, application_family=application_family, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncUpdateManagementWithRawResponse:
        return self._with_raw_response


class UpdateManagementWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_scheduled_upgrade(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ScheduledUpgrade, GetScheduledUpgradeErrorBody]:
        """Returns information about any pending scheduled upgrade for the environment.

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
                "/applications/{applicationFamily}/environments/{environmentName}/scheduledUpgrade"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[ScheduledUpgrade],
            error_mapper=get_scheduled_upgrade_error_mapper,
            request_options=request_options,
        )

    def set_update_settings(
        self,
        environment_name: str,
        body: UpdateSettings | UpdateSettingsDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SetUpdateSettingsErrorBody]:
        """Sets the update window and other update-related settings for the environment.

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
                "/applications/{applicationFamily}/environments/{environmentName}/settings/upgrade"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSettings | UpdateSettingsDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=set_update_settings_error_mapper,
            request_options=request_options,
        )


class AsyncUpdateManagementWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_scheduled_upgrade(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ScheduledUpgrade, GetScheduledUpgradeErrorBody]:
        """Returns information about any pending scheduled upgrade for the environment.

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
                "/applications/{applicationFamily}/environments/{environmentName}/scheduledUpgrade"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[ScheduledUpgrade],
            error_mapper=get_scheduled_upgrade_error_mapper,
            request_options=request_options,
        )

    async def set_update_settings(
        self,
        environment_name: str,
        body: UpdateSettings | UpdateSettingsDict,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SetUpdateSettingsErrorBody]:
        """Sets the update window and other update-related settings for the environment.

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
                "/applications/{applicationFamily}/environments/{environmentName}/settings/upgrade"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSettings | UpdateSettingsDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=set_update_settings_error_mapper,
            request_options=request_options,
        )
