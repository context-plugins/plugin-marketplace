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
from ..errors.get_environment_settings_error import (
    GetEnvironmentSettingsErrorBody,
    get_environment_settings_error_mapper,
)
from ..errors.set_app_insights_key_error import SetAppInsightsKeyErrorBody, set_app_insights_key_error_mapper
from ..models.applications_environments_settings_app_insights_key_request import (
    ApplicationsEnvironmentsSettingsAppInsightsKeyRequest,
    ApplicationsEnvironmentsSettingsAppInsightsKeyRequestDict,
)
from ..models.environment_settings import EnvironmentSettings
from ..server.server import Server


class EnvironmentSettingsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EnvironmentSettingsApiWithRawResponse(client, server, auth)

    def get_environment_settings(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> EnvironmentSettings:
        """Returns settings for the specified environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved environment settings

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings | RawError``."""
        return unwrap(
            self._with_raw_response.get_environment_settings(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    def set_app_insights_key(
        self,
        environment_name: str,
        body: (
            ApplicationsEnvironmentsSettingsAppInsightsKeyRequest
            | ApplicationsEnvironmentsSettingsAppInsightsKeyRequestDict
        ),
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Sets the Azure Application Insights instrumentation key for the environment.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Key set successfully

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings | RawError``."""
        return unwrap(
            self._with_raw_response.set_app_insights_key(
                environment_name, body, application_family=application_family, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> EnvironmentSettingsApiWithRawResponse:
        return self._with_raw_response


class AsyncEnvironmentSettingsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEnvironmentSettingsApiWithRawResponse(client, server, auth)

    async def get_environment_settings(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> EnvironmentSettings:
        """Returns settings for the specified environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved environment settings

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings | RawError``."""
        return unwrap(
            await self._with_raw_response.get_environment_settings(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    async def set_app_insights_key(
        self,
        environment_name: str,
        body: (
            ApplicationsEnvironmentsSettingsAppInsightsKeyRequest
            | ApplicationsEnvironmentsSettingsAppInsightsKeyRequestDict
        ),
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Sets the Azure Application Insights instrumentation key for the environment.

        Args:
            environment_name: The name of the environment
            body: The request body.
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Key set successfully

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironmentSettings | RawError``."""
        return unwrap(
            await self._with_raw_response.set_app_insights_key(
                environment_name, body, application_family=application_family, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncEnvironmentSettingsApiWithRawResponse:
        return self._with_raw_response


class EnvironmentSettingsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_environment_settings(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentSettings, GetEnvironmentSettingsErrorBody]:
        """Returns settings for the specified environment.

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
                "/applications/{applicationFamily}/environments/{environmentName}/settings"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[EnvironmentSettings],
            error_mapper=get_environment_settings_error_mapper,
            request_options=request_options,
        )

    def set_app_insights_key(
        self,
        environment_name: str,
        body: (
            ApplicationsEnvironmentsSettingsAppInsightsKeyRequest
            | ApplicationsEnvironmentsSettingsAppInsightsKeyRequestDict
        ),
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SetAppInsightsKeyErrorBody]:
        """Sets the Azure Application Insights instrumentation key for the environment.

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
                "/applications/{applicationFamily}/environments/{environmentName}/settings/appInsightsKey"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApplicationsEnvironmentsSettingsAppInsightsKeyRequest
                    | ApplicationsEnvironmentsSettingsAppInsightsKeyRequestDict
                )
            ](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=set_app_insights_key_error_mapper,
            request_options=request_options,
        )


class AsyncEnvironmentSettingsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_environment_settings(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[EnvironmentSettings, GetEnvironmentSettingsErrorBody]:
        """Returns settings for the specified environment.

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
                "/applications/{applicationFamily}/environments/{environmentName}/settings"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[EnvironmentSettings],
            error_mapper=get_environment_settings_error_mapper,
            request_options=request_options,
        )

    async def set_app_insights_key(
        self,
        environment_name: str,
        body: (
            ApplicationsEnvironmentsSettingsAppInsightsKeyRequest
            | ApplicationsEnvironmentsSettingsAppInsightsKeyRequestDict
        ),
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SetAppInsightsKeyErrorBody]:
        """Sets the Azure Application Insights instrumentation key for the environment.

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
                "/applications/{applicationFamily}/environments/{environmentName}/settings/appInsightsKey"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    ApplicationsEnvironmentsSettingsAppInsightsKeyRequest
                    | ApplicationsEnvironmentsSettingsAppInsightsKeyRequestDict
                )
            ](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=set_app_insights_key_error_mapper,
            request_options=request_options,
        )
