from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileResponse,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_file_decoder,
    async_json_decoder,
    empty_response,
    file_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.delete_document_error import DeleteDocumentErrorBody, delete_document_error_mapper
from ..errors.get_document_content_error import GetDocumentContentErrorBody, get_document_content_error_mapper
from ..errors.get_document_metadata_error import GetDocumentMetadataErrorBody, get_document_metadata_error_mapper
from ..errors.get_document_preview_error import GetDocumentPreviewErrorBody, get_document_preview_error_mapper
from ..errors.get_documents_error import GetDocumentsErrorBody, get_documents_error_mapper
from ..errors.upload_document_error import UploadDocumentErrorBody, upload_document_error_mapper
from ..models.document_content_response import DocumentContentResponse
from ..models.document_response import DocumentResponse
from ..models.upload_document_request import UploadDocumentRequest, UploadDocumentRequestDict
from ..server.server import Server


class DocumentApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DocumentApiWithRawResponse(client, server, auth)

    def delete_document(self, doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Deletes a ``Document`` by its ID. Deletion behaves similarly to deleting a ``SignatureRequest`` and does not
        necessarily remove the object from the system immediately.

        If more than one participant is involved, the DELETE request only removes the current user from the
        ``Document``.

        The system permanently removes the ``Document`` once the last user deletes it via the Skribble web application.

        **Async cascade note:** If the ``Document``'s parent ``SignatureRequest`` was recently deleted, the server-side
        cascade that removes associated documents runs asynchronously. During this window the document is still listed
        by ``GET /documents`` but returns ``403 Forbidden`` on delete attempts. Retry after a few seconds — the document
        will either have been removed by the cascade or the delete will succeed.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Not found Too many requests Internal server error Service
                unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.delete_document(doc_id, request_options=request_options))

    def get_document_content(
        self, doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> DocumentContentResponse:
        """Downloads the content of the document identified by its ID. Returns either a PDF binary or a JSON object
        containing a Base64-encoded PDF.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            PDF or JSON with Base64-encoded PDF

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.get_document_content(doc_id, request_options=request_options))

    def get_document_metadata(
        self, doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> DocumentResponse:
        """Fetches the metadata for the ``Document`` identified by its ID.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.get_document_metadata(doc_id, request_options=request_options))

    def get_document_preview(
        self,
        doc_id: UUID,
        page_id: int,
        *,
        scale: float | None = 100.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Returns a preview image for a specific page of the uploaded PDF document. Page numbering starts at **0** for
        the first page.

        > Use the optional ``scale`` parameter to control the preview size:
        > ``scale=100`` returns a full-size preview, while ``scale=20`` returns a
        > thumbnail.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            page_id: Page ID of the document
            scale: The scaling factor for the image.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Preview image

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            self._with_raw_response.get_document_preview(doc_id, page_id, scale=scale, request_options=request_options)
        )

    def get_documents(self, *, request_options: RequestOptionsOrDict | None = None) -> list[DocumentResponse]:
        """Returns an array of all accessible ``Document`` objects.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not acceptable Too many requests Internal server error Service
                unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.get_documents(request_options=request_options))

    def upload_document(
        self,
        body: UploadDocumentRequest | UploadDocumentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DocumentResponse:
        """Upload using a **Base64 encoded** file as ``content``.

        **Content size limits**: Very large uploads are rejected by the gateway in front of the API before the request
        reaches it, returning a ``403 Forbidden`` response. This currently returns a plain body instead of the standard
        Problem+JSON error envelope used elsewhere in this API; a fix to align it is planned.

        Args:
            body: Request body to create a Document object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Access denied Not acceptable Too many requests Internal server error
                Service unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.upload_document(body, request_options=request_options))

    @property
    def with_raw_response(self) -> DocumentApiWithRawResponse:
        return self._with_raw_response


class AsyncDocumentApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDocumentApiWithRawResponse(client, server, auth)

    async def delete_document(self, doc_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Deletes a ``Document`` by its ID. Deletion behaves similarly to deleting a ``SignatureRequest`` and does not
        necessarily remove the object from the system immediately.

        If more than one participant is involved, the DELETE request only removes the current user from the
        ``Document``.

        The system permanently removes the ``Document`` once the last user deletes it via the Skribble web application.

        **Async cascade note:** If the ``Document``'s parent ``SignatureRequest`` was recently deleted, the server-side
        cascade that removes associated documents runs asynchronously. During this window the document is still listed
        by ``GET /documents`` but returns ``403 Forbidden`` on delete attempts. Retry after a few seconds — the document
        will either have been removed by the cascade or the delete will succeed.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Access denied Not found Too many requests Internal server error Service
                unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.delete_document(doc_id, request_options=request_options))

    async def get_document_content(
        self, doc_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DocumentContentResponse:
        """Downloads the content of the document identified by its ID. Returns either a PDF binary or a JSON object
        containing a Base64-encoded PDF.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            PDF or JSON with Base64-encoded PDF

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.get_document_content(doc_id, request_options=request_options))

    async def get_document_metadata(
        self, doc_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DocumentResponse:
        """Fetches the metadata for the ``Document`` identified by its ID.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.get_document_metadata(doc_id, request_options=request_options))

    async def get_document_preview(
        self,
        doc_id: UUID,
        page_id: int,
        *,
        scale: float | None = 100.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Returns a preview image for a specific page of the uploaded PDF document. Page numbering starts at **0** for
        the first page.

        > Use the optional ``scale`` parameter to control the preview size:
        > ``scale=100`` returns a full-size preview, while ``scale=20`` returns a
        > thumbnail.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            page_id: Page ID of the document
            scale: The scaling factor for the image.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Preview image

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(
            await self._with_raw_response.get_document_preview(
                doc_id, page_id, scale=scale, request_options=request_options
            ),
        )

    async def get_documents(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[DocumentResponse]:
        """Returns an array of all accessible ``Document`` objects.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not acceptable Too many requests Internal server error Service
                unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.get_documents(request_options=request_options))

    async def upload_document(
        self,
        body: UploadDocumentRequest | UploadDocumentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DocumentResponse:
        """Upload using a **Base64 encoded** file as ``content``.

        **Content size limits**: Very large uploads are rejected by the gateway in front of the API before the request
        reaches it, returning a ``403 Forbidden`` response. This currently returns a plain body instead of the standard
        Problem+JSON error envelope used elsewhere in this API; a fix to align it is planned.

        Args:
            body: Request body to create a Document object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad request Unauthorized Access denied Not acceptable Too many requests Internal server error
                Service unavailable ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.upload_document(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDocumentApiWithRawResponse:
        return self._with_raw_response


class DocumentApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_document(
        self, doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDocumentErrorBody]:
        """Deletes a ``Document`` by its ID. Deletion behaves similarly to deleting a ``SignatureRequest`` and does not
        necessarily remove the object from the system immediately.

        If more than one participant is involved, the DELETE request only removes the current user from the
        ``Document``.

        The system permanently removes the ``Document`` once the last user deletes it via the Skribble web application.

        **Async cascade note:** If the ``Document``'s parent ``SignatureRequest`` was recently deleted, the server-side
        cascade that removes associated documents runs asynchronously. During this window the document is still listed
        by ``GET /documents`` but returns ``403 Forbidden`` on delete attempts. Retry after a few seconds — the document
        will either have been removed by the cascade or the delete will succeed.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_document_api("/documents/{DOC_ID}"),
            path_params=[param[UUID]("DOC_ID", doc_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=empty_response,
            error_mapper=delete_document_error_mapper,
            request_options=request_options,
        )

    def get_document_content(
        self, doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DocumentContentResponse, GetDocumentContentErrorBody]:
        """Downloads the content of the document identified by its ID. Returns either a PDF binary or a JSON object
        containing a Base64-encoded PDF.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_document_api("/documents/{DOC_ID}/content"),
            path_params=[param[UUID]("DOC_ID", doc_id)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[DocumentContentResponse],
            error_mapper=get_document_content_error_mapper,
            request_options=request_options,
        )

    def get_document_metadata(
        self, doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DocumentResponse, GetDocumentMetadataErrorBody]:
        """Fetches the metadata for the ``Document`` identified by its ID.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_document_api("/documents/{DOC_ID}"),
            path_params=[param[UUID]("DOC_ID", doc_id)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[DocumentResponse],
            error_mapper=get_document_metadata_error_mapper,
            request_options=request_options,
        )

    def get_document_preview(
        self,
        doc_id: UUID,
        page_id: int,
        *,
        scale: float | None = 100.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, GetDocumentPreviewErrorBody]:
        """Returns a preview image for a specific page of the uploaded PDF document. Page numbering starts at **0** for
        the first page.

        > Use the optional ``scale`` parameter to control the preview size:
        > ``scale=100`` returns a full-size preview, while ``scale=20`` returns a
        > thumbnail.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            page_id: Page ID of the document
            scale: The scaling factor for the image.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_document_api("/documents/{DOC_ID}/pages/{PAGE_ID}"),
            path_params=[param[UUID]("DOC_ID", doc_id), param[int]("PAGE_ID", page_id)],
            query_params=[param[float | None]("scale", scale)],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=get_document_preview_error_mapper,
            request_options=request_options,
        )

    def get_documents(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[DocumentResponse], GetDocumentsErrorBody]:
        """Returns an array of all accessible ``Document`` objects.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_document_api("/documents"),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[list[DocumentResponse]],
            error_mapper=get_documents_error_mapper,
            request_options=request_options,
        )

    def upload_document(
        self,
        body: UploadDocumentRequest | UploadDocumentRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DocumentResponse, UploadDocumentErrorBody]:
        """Upload using a **Base64 encoded** file as ``content``.

        **Content size limits**: Very large uploads are rejected by the gateway in front of the API before the request
        reaches it, returning a ``403 Forbidden`` response. This currently returns a plain body instead of the standard
        Problem+JSON error envelope used elsewhere in this API; a fix to align it is planned.

        Args:
            body: Request body to create a Document object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_document_api("/documents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UploadDocumentRequest | UploadDocumentRequestDict](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[DocumentResponse],
            error_mapper=upload_document_error_mapper,
            request_options=request_options,
        )


class AsyncDocumentApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_document(
        self, doc_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDocumentErrorBody]:
        """Deletes a ``Document`` by its ID. Deletion behaves similarly to deleting a ``SignatureRequest`` and does not
        necessarily remove the object from the system immediately.

        If more than one participant is involved, the DELETE request only removes the current user from the
        ``Document``.

        The system permanently removes the ``Document`` once the last user deletes it via the Skribble web application.

        **Async cascade note:** If the ``Document``'s parent ``SignatureRequest`` was recently deleted, the server-side
        cascade that removes associated documents runs asynchronously. During this window the document is still listed
        by ``GET /documents`` but returns ``403 Forbidden`` on delete attempts. Retry after a few seconds — the document
        will either have been removed by the cascade or the delete will succeed.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_skribble_document_api("/documents/{DOC_ID}"),
            path_params=[param[UUID]("DOC_ID", doc_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_empty_response,
            error_mapper=delete_document_error_mapper,
            request_options=request_options,
        )

    async def get_document_content(
        self, doc_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DocumentContentResponse, GetDocumentContentErrorBody]:
        """Downloads the content of the document identified by its ID. Returns either a PDF binary or a JSON object
        containing a Base64-encoded PDF.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_document_api("/documents/{DOC_ID}/content"),
            path_params=[param[UUID]("DOC_ID", doc_id)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[DocumentContentResponse],
            error_mapper=get_document_content_error_mapper,
            request_options=request_options,
        )

    async def get_document_metadata(
        self, doc_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DocumentResponse, GetDocumentMetadataErrorBody]:
        """Fetches the metadata for the ``Document`` identified by its ID.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_document_api("/documents/{DOC_ID}"),
            path_params=[param[UUID]("DOC_ID", doc_id)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[DocumentResponse],
            error_mapper=get_document_metadata_error_mapper,
            request_options=request_options,
        )

    async def get_document_preview(
        self,
        doc_id: UUID,
        page_id: int,
        *,
        scale: float | None = 100.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, GetDocumentPreviewErrorBody]:
        """Returns a preview image for a specific page of the uploaded PDF document. Page numbering starts at **0** for
        the first page.

        > Use the optional ``scale`` parameter to control the preview size:
        > ``scale=100`` returns a full-size preview, while ``scale=20`` returns a
        > thumbnail.

        Args:
            doc_id: Unique ID received when creating the Document Request object
            page_id: Page ID of the document
            scale: The scaling factor for the image.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_document_api("/documents/{DOC_ID}/pages/{PAGE_ID}"),
            path_params=[param[UUID]("DOC_ID", doc_id), param[int]("PAGE_ID", page_id)],
            query_params=[param[float | None]("scale", scale)],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=get_document_preview_error_mapper,
            request_options=request_options,
        )

    async def get_documents(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[DocumentResponse], GetDocumentsErrorBody]:
        """Returns an array of all accessible ``Document`` objects.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_document_api("/documents"),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[list[DocumentResponse]],
            error_mapper=get_documents_error_mapper,
            request_options=request_options,
        )

    async def upload_document(
        self,
        body: UploadDocumentRequest | UploadDocumentRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DocumentResponse, UploadDocumentErrorBody]:
        """Upload using a **Base64 encoded** file as ``content``.

        **Content size limits**: Very large uploads are rejected by the gateway in front of the API before the request
        reaches it, returning a ``403 Forbidden`` response. This currently returns a plain body instead of the standard
        Problem+JSON error envelope used elsewhere in this API; a fix to align it is planned.

        Args:
            body: Request body to create a Document object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_skribble_document_api("/documents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UploadDocumentRequest | UploadDocumentRequestDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[DocumentResponse],
            error_mapper=upload_document_error_mapper,
            request_options=request_options,
        )
