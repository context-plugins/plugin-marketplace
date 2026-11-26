from __future__ import annotations

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
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_support_settings_error import GetSupportSettingsErrorBody, get_support_settings_error_mapper
from ..models.support_settings import SupportSettings
from ..server.server import Server


class SupportSettingsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SupportSettingsApiWithRawResponse(client, server, auth)

    def get_support_settings(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> SupportSettings:
        """Returns the support contact settings for the specified environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved support settings

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_support_settings(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SupportSettingsApiWithRawResponse:
        return self._with_raw_response


class AsyncSupportSettingsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSupportSettingsApiWithRawResponse(client, server, auth)

    async def get_support_settings(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SupportSettings:
        """Returns the support contact settings for the specified environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved support settings

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_support_settings(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSupportSettingsApiWithRawResponse:
        return self._with_raw_response


class SupportSettingsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_support_settings(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SupportSettings, GetSupportSettingsErrorBody]:
        """Returns the support contact settings for the specified environment.

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
                "/applications/{applicationFamily}/environments/{environmentName}/supportSettings"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[SupportSettings],
            error_mapper=get_support_settings_error_mapper,
            request_options=request_options,
        )


class AsyncSupportSettingsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_support_settings(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SupportSettings, GetSupportSettingsErrorBody]:
        """Returns the support contact settings for the specified environment.

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
                "/applications/{applicationFamily}/environments/{environmentName}/supportSettings"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[SupportSettings],
            error_mapper=get_support_settings_error_mapper,
            request_options=request_options,
        )
