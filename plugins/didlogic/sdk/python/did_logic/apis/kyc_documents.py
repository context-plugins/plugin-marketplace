from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileInput,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    FileInput,
    FileResponse,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_file_decoder,
    async_json_decoder,
    empty_response,
    file_decoder,
    file_part,
    json_body,
    json_decoder,
    multipart_body,
    param,
    unwrap,
)
from ..errors.documents_countries_error import DocumentsCountriesErrorBody, documents_countries_error_mapper
from ..errors.documents_create_error import DocumentsCreateErrorBody, documents_create_error_mapper
from ..errors.documents_destroy_error import DocumentsDestroyErrorBody, documents_destroy_error_mapper
from ..errors.documents_files_download_file_error import (
    DocumentsFilesDownloadFileErrorBody,
    documents_files_download_file_error_mapper,
)
from ..errors.documents_index_error import DocumentsIndexErrorBody, documents_index_error_mapper
from ..errors.documents_show_error import DocumentsShowErrorBody, documents_show_error_mapper
from ..errors.documents_update_error import DocumentsUpdateErrorBody, documents_update_error_mapper
from ..models.api_v2_documents_countries_response import ApiV2DocumentsCountriesResponse
from ..models.api_v2_documents_request import ApiV2DocumentsRequest, ApiV2DocumentsRequestDict
from ..models.api_v2_documents_response import ApiV2DocumentsResponse
from ..models.api_v2_documents_response1 import ApiV2DocumentsResponse1
from ..models.api_v2_documents_response2 import ApiV2DocumentsResponse2
from ..models.api_v2_documents_response3 import ApiV2DocumentsResponse3
from ..models.enums.approvement_status import ApprovementStatusOrStr
from ..models.enums.document_doc_type import DocumentDocTypeOrStr
from ..models.enums.order import Order, OrderOrStr
from ..models.enums.role import RoleOrStr
from ..server.server import Server


