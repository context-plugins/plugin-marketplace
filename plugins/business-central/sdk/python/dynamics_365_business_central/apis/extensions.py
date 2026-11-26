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
    json_decoder,
    param,
    unwrap,
)
from ..errors.install_extension_error import InstallExtensionErrorBody, install_extension_error_mapper
from ..errors.list_extensions_error import ListExtensionsErrorBody, list_extensions_error_mapper
from ..errors.uninstall_and_delete_extension_data_error import (
    UninstallAndDeleteExtensionDataErrorBody,
    uninstall_and_delete_extension_data_error_mapper,
)
from ..errors.uninstall_extension_error import UninstallExtensionErrorBody, uninstall_extension_error_mapper
from ..errors.unpublish_extension_error import UnpublishExtensionErrorBody, unpublish_extension_error_mapper
from ..models.companies_api_extensions_response import CompaniesApiExtensionsResponse
from ..server.server import Server


class Extensions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExtensionsWithRawResponse(client, server, auth)

    def install_extension(
        self, company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Installs a published extension on the tenant.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extension installation initiated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.install_extension(company_id, extension_id, request_options=request_options)
        )

    def list_extensions(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompaniesApiExtensionsResponse:
        """Returns a list of extensions published to the tenant.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved extensions

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_extensions(company_id, request_options=request_options))

    def uninstall_and_delete_extension_data(
        self, company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Uninstalls an extension and deletes all data owned by the extension. This action cannot be undone.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extension uninstallation and data deletion initiated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.uninstall_and_delete_extension_data(
                company_id, extension_id, request_options=request_options
            ),
        )

    def uninstall_extension(
        self, company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Uninstalls an extension from the tenant.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extension uninstallation initiated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.uninstall_extension(company_id, extension_id, request_options=request_options)
        )

    def unpublish_extension(
        self, company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Unpublishes an uninstalled extension from the tenant.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extension unpublished

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.unpublish_extension(company_id, extension_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ExtensionsWithRawResponse:
        return self._with_raw_response


class AsyncExtensions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExtensionsWithRawResponse(client, server, auth)

    async def install_extension(
        self, company_id: UUID, extension_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Installs a published extension on the tenant.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extension installation initiated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.install_extension(company_id, extension_id, request_options=request_options)
        )

    async def list_extensions(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompaniesApiExtensionsResponse:
        """Returns a list of extensions published to the tenant.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved extensions

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.list_extensions(company_id, request_options=request_options))

    async def uninstall_and_delete_extension_data(
        self, company_id: UUID, extension_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Uninstalls an extension and deletes all data owned by the extension. This action cannot be undone.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extension uninstallation and data deletion initiated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.uninstall_and_delete_extension_data(
                company_id, extension_id, request_options=request_options
            ),
        )

    async def uninstall_extension(
        self, company_id: UUID, extension_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Uninstalls an extension from the tenant.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extension uninstallation initiated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.uninstall_extension(company_id, extension_id, request_options=request_options)
        )

    async def unpublish_extension(
        self, company_id: UUID, extension_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Unpublishes an uninstalled extension from the tenant.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extension unpublished

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.unpublish_extension(company_id, extension_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncExtensionsWithRawResponse:
        return self._with_raw_response


class ExtensionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def install_extension(
        self, company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, InstallExtensionErrorBody]:
        """Installs a published extension on the tenant.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.install"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("extension_id", extension_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=install_extension_error_mapper,
            request_options=request_options,
        )

    def list_extensions(
        self, company_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiExtensionsResponse, ListExtensionsErrorBody]:
        """Returns a list of extensions published to the tenant.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/extensions"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiExtensionsResponse],
            error_mapper=list_extensions_error_mapper,
            request_options=request_options,
        )

    def uninstall_and_delete_extension_data(
        self, company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UninstallAndDeleteExtensionDataErrorBody]:
        """Uninstalls an extension and deletes all data owned by the extension. This action cannot be undone.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.uninstallAndDeleteExtensionData"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("extension_id", extension_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=uninstall_and_delete_extension_data_error_mapper,
            request_options=request_options,
        )

    def uninstall_extension(
        self, company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UninstallExtensionErrorBody]:
        """Uninstalls an extension from the tenant.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.uninstall"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("extension_id", extension_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=uninstall_extension_error_mapper,
            request_options=request_options,
        )

    def unpublish_extension(
        self, company_id: UUID, extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UnpublishExtensionErrorBody]:
        """Unpublishes an uninstalled extension from the tenant.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.unpublish"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("extension_id", extension_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=unpublish_extension_error_mapper,
            request_options=request_options,
        )


class AsyncExtensionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def install_extension(
        self, company_id: UUID, extension_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, InstallExtensionErrorBody]:
        """Installs a published extension on the tenant.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.install"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("extension_id", extension_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=install_extension_error_mapper,
            request_options=request_options,
        )

    async def list_extensions(
        self, company_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompaniesApiExtensionsResponse, ListExtensionsErrorBody]:
        """Returns a list of extensions published to the tenant.

        Args:
            company_id: The unique identifier of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/extensions"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiExtensionsResponse],
            error_mapper=list_extensions_error_mapper,
            request_options=request_options,
        )

    async def uninstall_and_delete_extension_data(
        self, company_id: UUID, extension_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UninstallAndDeleteExtensionDataErrorBody]:
        """Uninstalls an extension and deletes all data owned by the extension. This action cannot be undone.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.uninstallAndDeleteExtensionData"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("extension_id", extension_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=uninstall_and_delete_extension_data_error_mapper,
            request_options=request_options,
        )

    async def uninstall_extension(
        self, company_id: UUID, extension_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UninstallExtensionErrorBody]:
        """Uninstalls an extension from the tenant.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.uninstall"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("extension_id", extension_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=uninstall_extension_error_mapper,
            request_options=request_options,
        )

    async def unpublish_extension(
        self, company_id: UUID, extension_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UnpublishExtensionErrorBody]:
        """Unpublishes an uninstalled extension from the tenant.

        Args:
            company_id: The unique identifier of the company
            extension_id: The package ID of the extension
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/extensions({extension_id})/Microsoft.NAV.unpublish"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("extension_id", extension_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=unpublish_extension_error_mapper,
            request_options=request_options,
        )
