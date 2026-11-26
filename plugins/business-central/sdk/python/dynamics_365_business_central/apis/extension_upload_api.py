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
from ..errors.create_extension_upload_error import CreateExtensionUploadErrorBody, create_extension_upload_error_mapper
from ..errors.install_uploaded_extension_error import (
    InstallUploadedExtensionErrorBody,
    install_uploaded_extension_error_mapper,
)
from ..errors.upload_extension_file_error import UploadExtensionFileErrorBody, upload_extension_file_error_mapper
from ..models.extension_upload import ExtensionUpload
from ..models.extension_upload_create import ExtensionUploadCreate, ExtensionUploadCreateDict
from ..server.server import Server


class ExtensionUploadApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExtensionUploadApiWithRawResponse(client, server, auth)

    def create_extension_upload(
        self,
        company_id: UUID,
        body: ExtensionUploadCreate | ExtensionUploadCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ExtensionUpload:
        """Creates an extension upload record for uploading a per-tenant extension.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extension upload record created

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_extension_upload(company_id, body, request_options=request_options)
        )

    def install_uploaded_extension(
        self, company_id: UUID, extension_upload_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Triggers the installation of a previously uploaded per-tenant extension.

        Args:
            company_id: The unique identifier of the company
            extension_upload_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extension installation initiated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.install_uploaded_extension(
                company_id, extension_upload_id, request_options=request_options
            ),
        )

    def upload_extension_file(
        self,
        company_id: UUID,
        extension_upload_id: UUID,
        if_match: str,
        body: FileInput,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Uploads the extension file content to the extension upload record.

        Args:
            company_id: The unique identifier of the company
            extension_upload_id: Value sent with the request.
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extension file uploaded

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.upload_extension_file(
                company_id, extension_upload_id, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ExtensionUploadApiWithRawResponse:
        return self._with_raw_response


class AsyncExtensionUploadApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExtensionUploadApiWithRawResponse(client, server, auth)

    async def create_extension_upload(
        self,
        company_id: UUID,
        body: ExtensionUploadCreate | ExtensionUploadCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ExtensionUpload:
        """Creates an extension upload record for uploading a per-tenant extension.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extension upload record created

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_extension_upload(company_id, body, request_options=request_options)
        )

    async def install_uploaded_extension(
        self, company_id: UUID, extension_upload_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Triggers the installation of a previously uploaded per-tenant extension.

        Args:
            company_id: The unique identifier of the company
            extension_upload_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extension installation initiated

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.install_uploaded_extension(
                company_id, extension_upload_id, request_options=request_options
            ),
        )

    async def upload_extension_file(
        self,
        company_id: UUID,
        extension_upload_id: UUID,
        if_match: str,
        body: AsyncFileInput,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Uploads the extension file content to the extension upload record.

        Args:
            company_id: The unique identifier of the company
            extension_upload_id: Value sent with the request.
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Extension file uploaded

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_extension_file(
                company_id, extension_upload_id, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncExtensionUploadApiWithRawResponse:
        return self._with_raw_response


class ExtensionUploadApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_extension_upload(
        self,
        company_id: UUID,
        body: ExtensionUploadCreate | ExtensionUploadCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ExtensionUpload, CreateExtensionUploadErrorBody]:
        """Creates an extension upload record for uploading a per-tenant extension.

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
                "/companies({company_id})/extensionUpload"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExtensionUploadCreate | ExtensionUploadCreateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[ExtensionUpload],
            error_mapper=create_extension_upload_error_mapper,
            request_options=request_options,
        )

    def install_uploaded_extension(
        self, company_id: UUID, extension_upload_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, InstallUploadedExtensionErrorBody]:
        """Triggers the installation of a previously uploaded per-tenant extension.

        Args:
            company_id: The unique identifier of the company
            extension_upload_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/extensionUpload({extensionUpload_id})/Microsoft.NAV.upload"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("extensionUpload_id", extension_upload_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=install_uploaded_extension_error_mapper,
            request_options=request_options,
        )

    def upload_extension_file(
        self,
        company_id: UUID,
        extension_upload_id: UUID,
        if_match: str,
        body: FileInput,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UploadExtensionFileErrorBody]:
        """Uploads the extension file content to the extension upload record.

        Args:
            company_id: The unique identifier of the company
            extension_upload_id: Value sent with the request.
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/extensionUpload({extensionUpload_id})/extensionContent"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("extensionUpload_id", extension_upload_id)],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=binary_body(body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=upload_extension_file_error_mapper,
            request_options=request_options,
        )


class AsyncExtensionUploadApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_extension_upload(
        self,
        company_id: UUID,
        body: ExtensionUploadCreate | ExtensionUploadCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ExtensionUpload, CreateExtensionUploadErrorBody]:
        """Creates an extension upload record for uploading a per-tenant extension.

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
                "/companies({company_id})/extensionUpload"
            ),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ExtensionUploadCreate | ExtensionUploadCreateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[ExtensionUpload],
            error_mapper=create_extension_upload_error_mapper,
            request_options=request_options,
        )

    async def install_uploaded_extension(
        self, company_id: UUID, extension_upload_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, InstallUploadedExtensionErrorBody]:
        """Triggers the installation of a previously uploaded per-tenant extension.

        Args:
            company_id: The unique identifier of the company
            extension_upload_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/extensionUpload({extensionUpload_id})/Microsoft.NAV.upload"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("extensionUpload_id", extension_upload_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=install_uploaded_extension_error_mapper,
            request_options=request_options,
        )

    async def upload_extension_file(
        self,
        company_id: UUID,
        extension_upload_id: UUID,
        if_match: str,
        body: AsyncFileInput,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UploadExtensionFileErrorBody]:
        """Uploads the extension file content to the extension upload record.

        Args:
            company_id: The unique identifier of the company
            extension_upload_id: Value sent with the request.
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_business_central_automation_api_v2_0_companies_api(
                "/companies({company_id})/extensionUpload({extensionUpload_id})/extensionContent"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("extensionUpload_id", extension_upload_id)],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=binary_body(body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=upload_extension_file_error_mapper,
            request_options=request_options,
        )
