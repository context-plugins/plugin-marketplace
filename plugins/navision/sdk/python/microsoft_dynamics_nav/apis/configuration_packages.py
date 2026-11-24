from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncFileInput,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileInput,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    binary_body,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.apply_configuration_package_error import (
    ApplyConfigurationPackageErrorBody,
    apply_configuration_package_error_mapper,
)
from ..errors.create_configuration_package_error import (
    CreateConfigurationPackageErrorBody,
    create_configuration_package_error_mapper,
)
from ..errors.import_configuration_package_error import (
    ImportConfigurationPackageErrorBody,
    import_configuration_package_error_mapper,
)
from ..errors.list_configuration_packages_error import (
    ListConfigurationPackagesErrorBody,
    list_configuration_packages_error_mapper,
)
from ..errors.upload_configuration_package_file_error import (
    UploadConfigurationPackageFileErrorBody,
    upload_configuration_package_file_error_mapper,
)
from ..models.companies_api_configuration_packages_request import (
    CompaniesApiConfigurationPackagesRequest,
    CompaniesApiConfigurationPackagesRequestDict,
)
from ..models.companies_api_configuration_packages_response import CompaniesApiConfigurationPackagesResponse
from ..models.configuration_package import ConfigurationPackage
from ..server.server import Server