class KycDocuments:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = KycDocumentsWithRawResponse(client, server, auth)

    def documents_countries(
        self, *, name_contains: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV2DocumentsCountriesResponse:
        """List the country names a document can be uploaded for.

        The name is the exact value documents_create takes in ``document[country]``; a code such as ``UK`` or ``GB`` is
        refused. Narrow the list by part of the name with ``name_contains``.

        ``countries[].name`` feeds documents_create.

        Args:
            name_contains: Filter countries by name pattern (case-insensitive substring match)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns list of countries

        Raises:
            ApiError: returns unauthorized ``error`` is ``ApiV2DocumentsCountries401Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.documents_countries(name_contains=name_contains, request_options=request_options)
        )

    def documents_create(
        self,
        document_name: str,
        document_doc_type: DocumentDocTypeOrStr,
        document_files_frontside: FileInput,
        document_identity_id: int,
        document_country: str,
        *,
        document_files_backside: FileInput | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2DocumentsResponse1:
        """Upload a new document for identity verification.

        **Document Types:**
        - ``personal_id`` - Personal ID
        - ``address_proof`` - Proof of address
        - ``business_registration`` - Business Registration
        - ``letter_of_intent`` - Letter of Intent

        **File Requirements:**
        - Allowed extensions: jpg, jpeg, png, pdf
        - Accepted MIME types: ["image/jpeg", "image/png", "application/pdf"]

        ``document_id`` feeds documents_show, documents_update, documents_destroy and documents_files_download_file;
        ``document.files[].role`` feeds documents_files_download_file.

        Args:
            document_name: Document name
            document_doc_type: Document type
            document_files_frontside: Frontside file upload (binary)
            document_identity_id: Identity ID to associate the document with, from identities_index, identities_create
            document_country: Country name from documents_countries, e.g. ``United Kingdom``; a code such as ``UK`` or
                ``GB`` is refused. For ``letter_of_intent`` the country of the purchased number is stored instead
            document_files_backside: Backside file upload (binary, Personal ID only)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            creates a new document

        Raises:
            ApiError: returns unauthorized returns unprocessable entity ``error`` is ``ApiV2Documents401Error1 | Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.documents_create(
                document_name,
                document_doc_type,
                document_files_frontside,
                document_identity_id,
                document_country,
                document_files_backside=document_files_backside,
                request_options=request_options,
            ),
        )

    def documents_destroy(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Delete a document by ID.

        **Important notes:**
        - Document is permanently removed
        - Cannot be undone

        Args:
            id_: Document ID from documents_index, documents_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            deletes the document

        Raises:
            ApiError: returns unauthorized returns not found ``error`` is ``ApiV2Documents401Error1 |
                ApiV2Documents404Error1 | RawError``."""
        return unwrap(self._with_raw_response.documents_destroy(id_, request_options=request_options))

    def documents_files_download_file(
        self, id_: int, role: RoleOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Download a specific document file by role (frontside/backside).

        Args:
            id_: Document ID from documents_index, documents_show, documents_create
            role: File role, ``files[].role`` from documents_index, documents_show, documents_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns file with proper headers and content

        Raises:
            ApiError: returns unauthorized returns not found ``error`` is ``ApiV2DocumentsFiles401Error1 | Error |
                RawError``."""
        return unwrap(self._with_raw_response.documents_files_download_file(id_, role, request_options=request_options))

    def documents_index(
        self,
        *,
        ids: str | None = None,
        identity_id: int | None = None,
        approvement_status: ApprovementStatusOrStr | None = None,
        upload_date_from: Date | None = None,
        upload_date_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2DocumentsResponse:
        """Retrieve a list of documents with filtering and pagination.

        **Important notes:**
        - Supports filtering by approval status, identity ID, and date range
        - Results can be sorted and paginated

        ``documents[].id`` feeds documents_show, documents_update, documents_destroy and documents_files_download_file;
        ``documents[].files[].role`` feeds documents_files_download_file; ``documents[].identity_id`` feeds
        identities_index. Full record: documents_show.

        Args:
            ids: Filter documents by IDs (comma-separated)
            identity_id: Filter documents by identity ID from identities_index, identities_create
            approvement_status: Filter documents by approval status
            upload_date_from: Filter documents created from this date
            upload_date_to: Filter documents created until this date
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns documents from specified identity

        Raises:
            ApiError: returns unauthorized ``error`` is ``ApiV2Documents401Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.documents_index(
                ids=ids,
                identity_id=identity_id,
                approvement_status=approvement_status,
                upload_date_from=upload_date_from,
                upload_date_to=upload_date_to,
                order_by=order_by,
                order=order,
                page=page,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    def documents_show(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV2DocumentsResponse2:
        """Get a document by ID.

        ``document.files[].role`` feeds documents_files_download_file; ``document.identity_id`` feeds identities_index.
        Rows: documents_index.

        Args:
            id_: Document ID from documents_index, documents_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns the document details

        Raises:
            ApiError: returns unauthorized The requested resource could not be found. ``error`` is
                ``ApiV2Documents401Error1 | ApiV2Documents404Error1 | RawError``."""
        return unwrap(self._with_raw_response.documents_show(id_, request_options=request_options))

    def documents_update(
        self,
        id_: int,
        body: ApiV2DocumentsRequest | ApiV2DocumentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2DocumentsResponse3:
        """Update an existing document's name or identity.

        ``document_id`` feeds documents_show.

        Args:
            id_: Document ID from documents_index, documents_create
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            updates the document

        Raises:
            ApiError: returns unauthorized returns not found returns unprocessable entity ``error`` is
                ``ApiV2Documents401Error1 | ApiV2Documents404Error1 | Error | RawError``."""
        return unwrap(self._with_raw_response.documents_update(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> KycDocumentsWithRawResponse:
        return self._with_raw_response


class AsyncKycDocuments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncKycDocumentsWithRawResponse(client, server, auth)

    async def documents_countries(
        self, *, name_contains: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV2DocumentsCountriesResponse:
        """List the country names a document can be uploaded for.

        The name is the exact value documents_create takes in ``document[country]``; a code such as ``UK`` or ``GB`` is
        refused. Narrow the list by part of the name with ``name_contains``.

        ``countries[].name`` feeds documents_create.

        Args:
            name_contains: Filter countries by name pattern (case-insensitive substring match)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns list of countries

        Raises:
            ApiError: returns unauthorized ``error`` is ``ApiV2DocumentsCountries401Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.documents_countries(
                name_contains=name_contains, request_options=request_options
            ),
        )

    async def documents_create(
        self,
        document_name: str,
        document_doc_type: DocumentDocTypeOrStr,
        document_files_frontside: AsyncFileInput,
        document_identity_id: int,
        document_country: str,
        *,
        document_files_backside: AsyncFileInput | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2DocumentsResponse1:
        """Upload a new document for identity verification.

        **Document Types:**
        - ``personal_id`` - Personal ID
        - ``address_proof`` - Proof of address
        - ``business_registration`` - Business Registration
        - ``letter_of_intent`` - Letter of Intent

        **File Requirements:**
        - Allowed extensions: jpg, jpeg, png, pdf
        - Accepted MIME types: ["image/jpeg", "image/png", "application/pdf"]

        ``document_id`` feeds documents_show, documents_update, documents_destroy and documents_files_download_file;
        ``document.files[].role`` feeds documents_files_download_file.

        Args:
            document_name: Document name
            document_doc_type: Document type
            document_files_frontside: Frontside file upload (binary)
            document_identity_id: Identity ID to associate the document with, from identities_index, identities_create
            document_country: Country name from documents_countries, e.g. ``United Kingdom``; a code such as ``UK`` or
                ``GB`` is refused. For ``letter_of_intent`` the country of the purchased number is stored instead
            document_files_backside: Backside file upload (binary, Personal ID only)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            creates a new document

        Raises:
            ApiError: returns unauthorized returns unprocessable entity ``error`` is ``ApiV2Documents401Error1 | Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.documents_create(
                document_name,
                document_doc_type,
                document_files_frontside,
                document_identity_id,
                document_country,
                document_files_backside=document_files_backside,
                request_options=request_options,
            ),
        )

    async def documents_destroy(self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Delete a document by ID.

        **Important notes:**
        - Document is permanently removed
        - Cannot be undone

        Args:
            id_: Document ID from documents_index, documents_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            deletes the document

        Raises:
            ApiError: returns unauthorized returns not found ``error`` is ``ApiV2Documents401Error1 |
                ApiV2Documents404Error1 | RawError``."""
        return unwrap(await self._with_raw_response.documents_destroy(id_, request_options=request_options))

    async def documents_files_download_file(
        self, id_: int, role: RoleOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Download a specific document file by role (frontside/backside).

        Args:
            id_: Document ID from documents_index, documents_show, documents_create
            role: File role, ``files[].role`` from documents_index, documents_show, documents_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns file with proper headers and content

        Raises:
            ApiError: returns unauthorized returns not found ``error`` is ``ApiV2DocumentsFiles401Error1 | Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.documents_files_download_file(id_, role, request_options=request_options)
        )

    async def documents_index(
        self,
        *,
        ids: str | None = None,
        identity_id: int | None = None,
        approvement_status: ApprovementStatusOrStr | None = None,
        upload_date_from: Date | None = None,
        upload_date_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2DocumentsResponse:
        """Retrieve a list of documents with filtering and pagination.

        **Important notes:**
        - Supports filtering by approval status, identity ID, and date range
        - Results can be sorted and paginated

        ``documents[].id`` feeds documents_show, documents_update, documents_destroy and documents_files_download_file;
        ``documents[].files[].role`` feeds documents_files_download_file; ``documents[].identity_id`` feeds
        identities_index. Full record: documents_show.

        Args:
            ids: Filter documents by IDs (comma-separated)
            identity_id: Filter documents by identity ID from identities_index, identities_create
            approvement_status: Filter documents by approval status
            upload_date_from: Filter documents created from this date
            upload_date_to: Filter documents created until this date
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns documents from specified identity

        Raises:
            ApiError: returns unauthorized ``error`` is ``ApiV2Documents401Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.documents_index(
                ids=ids,
                identity_id=identity_id,
                approvement_status=approvement_status,
                upload_date_from=upload_date_from,
                upload_date_to=upload_date_to,
                order_by=order_by,
                order=order,
                page=page,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    async def documents_show(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV2DocumentsResponse2:
        """Get a document by ID.

        ``document.files[].role`` feeds documents_files_download_file; ``document.identity_id`` feeds identities_index.
        Rows: documents_index.

        Args:
            id_: Document ID from documents_index, documents_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns the document details

        Raises:
            ApiError: returns unauthorized The requested resource could not be found. ``error`` is
                ``ApiV2Documents401Error1 | ApiV2Documents404Error1 | RawError``."""
        return unwrap(await self._with_raw_response.documents_show(id_, request_options=request_options))

    async def documents_update(
        self,
        id_: int,
        body: ApiV2DocumentsRequest | ApiV2DocumentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2DocumentsResponse3:
        """Update an existing document's name or identity.

        ``document_id`` feeds documents_show.

        Args:
            id_: Document ID from documents_index, documents_create
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            updates the document

        Raises:
            ApiError: returns unauthorized returns not found returns unprocessable entity ``error`` is
                ``ApiV2Documents401Error1 | ApiV2Documents404Error1 | Error | RawError``."""
        return unwrap(await self._with_raw_response.documents_update(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncKycDocumentsWithRawResponse:
        return self._with_raw_response


class KycDocumentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def documents_countries(
        self, *, name_contains: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2DocumentsCountriesResponse, DocumentsCountriesErrorBody]:
        """List the country names a document can be uploaded for.

        The name is the exact value documents_create takes in ``document[country]``; a code such as ``UK`` or ``GB`` is
        refused. Narrow the list by part of the name with ``name_contains``.

        ``countries[].name`` feeds documents_create.

        Args:
            name_contains: Filter countries by name pattern (case-insensitive substring match)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/documents/countries"),
            query_params=[param[str | None]("name_contains", name_contains)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2DocumentsCountriesResponse],
            error_mapper=documents_countries_error_mapper,
            request_options=request_options,
        )

    def documents_create(
        self,
        document_name: str,
        document_doc_type: DocumentDocTypeOrStr,
        document_files_frontside: FileInput,
        document_identity_id: int,
        document_country: str,
        *,
        document_files_backside: FileInput | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2DocumentsResponse1, DocumentsCreateErrorBody]:
        """Upload a new document for identity verification.

        **Document Types:**
        - ``personal_id`` - Personal ID
        - ``address_proof`` - Proof of address
        - ``business_registration`` - Business Registration
        - ``letter_of_intent`` - Letter of Intent

        **File Requirements:**
        - Allowed extensions: jpg, jpeg, png, pdf
        - Accepted MIME types: ["image/jpeg", "image/png", "application/pdf"]

        ``document_id`` feeds documents_show, documents_update, documents_destroy and documents_files_download_file;
        ``document.files[].role`` feeds documents_files_download_file.

        Args:
            document_name: Document name
            document_doc_type: Document type
            document_files_frontside: Frontside file upload (binary)
            document_identity_id: Identity ID to associate the document with, from identities_index, identities_create
            document_country: Country name from documents_countries, e.g. ``United Kingdom``; a code such as ``UK`` or
                ``GB`` is refused. For ``letter_of_intent`` the country of the purchased number is stored instead
            document_files_backside: Backside file upload (binary, Personal ID only)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/documents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                param[str]("document[name]", document_name),
                param[DocumentDocTypeOrStr]("document[doc_type]", document_doc_type),
                file_part("document[files][frontside]", document_files_frontside),
                param[int]("document[identity_id]", document_identity_id),
                param[str]("document[country]", document_country),
                (
                    file_part("document[files][backside]", document_files_backside)
                    if document_files_backside is not None
                    else None
                ),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2DocumentsResponse1],
            error_mapper=documents_create_error_mapper,
            request_options=request_options,
        )

    def documents_destroy(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DocumentsDestroyErrorBody]:
        """Delete a document by ID.

        **Important notes:**
        - Document is permanently removed
        - Cannot be undone

        Args:
            id_: Document ID from documents_index, documents_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v2/documents/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=documents_destroy_error_mapper,
            request_options=request_options,
        )

    def documents_files_download_file(
        self, id_: int, role: RoleOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, DocumentsFilesDownloadFileErrorBody]:
        """Download a specific document file by role (frontside/backside).

        Args:
            id_: Document ID from documents_index, documents_show, documents_create
            role: File role, ``files[].role`` from documents_index, documents_show, documents_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/documents/{id}/files/{role}"),
            path_params=[param[int]("id", id_), param[RoleOrStr]("role", role)],
            auth_scheme=self._auth.bearer_auth,
            decoder=file_decoder,
            error_mapper=documents_files_download_file_error_mapper,
            request_options=request_options,
        )

    def documents_index(
        self,
        *,
        ids: str | None = None,
        identity_id: int | None = None,
        approvement_status: ApprovementStatusOrStr | None = None,
        upload_date_from: Date | None = None,
        upload_date_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2DocumentsResponse, DocumentsIndexErrorBody]:
        """Retrieve a list of documents with filtering and pagination.

        **Important notes:**
        - Supports filtering by approval status, identity ID, and date range
        - Results can be sorted and paginated

        ``documents[].id`` feeds documents_show, documents_update, documents_destroy and documents_files_download_file;
        ``documents[].files[].role`` feeds documents_files_download_file; ``documents[].identity_id`` feeds
        identities_index. Full record: documents_show.

        Args:
            ids: Filter documents by IDs (comma-separated)
            identity_id: Filter documents by identity ID from identities_index, identities_create
            approvement_status: Filter documents by approval status
            upload_date_from: Filter documents created from this date
            upload_date_to: Filter documents created until this date
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/documents"),
            query_params=[
                param[str | None]("ids", ids),
                param[int | None]("identity_id", identity_id),
                param[ApprovementStatusOrStr | None]("approvement_status", approvement_status),
                param[Date | None]("upload_date_from", upload_date_from),
                param[Date | None]("upload_date_to", upload_date_to),
                param[str | None]("order_by", order_by),
                param[OrderOrStr | None]("order", order),
                param[int | None]("page", page),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2DocumentsResponse],
            error_mapper=documents_index_error_mapper,
            request_options=request_options,
        )

    def documents_show(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2DocumentsResponse2, DocumentsShowErrorBody]:
        """Get a document by ID.

        ``document.files[].role`` feeds documents_files_download_file; ``document.identity_id`` feeds identities_index.
        Rows: documents_index.

        Args:
            id_: Document ID from documents_index, documents_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/documents/{id}"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2DocumentsResponse2],
            error_mapper=documents_show_error_mapper,
            request_options=request_options,
        )

    def documents_update(
        self,
        id_: int,
        body: ApiV2DocumentsRequest | ApiV2DocumentsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2DocumentsResponse3, DocumentsUpdateErrorBody]:
        """Update an existing document's name or identity.

        ``document_id`` feeds documents_show.

        Args:
            id_: Document ID from documents_index, documents_create
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v2/documents/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2DocumentsRequest | ApiV2DocumentsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2DocumentsResponse3],
            error_mapper=documents_update_error_mapper,
            request_options=request_options,
        )


class AsyncKycDocumentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def documents_countries(
        self, *, name_contains: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2DocumentsCountriesResponse, DocumentsCountriesErrorBody]:
        """List the country names a document can be uploaded for.

        The name is the exact value documents_create takes in ``document[country]``; a code such as ``UK`` or ``GB`` is
        refused. Narrow the list by part of the name with ``name_contains``.

        ``countries[].name`` feeds documents_create.

        Args:
            name_contains: Filter countries by name pattern (case-insensitive substring match)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/documents/countries"),
            query_params=[param[str | None]("name_contains", name_contains)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2DocumentsCountriesResponse],
            error_mapper=documents_countries_error_mapper,
            request_options=request_options,
        )

    async def documents_create(
        self,
        document_name: str,
        document_doc_type: DocumentDocTypeOrStr,
        document_files_frontside: AsyncFileInput,
        document_identity_id: int,
        document_country: str,
        *,
        document_files_backside: AsyncFileInput | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2DocumentsResponse1, DocumentsCreateErrorBody]:
        """Upload a new document for identity verification.

        **Document Types:**
        - ``personal_id`` - Personal ID
        - ``address_proof`` - Proof of address
        - ``business_registration`` - Business Registration
        - ``letter_of_intent`` - Letter of Intent

        **File Requirements:**
        - Allowed extensions: jpg, jpeg, png, pdf
        - Accepted MIME types: ["image/jpeg", "image/png", "application/pdf"]

        ``document_id`` feeds documents_show, documents_update, documents_destroy and documents_files_download_file;
        ``document.files[].role`` feeds documents_files_download_file.

        Args:
            document_name: Document name
            document_doc_type: Document type
            document_files_frontside: Frontside file upload (binary)
            document_identity_id: Identity ID to associate the document with, from identities_index, identities_create
            document_country: Country name from documents_countries, e.g. ``United Kingdom``; a code such as ``UK`` or
                ``GB`` is refused. For ``letter_of_intent`` the country of the purchased number is stored instead
            document_files_backside: Backside file upload (binary, Personal ID only)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/documents"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=multipart_body(
                param[str]("document[name]", document_name),
                param[DocumentDocTypeOrStr]("document[doc_type]", document_doc_type),
                file_part("document[files][frontside]", document_files_frontside),
                param[int]("document[identity_id]", document_identity_id),
                param[str]("document[country]", document_country),
                (
                    file_part("document[files][backside]", document_files_backside)
                    if document_files_backside is not None
                    else None
                ),
            ),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2DocumentsResponse1],
            error_mapper=documents_create_error_mapper,
            request_options=request_options,
        )

    async def documents_destroy(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DocumentsDestroyErrorBody]:
        """Delete a document by ID.

        **Important notes:**
        - Document is permanently removed
        - Cannot be undone

        Args:
            id_: Document ID from documents_index, documents_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v2/documents/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=documents_destroy_error_mapper,
            request_options=request_options,
        )

    async def documents_files_download_file(
        self, id_: int, role: RoleOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, DocumentsFilesDownloadFileErrorBody]:
        """Download a specific document file by role (frontside/backside).

        Args:
            id_: Document ID from documents_index, documents_show, documents_create
            role: File role, ``files[].role`` from documents_index, documents_show, documents_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/documents/{id}/files/{role}"),
            path_params=[param[int]("id", id_), param[RoleOrStr]("role", role)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_file_decoder,
            error_mapper=documents_files_download_file_error_mapper,
            request_options=request_options,
        )

    async def documents_index(
        self,
        *,
        ids: str | None = None,
        identity_id: int | None = None,
        approvement_status: ApprovementStatusOrStr | None = None,
        upload_date_from: Date | None = None,
        upload_date_to: Date | None = None,
        order_by: str | None = None,
        order: OrderOrStr | None = Order.DESC,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2DocumentsResponse, DocumentsIndexErrorBody]:
        """Retrieve a list of documents with filtering and pagination.

        **Important notes:**
        - Supports filtering by approval status, identity ID, and date range
        - Results can be sorted and paginated

        ``documents[].id`` feeds documents_show, documents_update, documents_destroy and documents_files_download_file;
        ``documents[].files[].role`` feeds documents_files_download_file; ``documents[].identity_id`` feeds
        identities_index. Full record: documents_show.

        Args:
            ids: Filter documents by IDs (comma-separated)
            identity_id: Filter documents by identity ID from identities_index, identities_create
            approvement_status: Filter documents by approval status
            upload_date_from: Filter documents created from this date
            upload_date_to: Filter documents created until this date
            order_by: Field to sort by
            order: Sort order
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/documents"),
            query_params=[
                param[str | None]("ids", ids),
                param[int | None]("identity_id", identity_id),
                param[ApprovementStatusOrStr | None]("approvement_status", approvement_status),
                param[Date | None]("upload_date_from", upload_date_from),
                param[Date | None]("upload_date_to", upload_date_to),
                param[str | None]("order_by", order_by),
                param[OrderOrStr | None]("order", order),
                param[int | None]("page", page),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2DocumentsResponse],
            error_mapper=documents_index_error_mapper,
            request_options=request_options,
        )

    async def documents_show(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2DocumentsResponse2, DocumentsShowErrorBody]:
        """Get a document by ID.

        ``document.files[].role`` feeds documents_files_download_file; ``document.identity_id`` feeds identities_index.
        Rows: documents_index.

        Args:
            id_: Document ID from documents_index, documents_create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/documents/{id}"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2DocumentsResponse2],
            error_mapper=documents_show_error_mapper,
            request_options=request_options,
        )

    async def documents_update(
        self,
        id_: int,
        body: ApiV2DocumentsRequest | ApiV2DocumentsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2DocumentsResponse3, DocumentsUpdateErrorBody]:
        """Update an existing document's name or identity.

        ``document_id`` feeds documents_show.

        Args:
            id_: Document ID from documents_index, documents_create
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v2/documents/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2DocumentsRequest | ApiV2DocumentsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2DocumentsResponse3],
            error_mapper=documents_update_error_mapper,
            request_options=request_options,
        )
