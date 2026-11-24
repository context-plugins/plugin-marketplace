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
from ..errors.list_all_environment_operations_error import (
    ListAllEnvironmentOperationsErrorBody,
    list_all_environment_operations_error_mapper,
)
from ..errors.list_environment_operations_error import (
    ListEnvironmentOperationsErrorBody,
    list_environment_operations_error_mapper,
)
from ..models.applications_environments_operations_response import ApplicationsEnvironmentsOperationsResponse
from ..models.environments_operations_response import EnvironmentsOperationsResponse
from ..server.server import Server


class EnvironmentOperations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = EnvironmentOperationsWithRawResponse(client, server, auth)

    def list_all_environment_operations(
        self, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None
    ) -> ApplicationsEnvironmentsOperationsResponse:
        """Returns operations that have occurred on all environments for the application family.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved operations

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironment | RawError``."""
        return unwrap(
            self._with_raw_response.list_all_environment_operations(
                application_family=application_family, request_options=request_options
            ),
        )

    def list_environment_operations(
        self, environment_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> EnvironmentsOperationsResponse:
        """Returns a list of operations that have been performed on the environment.

        Args:
            environment_name: The name of the environment
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved operations

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironment | RawError``."""
        return unwrap(
            self._with_raw_response.list_environment_operations(environment_name, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> EnvironmentOperationsWithRawResponse:
        return self._with_raw_response


class AsyncEnvironmentOperations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncEnvironmentOperationsWithRawResponse(client, server, auth)

    async def list_all_environment_operations(
        self, *, application_family: str = "BusinessCentral", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApplicationsEnvironmentsOperationsResponse:
        """Returns operations that have occurred on all environments for the application family.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved operations

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironment | RawError``."""
        return unwrap(
            await self._with_raw_response.list_all_environment_operations(
                application_family=application_family, request_options=request_options
            ),
        )

    async def list_environment_operations(
        self, environment_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EnvironmentsOperationsResponse:
        """Returns a list of operations that have been performed on the environment.

        Args:
            environment_name: The name of the environment
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved operations

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterEnvironment | RawError``."""
        return unwrap(
            await self._with_raw_response.list_environment_operations(environment_name, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncEnvironmentOperationsWithRawResponse:
        return self._with_raw_response


class EnvironmentOperationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_all_environment_operations(
        self, *, application_family: str = "BusinessCentral", request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApplicationsEnvironmentsOperationsResponse, ListAllEnvironmentOperationsErrorBody]:
        """Returns operations that have occurred on all environments for the application family.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/operations"
            ),
            path_params=[param[str]("applicationFamily", application_family)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[ApplicationsEnvironmentsOperationsResponse],
            error_mapper=list_all_environment_operations_error_mapper,
            request_options=request_options,
        )

    def list_environment_operations(
        self, environment_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentsOperationsResponse, ListEnvironmentOperationsErrorBody]:
        """Returns a list of operations that have been performed on the environment.

        Args:
            environment_name: The name of the environment
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/environments/{environmentName}/operations"
            ),
            path_params=[param[str]("environmentName", environment_name)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[EnvironmentsOperationsResponse],
            error_mapper=list_environment_operations_error_mapper,
            request_options=request_options,
        )


class AsyncEnvironmentOperationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_all_environment_operations(
        self, *, application_family: str = "BusinessCentral", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApplicationsEnvironmentsOperationsResponse, ListAllEnvironmentOperationsErrorBody]:
        """Returns operations that have occurred on all environments for the application family.

        Args:
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/applications/{applicationFamily}/environments/operations"
            ),
            path_params=[param[str]("applicationFamily", application_family)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[ApplicationsEnvironmentsOperationsResponse],
            error_mapper=list_all_environment_operations_error_mapper,
            request_options=request_options,
        )

    async def list_environment_operations(
        self, environment_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentsOperationsResponse, ListEnvironmentOperationsErrorBody]:
        """Returns a list of operations that have been performed on the environment.

        Args:
            environment_name: The name of the environment
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/environments/{environmentName}/operations"
            ),
            path_params=[param[str]("environmentName", environment_name)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[EnvironmentsOperationsResponse],
            error_mapper=list_environment_operations_error_mapper,
            request_options=request_options,
        )
