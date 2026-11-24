from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_doc_error import CreateDocErrorBody, create_doc_error_mapper
from ..errors.delete_doc_error import DeleteDocErrorBody, delete_doc_error_mapper
from ..errors.get_doc_error import GetDocErrorBody, get_doc_error_mapper
from ..errors.link_document_to_epic_error import LinkDocumentToEpicErrorBody, link_document_to_epic_error_mapper
from ..errors.list_docs_error import ListDocsErrorBody, list_docs_error_mapper
from ..errors.list_document_epics_error import ListDocumentEpicsErrorBody, list_document_epics_error_mapper
from ..errors.unlink_document_from_epic_error import (
    UnlinkDocumentFromEpicErrorBody,
    unlink_document_from_epic_error_mapper,
)
from ..errors.update_doc_error import UpdateDocErrorBody, update_doc_error_mapper
from ..models.create_doc import CreateDoc, CreateDocDict
from ..models.doc import Doc
from ..models.doc_slim import DocSlim
from ..models.enums.content_format3 import ContentFormat3OrStr
from ..models.epic_slim import EpicSlim
from ..models.get_doc import GetDoc, GetDocDict
from ..models.update_doc import UpdateDoc, UpdateDocDict
from ..server.server import Server


class Documents:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DocumentsWithRawResponse(client, server, auth)

    def create_doc(
        self, body: CreateDoc | CreateDocDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> DocSlim:
        """Creates a new Doc. Supports markdown or HTML input via content_format parameter.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DisabledFeatureError |
                RawError``."""
        return unwrap(self._with_raw_response.create_doc(body, request_options=request_options))

    def delete_doc(
        self, doc_public_id: UUID, body: GetDoc | GetDocDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Permanently deletes a Doc and its associated data. Requires admin access to the doc. When a document is
        deleted, connected clients will be notified via SSE events.

        Args:
            doc_public_id: The Doc's public ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DisabledFeatureError |
                RawError``."""
        return unwrap(self._with_raw_response.delete_doc(doc_public_id, body, request_options=request_options))

    def get_doc(
        self,
        doc_public_id: UUID,
        *,
        content_format: ContentFormat3OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Doc:
        """Get a Doc by its public ID with content. Use content_format=html query parameter to include HTML content.

        Args:
            doc_public_id: The Doc's public ID
            content_format: Format of the content to return. Defaults to 'markdown'. If 'html', includes HTML content in
                response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DisabledFeatureError |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_doc(
                doc_public_id, content_format=content_format, request_options=request_options
            ),
        )

    def link_document_to_epic(
        self, doc_public_id: UUID, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Create a relationship between a Document and an Epic.

        Args:
            doc_public_id: The public ID of the Document.
            epic_public_id: The public ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist **Either:** (1) Unprocessable **or** (2) ``error`` is
                ``DisabledFeatureError | UnprocessableError | RawError``."""
        return unwrap(
            self._with_raw_response.link_document_to_epic(
                doc_public_id, epic_public_id, request_options=request_options
            ),
        )

    def list_docs(self, *, request_options: RequestOptionsOrDict | None = None) -> list[DocSlim]:
        """List Docs returns a list of Doc that the current user can read.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DisabledFeatureError |
                RawError``."""
        return unwrap(self._with_raw_response.list_docs(request_options=request_options))

    def list_document_epics(
        self, doc_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[EpicSlim]:
        """Get a list of all Epics related to this Document.

        Args:
            doc_public_id: The public ID of the Document.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DisabledFeatureError |
                RawError``."""
        return unwrap(self._with_raw_response.list_document_epics(doc_public_id, request_options=request_options))

    def unlink_document_from_epic(
        self, doc_public_id: UUID, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Remove a relationship between a Document and an Epic.

        Args:
            doc_public_id: The public ID of the Document.
            epic_public_id: The public ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DisabledFeatureError |
                RawError``."""
        return unwrap(
            self._with_raw_response.unlink_document_from_epic(
                doc_public_id, epic_public_id, request_options=request_options
            ),
        )

    def update_doc(
        self,
        doc_public_id: UUID,
        body: UpdateDoc | UpdateDocDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Doc:
        """Updates an existing Doc's title and/or content. Supports markdown or HTML input via content_format parameter.
        When a document is updated: (1) For Tiptap-migrated docs, SSE events notify connected Tiptap clients to refresh.
        (2) For non-migrated docs, CKEditor cache is flushed and SSE events notify connected CKEditor users.

        Args:
            doc_public_id: The Doc's public ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DisabledFeatureError |
                RawError``."""
        return unwrap(self._with_raw_response.update_doc(doc_public_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> DocumentsWithRawResponse:
        return self._with_raw_response


class AsyncDocuments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDocumentsWithRawResponse(client, server, auth)

    async def create_doc(
        self, body: CreateDoc | CreateDocDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DocSlim:
        """Creates a new Doc. Supports markdown or HTML input via content_format parameter.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DisabledFeatureError |
                RawError``."""
        return unwrap(await self._with_raw_response.create_doc(body, request_options=request_options))

    async def delete_doc(
        self,
        doc_public_id: UUID,
        body: GetDoc | GetDocDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Permanently deletes a Doc and its associated data. Requires admin access to the doc. When a document is
        deleted, connected clients will be notified via SSE events.

        Args:
            doc_public_id: The Doc's public ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DisabledFeatureError |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_doc(doc_public_id, body, request_options=request_options))

    async def get_doc(
        self,
        doc_public_id: UUID,
        *,
        content_format: ContentFormat3OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Doc:
        """Get a Doc by its public ID with content. Use content_format=html query parameter to include HTML content.

        Args:
            doc_public_id: The Doc's public ID
            content_format: Format of the content to return. Defaults to 'markdown'. If 'html', includes HTML content in
                response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DisabledFeatureError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_doc(
                doc_public_id, content_format=content_format, request_options=request_options
            ),
        )

    async def link_document_to_epic(
        self, doc_public_id: UUID, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Create a relationship between a Document and an Epic.

        Args:
            doc_public_id: The public ID of the Document.
            epic_public_id: The public ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist **Either:** (1) Unprocessable **or** (2) ``error`` is
                ``DisabledFeatureError | UnprocessableError | RawError``."""
        return unwrap(
            await self._with_raw_response.link_document_to_epic(
                doc_public_id, epic_public_id, request_options=request_options
            ),
        )

    async def list_docs(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[DocSlim]:
        """List Docs returns a list of Doc that the current user can read.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DisabledFeatureError |
                RawError``."""
        return unwrap(await self._with_raw_response.list_docs(request_options=request_options))

    async def list_document_epics(
        self, doc_public_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[EpicSlim]:
        """Get a list of all Epics related to this Document.

        Args:
            doc_public_id: The public ID of the Document.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DisabledFeatureError |
                RawError``."""
        return unwrap(await self._with_raw_response.list_document_epics(doc_public_id, request_options=request_options))

    async def unlink_document_from_epic(
        self, doc_public_id: UUID, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Remove a relationship between a Document and an Epic.

        Args:
            doc_public_id: The public ID of the Document.
            epic_public_id: The public ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DisabledFeatureError |
                RawError``."""
        return unwrap(
            await self._with_raw_response.unlink_document_from_epic(
                doc_public_id, epic_public_id, request_options=request_options
            ),
        )

    async def update_doc(
        self,
        doc_public_id: UUID,
        body: UpdateDoc | UpdateDocDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Doc:
        """Updates an existing Doc's title and/or content. Supports markdown or HTML input via content_format parameter.
        When a document is updated: (1) For Tiptap-migrated docs, SSE events notify connected Tiptap clients to refresh.
        (2) For non-migrated docs, CKEditor cache is flushed and SSE events notify connected CKEditor users.

        Args:
            doc_public_id: The Doc's public ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``DisabledFeatureError |
                RawError``."""
        return unwrap(await self._with_raw_response.update_doc(doc_public_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDocumentsWithRawResponse:
        return self._with_raw_response


class DocumentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_doc(
        self, body: CreateDoc | CreateDocDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DocSlim, CreateDocErrorBody]:
        """Creates a new Doc. Supports markdown or HTML input via content_format parameter.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/documents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateDoc | CreateDocDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[DocSlim],
            error_mapper=create_doc_error_mapper,
            request_options=request_options,
        )

    def delete_doc(
        self, doc_public_id: UUID, body: GetDoc | GetDocDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteDocErrorBody]:
        """Permanently deletes a Doc and its associated data. Requires admin access to the doc. When a document is
        deleted, connected clients will be notified via SSE events.

        Args:
            doc_public_id: The Doc's public ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/documents/{doc-public-id}"),
            path_params=[param[UUID]("doc-public-id", doc_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetDoc | GetDocDict](body),
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_doc_error_mapper,
            request_options=request_options,
        )

    def get_doc(
        self,
        doc_public_id: UUID,
        *,
        content_format: ContentFormat3OrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Doc, GetDocErrorBody]:
        """Get a Doc by its public ID with content. Use content_format=html query parameter to include HTML content.

        Args:
            doc_public_id: The Doc's public ID
            content_format: Format of the content to return. Defaults to 'markdown'. If 'html', includes HTML content in
                response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/documents/{doc-public-id}"),
            path_params=[param[UUID]("doc-public-id", doc_public_id)],
            query_params=[param[ContentFormat3OrStr | None]("content_format", content_format)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Doc],
            error_mapper=get_doc_error_mapper,
            request_options=request_options,
        )

    def link_document_to_epic(
        self, doc_public_id: UUID, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, LinkDocumentToEpicErrorBody]:
        """Create a relationship between a Document and an Epic.

        Args:
            doc_public_id: The public ID of the Document.
            epic_public_id: The public ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/documents/{doc-public-id}/epics/{epic-public-id}"),
            path_params=[param[UUID]("doc-public-id", doc_public_id), param[int]("epic-public-id", epic_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=link_document_to_epic_error_mapper,
            request_options=request_options,
        )

    def list_docs(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[DocSlim], ListDocsErrorBody]:
        """List Docs returns a list of Doc that the current user can read.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/documents"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[DocSlim]],
            error_mapper=list_docs_error_mapper,
            request_options=request_options,
        )

    def list_document_epics(
        self, doc_public_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[EpicSlim], ListDocumentEpicsErrorBody]:
        """Get a list of all Epics related to this Document.

        Args:
            doc_public_id: The public ID of the Document.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/documents/{doc-public-id}/epics"),
            path_params=[param[UUID]("doc-public-id", doc_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[EpicSlim]],
            error_mapper=list_document_epics_error_mapper,
            request_options=request_options,
        )

    def unlink_document_from_epic(
        self, doc_public_id: UUID, epic_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, UnlinkDocumentFromEpicErrorBody]:
        """Remove a relationship between a Document and an Epic.

        Args:
            doc_public_id: The public ID of the Document.
            epic_public_id: The public ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/documents/{doc-public-id}/epics/{epic-public-id}"),
            path_params=[param[UUID]("doc-public-id", doc_public_id), param[int]("epic-public-id", epic_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=unlink_document_from_epic_error_mapper,
            request_options=request_options,
        )

    def update_doc(
        self,
        doc_public_id: UUID,
        body: UpdateDoc | UpdateDocDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Doc, UpdateDocErrorBody]:
        """Updates an existing Doc's title and/or content. Supports markdown or HTML input via content_format parameter.
        When a document is updated: (1) For Tiptap-migrated docs, SSE events notify connected Tiptap clients to refresh.
        (2) For non-migrated docs, CKEditor cache is flushed and SSE events notify connected CKEditor users.

        Args:
            doc_public_id: The Doc's public ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/documents/{doc-public-id}"),
            path_params=[param[UUID]("doc-public-id", doc_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateDoc | UpdateDocDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Doc],
            error_mapper=update_doc_error_mapper,
            request_options=request_options,
        )


class AsyncDocumentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_doc(
        self, body: CreateDoc | CreateDocDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DocSlim, CreateDocErrorBody]:
        """Creates a new Doc. Supports markdown or HTML input via content_format parameter.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/documents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateDoc | CreateDocDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[DocSlim],
            error_mapper=create_doc_error_mapper,
            request_options=request_options,
        )

    async def delete_doc(
        self,
        doc_public_id: UUID,
        body: GetDoc | GetDocDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteDocErrorBody]:
        """Permanently deletes a Doc and its associated data. Requires admin access to the doc. When a document is
        deleted, connected clients will be notified via SSE events.

        Args:
            doc_public_id: The Doc's public ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/documents/{doc-public-id}"),
            path_params=[param[UUID]("doc-public-id", doc_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetDoc | GetDocDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_doc_error_mapper,
            request_options=request_options,
        )

    async def get_doc(
        self,
        doc_public_id: UUID,
        *,
        content_format: ContentFormat3OrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Doc, GetDocErrorBody]:
        """Get a Doc by its public ID with content. Use content_format=html query parameter to include HTML content.

        Args:
            doc_public_id: The Doc's public ID
            content_format: Format of the content to return. Defaults to 'markdown'. If 'html', includes HTML content in
                response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/documents/{doc-public-id}"),
            path_params=[param[UUID]("doc-public-id", doc_public_id)],
            query_params=[param[ContentFormat3OrStr | None]("content_format", content_format)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Doc],
            error_mapper=get_doc_error_mapper,
            request_options=request_options,
        )

    async def link_document_to_epic(
        self, doc_public_id: UUID, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, LinkDocumentToEpicErrorBody]:
        """Create a relationship between a Document and an Epic.

        Args:
            doc_public_id: The public ID of the Document.
            epic_public_id: The public ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/documents/{doc-public-id}/epics/{epic-public-id}"),
            path_params=[param[UUID]("doc-public-id", doc_public_id), param[int]("epic-public-id", epic_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=link_document_to_epic_error_mapper,
            request_options=request_options,
        )

    async def list_docs(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[DocSlim], ListDocsErrorBody]:
        """List Docs returns a list of Doc that the current user can read.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/documents"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[DocSlim]],
            error_mapper=list_docs_error_mapper,
            request_options=request_options,
        )

    async def list_document_epics(
        self, doc_public_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[EpicSlim], ListDocumentEpicsErrorBody]:
        """Get a list of all Epics related to this Document.

        Args:
            doc_public_id: The public ID of the Document.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/documents/{doc-public-id}/epics"),
            path_params=[param[UUID]("doc-public-id", doc_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[EpicSlim]],
            error_mapper=list_document_epics_error_mapper,
            request_options=request_options,
        )

    async def unlink_document_from_epic(
        self, doc_public_id: UUID, epic_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UnlinkDocumentFromEpicErrorBody]:
        """Remove a relationship between a Document and an Epic.

        Args:
            doc_public_id: The public ID of the Document.
            epic_public_id: The public ID of the Epic.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/documents/{doc-public-id}/epics/{epic-public-id}"),
            path_params=[param[UUID]("doc-public-id", doc_public_id), param[int]("epic-public-id", epic_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=unlink_document_from_epic_error_mapper,
            request_options=request_options,
        )

    async def update_doc(
        self,
        doc_public_id: UUID,
        body: UpdateDoc | UpdateDocDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Doc, UpdateDocErrorBody]:
        """Updates an existing Doc's title and/or content. Supports markdown or HTML input via content_format parameter.
        When a document is updated: (1) For Tiptap-migrated docs, SSE events notify connected Tiptap clients to refresh.
        (2) For non-migrated docs, CKEditor cache is flushed and SSE events notify connected CKEditor users.

        Args:
            doc_public_id: The Doc's public ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/documents/{doc-public-id}"),
            path_params=[param[UUID]("doc-public-id", doc_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateDoc | UpdateDocDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Doc],
            error_mapper=update_doc_error_mapper,
            request_options=request_options,
        )
