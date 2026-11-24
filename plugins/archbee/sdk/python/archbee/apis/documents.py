from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileInput,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileInput,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    file_part,
    json_body,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.delete_document_error import DeleteDocumentErrorBody, delete_document_error_mapper
from ..errors.get_document_error import GetDocumentErrorBody, get_document_error_mapper
from ..errors.import_content_error import ImportContentErrorBody, import_content_error_mapper
from ..errors.search_document_error import SearchDocumentErrorBody, search_document_error_mapper
from ..errors.update_create_document_error import UpdateCreateDocumentErrorBody, update_create_document_error_mapper
from ..models.doc_request import DocRequest, DocRequestDict
from ..models.doc_request1 import DocRequest1, DocRequest1Dict
from ..models.doc_response import DocResponse
from ..models.doc_response1 import DocResponse1
from ..models.doc_response2 import DocResponse2
from ..models.docs_search_request import DocsSearchRequest, DocsSearchRequestDict
from ..models.docs_search_response import DocsSearchResponse
from ..models.enums.type1 import Type1, Type1OrStr
from ..models.import_content_response import ImportContentResponse
from ..server.server import Server


class Documents:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DocumentsWithRawResponse(client, server, auth)

    def delete_document(
        self, body: DocRequest | DocRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> DocResponse:
        """Delete document by docId

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete status

        Raises:
            ApiError: Invalid request ``error`` is ``Doc400Error1 | RawError``."""
        return unwrap(self._with_raw_response.delete_document(body, request_options=request_options))

    def get_document(self, *, request_options: RequestOptionsOrDict | None = None) -> DocResponse1:
        """Retrieve a document in markdown, html, json, or source format.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response containing the document content.

        Raises:
            ApiError: Invalid request parameters. ``error`` is ``Doc400Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_document(request_options=request_options))

    def import_content(
        self,
        file: FileInput,
        *,
        type_: Type1OrStr | None = Type1.MARKDOWN,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ImportContentResponse:
        """Create new Doc from imported markdown file. In case of zip file, create a new docTree and keeps archived tree
        structure.

        Args:
            file: Markdown file (.md) or archive (.zip) containing multiple markdown files.
            type_: Type of import file. Only markdown supported for now on this route.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Import OK status

        Raises:
            ApiError: Invalid request ``error`` is ``ImportContent400Error1 | RawError``."""
        return unwrap(self._with_raw_response.import_content(file, type_=type_, request_options=request_options))

    def search_document(
        self, body: DocsSearchRequest | DocsSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> DocsSearchResponse:
        """Search Archbee documents in docSpace. Can perform one of the 3 types of search:

        ai-chat to return ai generative answer accompanied by source docs; ai-retrieval to return just similar docs with
        the query; words to perform normal search aka. "word-based"; use empty query to return all docs single-doc to
        return document info by id

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Process status

        Raises:
            ApiError: Invalid request ``error`` is ``DocsSearch400Error1 | RawError``."""
        return unwrap(self._with_raw_response.search_document(body, request_options=request_options))

    def update_create_document(
        self, body: DocRequest1 | DocRequest1Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> DocResponse2:
        """Create / Update Doc by docId

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Process status

        Raises:
            ApiError: Invalid request ``error`` is ``Doc400Error1 | RawError``."""
        return unwrap(self._with_raw_response.update_create_document(body, request_options=request_options))

    @property
    def with_raw_response(self) -> DocumentsWithRawResponse:
        return self._with_raw_response


class AsyncDocuments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDocumentsWithRawResponse(client, server, auth)

    async def delete_document(
        self, body: DocRequest | DocRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DocResponse:
        """Delete document by docId

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete status

        Raises:
            ApiError: Invalid request ``error`` is ``Doc400Error1 | RawError``."""
        return unwrap(await self._with_raw_response.delete_document(body, request_options=request_options))

    async def get_document(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> DocResponse1:
        """Retrieve a document in markdown, html, json, or source format.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response containing the document content.

        Raises:
            ApiError: Invalid request parameters. ``error`` is ``Doc400Error1 | RawError``."""
        return unwrap(await self._with_raw_response.get_document(request_options=request_options))

    async def import_content(
        self,
        file: AsyncFileInput,
        *,
        type_: Type1OrStr | None = Type1.MARKDOWN,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ImportContentResponse:
        """Create new Doc from imported markdown file. In case of zip file, create a new docTree and keeps archived tree
        structure.

        Args:
            file: Markdown file (.md) or archive (.zip) containing multiple markdown files.
            type_: Type of import file. Only markdown supported for now on this route.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Import OK status

        Raises:
            ApiError: Invalid request ``error`` is ``ImportContent400Error1 | RawError``."""
        return unwrap(await self._with_raw_response.import_content(file, type_=type_, request_options=request_options))

    async def search_document(
        self,
        body: DocsSearchRequest | DocsSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DocsSearchResponse:
        """Search Archbee documents in docSpace. Can perform one of the 3 types of search:

        ai-chat to return ai generative answer accompanied by source docs; ai-retrieval to return just similar docs with
        the query; words to perform normal search aka. "word-based"; use empty query to return all docs single-doc to
        return document info by id

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Process status

        Raises:
            ApiError: Invalid request ``error`` is ``DocsSearch400Error1 | RawError``."""
        return unwrap(await self._with_raw_response.search_document(body, request_options=request_options))

    async def update_create_document(
        self, body: DocRequest1 | DocRequest1Dict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DocResponse2:
        """Create / Update Doc by docId

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Process status

        Raises:
            ApiError: Invalid request ``error`` is ``Doc400Error1 | RawError``."""
        return unwrap(await self._with_raw_response.update_create_document(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDocumentsWithRawResponse:
        return self._with_raw_response


class DocumentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_document(
        self, body: DocRequest | DocRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DocResponse, DeleteDocumentErrorBody]:
        """Delete document by docId

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/doc"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DocRequest | DocRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DocResponse],
            error_mapper=delete_document_error_mapper,
            request_options=request_options,
        )

    def get_document(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DocResponse1, GetDocumentErrorBody]:
        """Retrieve a document in markdown, html, json, or source format.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/doc"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DocResponse1],
            error_mapper=get_document_error_mapper,
            request_options=request_options,
        )

    def import_content(
        self,
        file: FileInput,
        *,
        type_: Type1OrStr | None = Type1.MARKDOWN,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ImportContentResponse, ImportContentErrorBody]:
        """Create new Doc from imported markdown file. In case of zip file, create a new docTree and keeps archived tree
        structure.

        Args:
            file: Markdown file (.md) or archive (.zip) containing multiple markdown files.
            type_: Type of import file. Only markdown supported for now on this route.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/import-content"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file), param[Type1OrStr | None]("type", type_)),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ImportContentResponse],
            error_mapper=import_content_error_mapper,
            request_options=request_options,
        )

    def search_document(
        self, body: DocsSearchRequest | DocsSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DocsSearchResponse, SearchDocumentErrorBody]:
        """Search Archbee documents in docSpace. Can perform one of the 3 types of search:

        ai-chat to return ai generative answer accompanied by source docs; ai-retrieval to return just similar docs with
        the query; words to perform normal search aka. "word-based"; use empty query to return all docs single-doc to
        return document info by id

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/docs/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DocsSearchRequest | DocsSearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DocsSearchResponse],
            error_mapper=search_document_error_mapper,
            request_options=request_options,
        )

    def update_create_document(
        self, body: DocRequest1 | DocRequest1Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DocResponse2, UpdateCreateDocumentErrorBody]:
        """Create / Update Doc by docId

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/doc"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DocRequest1 | DocRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[DocResponse2],
            error_mapper=update_create_document_error_mapper,
            request_options=request_options,
        )


class AsyncDocumentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_document(
        self, body: DocRequest | DocRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DocResponse, DeleteDocumentErrorBody]:
        """Delete document by docId

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/doc"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DocRequest | DocRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DocResponse],
            error_mapper=delete_document_error_mapper,
            request_options=request_options,
        )

    async def get_document(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DocResponse1, GetDocumentErrorBody]:
        """Retrieve a document in markdown, html, json, or source format.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/doc"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DocResponse1],
            error_mapper=get_document_error_mapper,
            request_options=request_options,
        )

    async def import_content(
        self,
        file: AsyncFileInput,
        *,
        type_: Type1OrStr | None = Type1.MARKDOWN,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ImportContentResponse, ImportContentErrorBody]:
        """Create new Doc from imported markdown file. In case of zip file, create a new docTree and keeps archived tree
        structure.

        Args:
            file: Markdown file (.md) or archive (.zip) containing multiple markdown files.
            type_: Type of import file. Only markdown supported for now on this route.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/import-content"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(file_part("file", file), param[Type1OrStr | None]("type", type_)),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ImportContentResponse],
            error_mapper=import_content_error_mapper,
            request_options=request_options,
        )

    async def search_document(
        self,
        body: DocsSearchRequest | DocsSearchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DocsSearchResponse, SearchDocumentErrorBody]:
        """Search Archbee documents in docSpace. Can perform one of the 3 types of search:

        ai-chat to return ai generative answer accompanied by source docs; ai-retrieval to return just similar docs with
        the query; words to perform normal search aka. "word-based"; use empty query to return all docs single-doc to
        return document info by id

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/docs/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DocsSearchRequest | DocsSearchRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DocsSearchResponse],
            error_mapper=search_document_error_mapper,
            request_options=request_options,
        )

    async def update_create_document(
        self, body: DocRequest1 | DocRequest1Dict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DocResponse2, UpdateCreateDocumentErrorBody]:
        """Create / Update Doc by docId

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/doc"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[DocRequest1 | DocRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[DocResponse2],
            error_mapper=update_create_document_error_mapper,
            request_options=request_options,
        )
