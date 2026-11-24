from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.fetch_document_content_error import FetchDocumentContentErrorBody, fetch_document_content_error_mapper
from ..errors.fetch_document_error import FetchDocumentErrorBody, fetch_document_error_mapper
from ..errors.upload_document_error import UploadDocumentErrorBody, upload_document_error_mapper
from ..models.document import Document
from ..server.server import Server


class Documents:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DocumentsWithRawResponse(client, server, auth)

    def fetch_document(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Document:
        """Retrieve metadata for an uploaded document (name, MIME type, size, purpose). Document IDs are exactly 14
        alphanumeric characters.

        Args:
            id_: Document ID (doc_*). Exactly 14 alphanumeric characters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document metadata.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.fetch_document(id_, request_options=request_options))

    def fetch_document_content(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse:
        """Retrieve the binary content of a previously uploaded document. Returns the raw file bytes.

        Args:
            id_: Document ID. Exactly 14 alphanumeric characters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document binary content.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.fetch_document_content(id_, request_options=request_options))

    def upload_document(
        self, file: FileInput, purpose: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Document:
        """Upload a file to Razorpay. Returns a document ID that can be used in dispute evidence submissions. Supports
        JPEG, PNG, and PDF formats.

        Args:
            file: File to upload. Supported: JPEG, PNG, PDF.
            purpose: Reason for upload. Example: dispute_evidence.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document uploaded.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.upload_document(file, purpose, request_options=request_options))

    @property
    def with_raw_response(self) -> DocumentsWithRawResponse:
        return self._with_raw_response


class AsyncDocuments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDocumentsWithRawResponse(client, server, auth)

    async def fetch_document(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Document:
        """Retrieve metadata for an uploaded document (name, MIME type, size, purpose). Document IDs are exactly 14
        alphanumeric characters.

        Args:
            id_: Document ID (doc_*). Exactly 14 alphanumeric characters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document metadata.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.fetch_document(id_, request_options=request_options))

    async def fetch_document_content(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Retrieve the binary content of a previously uploaded document. Returns the raw file bytes.

        Args:
            id_: Document ID. Exactly 14 alphanumeric characters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document binary content.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.fetch_document_content(id_, request_options=request_options))

    async def upload_document(
        self, file: AsyncFileInput, purpose: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Document:
        """Upload a file to Razorpay. Returns a document ID that can be used in dispute evidence submissions. Supports
        JPEG, PNG, and PDF formats.

        Args:
            file: File to upload. Supported: JPEG, PNG, PDF.
            purpose: Reason for upload. Example: dispute_evidence.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document uploaded.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.upload_document(file, purpose, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDocumentsWithRawResponse:
        return self._with_raw_response


class DocumentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def fetch_document(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Document, FetchDocumentErrorBody]:
        """Retrieve metadata for an uploaded document (name, MIME type, size, purpose). Document IDs are exactly 14
        alphanumeric characters.

        Args:
            id_: Document ID (doc_*). Exactly 14 alphanumeric characters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/documents/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Document],
            error_mapper=fetch_document_error_mapper,
            request_options=request_options,
        )

    def fetch_document_content(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, FetchDocumentContentErrorBody]:
        """Retrieve the binary content of a previously uploaded document. Returns the raw file bytes.

        Args:
            id_: Document ID. Exactly 14 alphanumeric characters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/documents/{id}/content"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=file_decoder,
            error_mapper=fetch_document_content_error_mapper,
            request_options=request_options,
        )

    def upload_document(
        self, file: FileInput, purpose: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Document, UploadDocumentErrorBody]:
        """Upload a file to Razorpay. Returns a document ID that can be used in dispute evidence submissions. Supports
        JPEG, PNG, and PDF formats.

        Args:
            file: File to upload. Supported: JPEG, PNG, PDF.
            purpose: Reason for upload. Example: dispute_evidence.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/documents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file), param[str]("purpose", purpose)),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Document],
            error_mapper=upload_document_error_mapper,
            request_options=request_options,
        )


class AsyncDocumentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def fetch_document(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Document, FetchDocumentErrorBody]:
        """Retrieve metadata for an uploaded document (name, MIME type, size, purpose). Document IDs are exactly 14
        alphanumeric characters.

        Args:
            id_: Document ID (doc_*). Exactly 14 alphanumeric characters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/documents/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Document],
            error_mapper=fetch_document_error_mapper,
            request_options=request_options,
        )

    async def fetch_document_content(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, FetchDocumentContentErrorBody]:
        """Retrieve the binary content of a previously uploaded document. Returns the raw file bytes.

        Args:
            id_: Document ID. Exactly 14 alphanumeric characters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/documents/{id}/content"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_file_decoder,
            error_mapper=fetch_document_content_error_mapper,
            request_options=request_options,
        )

    async def upload_document(
        self, file: AsyncFileInput, purpose: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Document, UploadDocumentErrorBody]:
        """Upload a file to Razorpay. Returns a document ID that can be used in dispute evidence submissions. Supports
        JPEG, PNG, and PDF formats.

        Args:
            file: File to upload. Supported: JPEG, PNG, PDF.
            purpose: Reason for upload. Example: dispute_evidence.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/documents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file), param[str]("purpose", purpose)),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Document],
            error_mapper=upload_document_error_mapper,
            request_options=request_options,
        )
