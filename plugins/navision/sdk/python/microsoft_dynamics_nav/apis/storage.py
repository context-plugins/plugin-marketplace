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
from ..errors.get_all_environments_storage_error import (
    GetAllEnvironmentsStorageErrorBody,
    get_all_environments_storage_error_mapper,
)
from ..errors.get_environment_storage_error import GetEnvironmentStorageErrorBody, get_environment_storage_error_mapper
from ..errors.get_quotas_error import GetQuotasErrorBody, get_quotas_error_mapper
from ..models.environments_usedstorage_response import EnvironmentsUsedstorageResponse
from ..models.quotas import Quotas
from ..models.used_storage import UsedStorage
from ..server.server import Server


class Storage:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StorageWithRawResponse(client, server, auth)

    def get_all_environments_storage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> EnvironmentsUsedstorageResponse:
        """Returns storage usage information for all environments.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved storage usage

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterStorageApi | RawError``."""
        return unwrap(self._with_raw_response.get_all_environments_storage(request_options=request_options))

    def get_environment_storage(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> UsedStorage:
        """Returns used storage information for the specified environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved storage usage

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterStorageApi | RawError``."""
        return unwrap(
            self._with_raw_response.get_environment_storage(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    def get_quotas(self, *, request_options: RequestOptionsOrDict | None = None) -> Quotas:
        """Returns the different types of quotas and their limits.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved quotas

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterStorageApi | RawError``."""
        return unwrap(self._with_raw_response.get_quotas(request_options=request_options))

    @property
    def with_raw_response(self) -> StorageWithRawResponse:
        return self._with_raw_response


class AsyncStorage:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStorageWithRawResponse(client, server, auth)

    async def get_all_environments_storage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> EnvironmentsUsedstorageResponse:
        """Returns storage usage information for all environments.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved storage usage

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterStorageApi | RawError``."""
        return unwrap(await self._with_raw_response.get_all_environments_storage(request_options=request_options))

    async def get_environment_storage(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UsedStorage:
        """Returns used storage information for the specified environment.

        Args:
            environment_name: The name of the environment
            application_family: The application family (e.g., BusinessCentral)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved storage usage

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterStorageApi | RawError``."""
        return unwrap(
            await self._with_raw_response.get_environment_storage(
                environment_name, application_family=application_family, request_options=request_options
            ),
        )

    async def get_quotas(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Quotas:
        """Returns the different types of quotas and their limits.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved quotas

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is
                ``ErrorResponseBusinessCentralAdministrationCenterStorageApi | RawError``."""
        return unwrap(await self._with_raw_response.get_quotas(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncStorageWithRawResponse:
        return self._with_raw_response


class StorageWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_all_environments_storage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentsUsedstorageResponse, GetAllEnvironmentsStorageErrorBody]:
        """Returns storage usage information for all environments.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/environments/usedstorage"
            ),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[EnvironmentsUsedstorageResponse],
            error_mapper=get_all_environments_storage_error_mapper,
            request_options=request_options,
        )

    def get_environment_storage(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UsedStorage, GetEnvironmentStorageErrorBody]:
        """Returns used storage information for the specified environment.

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
                "/applications/{applicationFamily}/environments/{environmentName}/usedstorage"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[UsedStorage],
            error_mapper=get_environment_storage_error_mapper,
            request_options=request_options,
        )

    def get_quotas(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Quotas, GetQuotasErrorBody]:
        """Returns the different types of quotas and their limits.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/environments/quotas"
            ),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[Quotas],
            error_mapper=get_quotas_error_mapper,
            request_options=request_options,
        )


class AsyncStorageWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_all_environments_storage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[EnvironmentsUsedstorageResponse, GetAllEnvironmentsStorageErrorBody]:
        """Returns storage usage information for all environments.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/environments/usedstorage"
            ),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[EnvironmentsUsedstorageResponse],
            error_mapper=get_all_environments_storage_error_mapper,
            request_options=request_options,
        )

    async def get_environment_storage(
        self,
        environment_name: str,
        *,
        application_family: str = "BusinessCentral",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UsedStorage, GetEnvironmentStorageErrorBody]:
        """Returns used storage information for the specified environment.

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
                "/applications/{applicationFamily}/environments/{environmentName}/usedstorage"
            ),
            path_params=[
                param[str]("applicationFamily", application_family), param[str]("environmentName", environment_name)
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[UsedStorage],
            error_mapper=get_environment_storage_error_mapper,
            request_options=request_options,
        )

    async def get_quotas(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Quotas, GetQuotasErrorBody]:
        """Returns the different types of quotas and their limits.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_administration_center_app_management_api(
                "/environments/quotas"
            ),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[Quotas],
            error_mapper=get_quotas_error_mapper,
            request_options=request_options,
        )