class ConfigurationPackages:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ConfigurationPackagesWithRawResponse(client, server, auth)

    def apply_configuration_package(
        self, company_id: UUID, package_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Applies the imported RapidStart configuration package.

        Args:
            company_id: The unique identifier of the company
            package_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Apply initiated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.apply_configuration_package(company_id, package_id, request_options=request_options)
        )

    def create_configuration_package(
        self,
        company_id: UUID,
        body: CompaniesApiConfigurationPackagesRequest | CompaniesApiConfigurationPackagesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ConfigurationPackage:
        """Creates a new RapidStart configuration package record.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Configuration package created

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_configuration_package(company_id, body, request_options=request_options)
        )

    def import_configuration_package(
        self, company_id: UUID, package_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Imports the uploaded RapidStart configuration package.

        Args:
            company_id: The unique identifier of the company
            package_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Import initiated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.import_configuration_package(
                company_id, package_id, request_options=request_options
            ),
        )

    def list_configuration_packages(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesApiConfigurationPackagesResponse:
        """Returns a list of RapidStart configuration packages.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved configuration packages

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_configuration_packages(company_id, request_options=request_options))

    def upload_configuration_package_file(
        self,
        company_id: UUID,
        package_id: UUID,
        code: str,
        if_match: str,
        body: FileInput,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Uploads the RapidStart package file content.

        Args:
            company_id: The unique identifier of the company
            package_id: Value sent with the request.
            code: Value sent with the request.
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Package file uploaded

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.upload_configuration_package_file(
                company_id, package_id, code, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ConfigurationPackagesWithRawResponse:
        return self._with_raw_response


class AsyncConfigurationPackages:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncConfigurationPackagesWithRawResponse(client, server, auth)

    async def apply_configuration_package(
        self, company_id: UUID, package_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Applies the imported RapidStart configuration package.

        Args:
            company_id: The unique identifier of the company
            package_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Apply initiated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.apply_configuration_package(
                company_id, package_id, request_options=request_options
            ),
        )

    async def create_configuration_package(
        self,
        company_id: UUID,
        body: CompaniesApiConfigurationPackagesRequest | CompaniesApiConfigurationPackagesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ConfigurationPackage:
        """Creates a new RapidStart configuration package record.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Configuration package created

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_configuration_package(
                company_id, body, request_options=request_options
            ),
        )

    async def import_configuration_package(
        self, company_id: UUID, package_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Imports the uploaded RapidStart configuration package.

        Args:
            company_id: The unique identifier of the company
            package_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Import initiated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.import_configuration_package(
                company_id, package_id, request_options=request_options
            ),
        )

    async def list_configuration_packages(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesApiConfigurationPackagesResponse:
        """Returns a list of RapidStart configuration packages.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved configuration packages

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_configuration_packages(company_id, request_options=request_options)
        )

    async def upload_configuration_package_file(
        self,
        company_id: UUID,
        package_id: UUID,
        code: str,
        if_match: str,
        body: AsyncFileInput,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Uploads the RapidStart package file content.

        Args:
            company_id: The unique identifier of the company
            package_id: Value sent with the request.
            code: Value sent with the request.
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Package file uploaded

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_configuration_package_file(
                company_id, package_id, code, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncConfigurationPackagesWithRawResponse:
        return self._with_raw_response


class ConfigurationPackagesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def apply_configuration_package(
        self, company_id: UUID, package_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ApplyConfigurationPackageErrorBody]:
        """Applies the imported RapidStart configuration package.

        Args:
            company_id: The unique identifier of the company
            package_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/configurationPackages({package_id})/Microsoft.NAV.apply"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("package_id", package_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=apply_configuration_package_error_mapper,
            request_options=request_options,
        )

    def create_configuration_package(
        self,
        company_id: UUID,
        body: CompaniesApiConfigurationPackagesRequest | CompaniesApiConfigurationPackagesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ConfigurationPackage, CreateConfigurationPackageErrorBody]:
        """Creates a new RapidStart configuration package record.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/configurationPackages"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompaniesApiConfigurationPackagesRequest | CompaniesApiConfigurationPackagesRequestDict](
                body
            ),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[ConfigurationPackage],
            error_mapper=create_configuration_package_error_mapper,
            request_options=request_options,
        )

    def import_configuration_package(
        self, company_id: UUID, package_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, ImportConfigurationPackageErrorBody]:
        """Imports the uploaded RapidStart configuration package.

        Args:
            company_id: The unique identifier of the company
            package_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/configurationPackages({package_id})/Microsoft.NAV.import"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("package_id", package_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=import_configuration_package_error_mapper,
            request_options=request_options,
        )

    def list_configuration_packages(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiConfigurationPackagesResponse, ListConfigurationPackagesErrorBody]:
        """Returns a list of RapidStart configuration packages.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/configurationPackages"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiConfigurationPackagesResponse],
            error_mapper=list_configuration_packages_error_mapper,
            request_options=request_options,
        )

    def upload_configuration_package_file(
        self,
        company_id: UUID,
        package_id: UUID,
        code: str,
        if_match: str,
        body: FileInput,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UploadConfigurationPackageFileErrorBody]:
        """Uploads the RapidStart package file content.

        Args:
            company_id: The unique identifier of the company
            package_id: Value sent with the request.
            code: Value sent with the request.
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/configurationPackages({package_id})/file('{code}')/content"
            ),
            path_params=[
                param[UUID]("company_id", company_id), param[UUID]("package_id", package_id), param[str]("code", code)
            ],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=binary_body(body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=upload_configuration_package_file_error_mapper,
            request_options=request_options,
        )


class AsyncConfigurationPackagesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def apply_configuration_package(
        self, company_id: UUID, package_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ApplyConfigurationPackageErrorBody]:
        """Applies the imported RapidStart configuration package.

        Args:
            company_id: The unique identifier of the company
            package_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/configurationPackages({package_id})/Microsoft.NAV.apply"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("package_id", package_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=apply_configuration_package_error_mapper,
            request_options=request_options,
        )

    async def create_configuration_package(
        self,
        company_id: UUID,
        body: CompaniesApiConfigurationPackagesRequest | CompaniesApiConfigurationPackagesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ConfigurationPackage, CreateConfigurationPackageErrorBody]:
        """Creates a new RapidStart configuration package record.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/configurationPackages"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CompaniesApiConfigurationPackagesRequest | CompaniesApiConfigurationPackagesRequestDict](
                body
            ),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[ConfigurationPackage],
            error_mapper=create_configuration_package_error_mapper,
            request_options=request_options,
        )

    async def import_configuration_package(
        self, company_id: UUID, package_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, ImportConfigurationPackageErrorBody]:
        """Imports the uploaded RapidStart configuration package.

        Args:
            company_id: The unique identifier of the company
            package_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/configurationPackages({package_id})/Microsoft.NAV.import"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("package_id", package_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=import_configuration_package_error_mapper,
            request_options=request_options,
        )

    async def list_configuration_packages(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiConfigurationPackagesResponse, ListConfigurationPackagesErrorBody]:
        """Returns a list of RapidStart configuration packages.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/configurationPackages"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiConfigurationPackagesResponse],
            error_mapper=list_configuration_packages_error_mapper,
            request_options=request_options,
        )

    async def upload_configuration_package_file(
        self,
        company_id: UUID,
        package_id: UUID,
        code: str,
        if_match: str,
        body: AsyncFileInput,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UploadConfigurationPackageFileErrorBody]:
        """Uploads the RapidStart package file content.

        Args:
            company_id: The unique identifier of the company
            package_id: Value sent with the request.
            code: Value sent with the request.
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/configurationPackages({package_id})/file('{code}')/content"
            ),
            path_params=[
                param[UUID]("company_id", company_id), param[UUID]("package_id", package_id), param[str]("code", code)
            ],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=binary_body(body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=upload_configuration_package_file_error_mapper,
            request_options=request_options,
        )
