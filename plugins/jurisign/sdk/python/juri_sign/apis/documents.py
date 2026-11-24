from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileInput,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileInput,
    FileResponse,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_file_decoder,
    async_json_decoder,
    file_decoder,
    file_part,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.delete_document_error import DeleteDocumentErrorBody, delete_document_error_mapper
from ..errors.download_document_error import DownloadDocumentErrorBody, download_document_error_mapper
from ..errors.get_document_error import GetDocumentErrorBody, get_document_error_mapper
from ..errors.list_documents_error import ListDocumentsErrorBody, list_documents_error_mapper
from ..errors.upload_document_error import UploadDocumentErrorBody, upload_document_error_mapper
from ..models.documents_response import DocumentsResponse
from ..models.documents_response1 import DocumentsResponse1
from ..models.enums.status_juri_sign_documents_api import StatusJuriSignDocumentsApiOrStr
from ..models.message_response import MessageResponse
from ..server.server import Server


class Documents:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DocumentsWithRawResponse(client, server, auth)

    def delete_document(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse:
        """Delete a document. Only documents in ``draft`` status can be deleted.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document deleted

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(self._with_raw_response.delete_document(id_, request_options=request_options))

    def download_document(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse:
        """Download the original PDF file.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            PDF file download

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.download_document(id_, request_options=request_options))

    def get_document(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> DocumentsResponse1:
        """Retrieve details of a specific document.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document details

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.get_document(id_, request_options=request_options))

    def list_documents(
        self,
        *,
        status: StatusJuriSignDocumentsApiOrStr | None = None,
        search: str | None = None,
        per_page: int | None = 20,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DocumentsResponse:
        """Retrieve a paginated list of documents belonging to your organization.

        Args:
            status: Filter by document status
            search: Search by document title
            per_page: Results per page (default: 20, max: 100)
            page: Page number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Documents list

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``MessageResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_documents(
                status=status, search=search, per_page=per_page, page=page, request_options=request_options
            ),
        )

    def upload_document(
        self, file: FileInput, *, title: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> DocumentsResponse1:
        """Upload a PDF document. Maximum file size is 20 MB.

        Args:
            file: PDF file to upload (max 20 MB)
            title: Document title (defaults to filename if omitted)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document uploaded

        Raises:
            ApiError: Missing or invalid Bearer token Validation error ``error`` is ``MessageResponse | ValidationError1
                | RawError``."""
        return unwrap(self._with_raw_response.upload_document(file, title=title, request_options=request_options))

    @property
    def with_raw_response(self) -> DocumentsWithRawResponse:
        return self._with_raw_response


class AsyncDocuments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDocumentsWithRawResponse(client, server, auth)

    async def delete_document(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Delete a document. Only documents in ``draft`` status can be deleted.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document deleted

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found Error response ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_document(id_, request_options=request_options))

    async def download_document(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Download the original PDF file.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            PDF file download

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.download_document(id_, request_options=request_options))

    async def get_document(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DocumentsResponse1:
        """Retrieve details of a specific document.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document details

        Raises:
            ApiError: Missing or invalid Bearer token Resource not found ``error`` is ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_document(id_, request_options=request_options))

    async def list_documents(
        self,
        *,
        status: StatusJuriSignDocumentsApiOrStr | None = None,
        search: str | None = None,
        per_page: int | None = 20,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DocumentsResponse:
        """Retrieve a paginated list of documents belonging to your organization.

        Args:
            status: Filter by document status
            search: Search by document title
            per_page: Results per page (default: 20, max: 100)
            page: Page number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Documents list

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``MessageResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_documents(
                status=status, search=search, per_page=per_page, page=page, request_options=request_options
            ),
        )

    async def upload_document(
        self,
        file: AsyncFileInput,
        *,
        title: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DocumentsResponse1:
        """Upload a PDF document. Maximum file size is 20 MB.

        Args:
            file: PDF file to upload (max 20 MB)
            title: Document title (defaults to filename if omitted)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document uploaded

        Raises:
            ApiError: Missing or invalid Bearer token Validation error ``error`` is ``MessageResponse | ValidationError1
                | RawError``."""
        return unwrap(await self._with_raw_response.upload_document(file, title=title, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDocumentsWithRawResponse:
        return self._with_raw_response


class DocumentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_document(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteDocumentErrorBody]:
        """Delete a document. Only documents in ``draft`` status can be deleted.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/documents/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MessageResponse],
            error_mapper=delete_document_error_mapper,
            request_options=request_options,
        )

    def download_document(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DownloadDocumentErrorBody]:
        """Download the original PDF file.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/documents/{id}/download"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=file_decoder,
            error_mapper=download_document_error_mapper,
            request_options=request_options,
        )

    def get_document(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DocumentsResponse1, GetDocumentErrorBody]:
        """Retrieve details of a specific document.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/documents/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DocumentsResponse1],
            error_mapper=get_document_error_mapper,
            request_options=request_options,
        )

    def list_documents(
        self,
        *,
        status: StatusJuriSignDocumentsApiOrStr | None = None,
        search: str | None = None,
        per_page: int | None = 20,
        page: int | None = 1,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DocumentsResponse, ListDocumentsErrorBody]:
        """Retrieve a paginated list of documents belonging to your organization.

        Args:
            status: Filter by document status
            search: Search by document title
            per_page: Results per page (default: 20, max: 100)
            page: Page number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/documents"),
            query_params=[
                param[StatusJuriSignDocumentsApiOrStr | None]("status", status),
                param[str | None]("search", search),
                param[int | None]("per_page", per_page),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DocumentsResponse],
            error_mapper=list_documents_error_mapper,
            request_options=request_options,
        )

    def upload_document(
        self, file: FileInput, *, title: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DocumentsResponse1, UploadDocumentErrorBody]:
        """Upload a PDF document. Maximum file size is 20 MB.

        Args:
            file: PDF file to upload (max 20 MB)
            title: Document title (defaults to filename if omitted)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/documents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file), param[str | None]("title", title)),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DocumentsResponse1],
            error_mapper=upload_document_error_mapper,
            request_options=request_options,
        )


class AsyncDocumentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_document(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteDocumentErrorBody]:
        """Delete a document. Only documents in ``draft`` status can be deleted.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/documents/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=delete_document_error_mapper,
            request_options=request_options,
        )

    async def download_document(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DownloadDocumentErrorBody]:
        """Download the original PDF file.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/documents/{id}/download"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_file_decoder,
            error_mapper=download_document_error_mapper,
            request_options=request_options,
        )

    async def get_document(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DocumentsResponse1, GetDocumentErrorBody]:
        """Retrieve details of a specific document.

        Args:
            id_: Resource UUID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/documents/{id}"),
            path_params=[param[UUID]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DocumentsResponse1],
            error_mapper=get_document_error_mapper,
            request_options=request_options,
        )

    async def list_documents(
        self,
        *,
        status: StatusJuriSignDocumentsApiOrStr | None = None,
        search: str | None = None,
        per_page: int | None = 20,
        page: int | None = 1,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DocumentsResponse, ListDocumentsErrorBody]:
        """Retrieve a paginated list of documents belonging to your organization.

        Args:
            status: Filter by document status
            search: Search by document title
            per_page: Results per page (default: 20, max: 100)
            page: Page number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/documents"),
            query_params=[
                param[StatusJuriSignDocumentsApiOrStr | None]("status", status),
                param[str | None]("search", search),
                param[int | None]("per_page", per_page),
                param[int | None]("page", page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DocumentsResponse],
            error_mapper=list_documents_error_mapper,
            request_options=request_options,
        )

    async def upload_document(
        self,
        file: AsyncFileInput,
        *,
        title: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DocumentsResponse1, UploadDocumentErrorBody]:
        """Upload a PDF document. Maximum file size is 20 MB.

        Args:
            file: PDF file to upload (max 20 MB)
            title: Document title (defaults to filename if omitted)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/documents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file), param[str | None]("title", title)),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DocumentsResponse1],
            error_mapper=upload_document_error_mapper,
            request_options=request_options,
        )
