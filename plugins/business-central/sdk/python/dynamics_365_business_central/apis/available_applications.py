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
from ..errors.list_available_countries_error import (
    ListAvailableCountriesErrorBody,
    list_available_countries_error_mapper,
)
from ..errors.list_available_versions_error import ListAvailableVersionsErrorBody, list_available_versions_error_mapper
from ..models.applications_available_application_versions_response import (
    ApplicationsAvailableApplicationVersionsResponse,
)
from ..models.applications_available_countries_response import ApplicationsAvailableCountriesResponse
from ..server.server import Server


class AvailableApplications:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AvailableApplicationsWithRawResponse(client, server, auth)

    def list_available_countries(
        self, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None
    ) -> ApplicationsAvailableCountriesResponse:
        """Returns a list of countries where environments can be created.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved available countries

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterAvailable | RawError``."""
        return unwrap(
            self._with_raw_response.list_available_countries(
                application_family=application_family, request_options=request_options
            ),
        )

    def list_available_versions(
        self, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None
    ) -> ApplicationsAvailableApplicationVersionsResponse:
        """Returns a list of available application versions for the specified application family.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved available versions

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterAvailable | RawError``."""
        return unwrap(
            self._with_raw_response.list_available_versions(
                application_family=application_family, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AvailableApplicationsWithRawResponse:
        return self._with_raw_response


class AsyncAvailableApplications:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAvailableApplicationsWithRawResponse(client, server, auth)

    async def list_available_countries(
        self, *, application_family: str = "BusinessCentral", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApplicationsAvailableCountriesResponse:
        """Returns a list of countries where environments can be created.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved available countries

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterAvailable | RawError``."""
        return unwrap(
            await self._with_raw_response.list_available_countries(
                application_family=application_family, request_options=request_options
            ),
        )

    async def list_available_versions(
        self, *, application_family: str = "BusinessCentral", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApplicationsAvailableApplicationVersionsResponse:
        """Returns a list of available application versions for the specified application family.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved available versions

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterAvailable | RawError``."""
        return unwrap(
            await self._with_raw_response.list_available_versions(
                application_family=application_family, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAvailableApplicationsWithRawResponse:
        return self._with_raw_response


class AvailableApplicationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_available_countries(
        self, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApplicationsAvailableCountriesResponse, ListAvailableCountriesErrorBody]:
        """Returns a list of countries where environments can be created.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/availableCountries"
            ),
            path_params=[param[str]("applicationFamily", application_family)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[ApplicationsAvailableCountriesResponse],
            error_mapper=list_available_countries_error_mapper,
            request_options=request_options,
        )

    def list_available_versions(
        self, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApplicationsAvailableApplicationVersionsResponse, ListAvailableVersionsErrorBody]:
        """Returns a list of available application versions for the specified application family.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/availableApplicationVersions"
            ),
            path_params=[param[str]("applicationFamily", application_family)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[ApplicationsAvailableApplicationVersionsResponse],
            error_mapper=list_available_versions_error_mapper,
            request_options=request_options,
        )


class AsyncAvailableApplicationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_available_countries(
        self, *, application_family: str = "BusinessCentral", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApplicationsAvailableCountriesResponse, ListAvailableCountriesErrorBody]:
        """Returns a list of countries where environments can be created.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/availableCountries"
            ),
            path_params=[param[str]("applicationFamily", application_family)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[ApplicationsAvailableCountriesResponse],
            error_mapper=list_available_countries_error_mapper,
            request_options=request_options,
        )

    async def list_available_versions(
        self, *, application_family: str = "BusinessCentral", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApplicationsAvailableApplicationVersionsResponse, ListAvailableVersionsErrorBody]:
        """Returns a list of available application versions for the specified application family.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/availableApplicationVersions"
            ),
            path_params=[param[str]("applicationFamily", application_family)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[ApplicationsAvailableApplicationVersionsResponse],
            error_mapper=list_available_versions_error_mapper,
            request_options=request_options,
        )
