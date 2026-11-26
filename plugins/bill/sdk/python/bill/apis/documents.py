from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_bill_document_error import CreateBillDocumentErrorBody, create_bill_document_error_mapper
from ..errors.get_document_error import GetDocumentErrorBody, get_document_error_mapper
from ..errors.list_documents_error import ListDocumentsErrorBody, list_documents_error_mapper
from ..errors.upload_status_error import UploadStatusErrorBody, upload_status_error_mapper
from ..models.document_create_response_dto import DocumentCreateResponseDto
from ..models.document_response_dto import DocumentResponseDto
from ..models.document_upload_status_response_dto import DocumentUploadStatusResponseDto
from ..models.list_response_dto_document_response_dto import ListResponseDtoDocumentResponseDto
from ..server.server import Server


class Documents:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = DocumentsWithRawResponse(client, server)

    def create_bill_document(
        self,
        bill_id: str,
        name: str,
        body: list[str],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DocumentCreateResponseDto:
        """Upload a document for an existing bill. The file size limit is 6 MB. When you upload a bill document, the
        uploaded document is available on the bill details page in the BILL web app.

        In the response, the ``name``, ``createdTime``, and ``downloadLink`` is available when the upload is complete.

        When you upload a document, it takes a few minutes for BILL to complete the upload process.
        * **Upload in-progress**: A temporary BILL-generated ID is available for the document when the upload is in
            progress. The value begins with ``0du``. You can get the document upload status with ``GET
            /v3/documents/upload-status``.
        * **Upload complete**: A BILL-generated ID is available for the document when the upload is complete. The value
            begins with ``00h``. You can get details about the uploaded document with ``GET
            /v3/documents/bills/{billId}``.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            bill_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload bill document response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_bill_document(
                bill_id, name, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_document(
        self,
        document_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DocumentResponseDto:
        """Get details about a document associated with a bill.

        From the response, use ``downloadLink`` in a GET request to download the document.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
        ```

        Args:
            document_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get document details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_document(
                document_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_documents(
        self,
        bill_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoDocumentResponseDto:
        """Get a list of documents associated with a bill.

        From the response, use ``downloadLink`` in a GET request to download the document.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
        ```

        Args:
            bill_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of documents response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_documents(
                bill_id, max_=max_, page=page, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def upload_status(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[DocumentUploadStatusResponseDto]:
        """Get status of a document upload. Use this endpoint to identify when a document upload is complete.
        * BILL generates an ``uploadId`` for the document when the upload is in progress (``IN_PROGRESS``). The value
            begins with ``0du``.
        * BILL generates a ``documentId`` for the document when the upload is complete (``UPLOADED``). The value begins
            with ``00h``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get document upload status response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.upload_status(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DocumentsWithRawResponse:
        return self._with_raw_response


class AsyncDocuments:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncDocumentsWithRawResponse(client, server)

    async def create_bill_document(
        self,
        bill_id: str,
        name: str,
        body: list[str],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DocumentCreateResponseDto:
        """Upload a document for an existing bill. The file size limit is 6 MB. When you upload a bill document, the
        uploaded document is available on the bill details page in the BILL web app.

        In the response, the ``name``, ``createdTime``, and ``downloadLink`` is available when the upload is complete.

        When you upload a document, it takes a few minutes for BILL to complete the upload process.
        * **Upload in-progress**: A temporary BILL-generated ID is available for the document when the upload is in
            progress. The value begins with ``0du``. You can get the document upload status with ``GET
            /v3/documents/upload-status``.
        * **Upload complete**: A BILL-generated ID is available for the document when the upload is complete. The value
            begins with ``00h``. You can get details about the uploaded document with ``GET
            /v3/documents/bills/{billId}``.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            bill_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Upload bill document response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_bill_document(
                bill_id, name, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_document(
        self,
        document_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DocumentResponseDto:
        """Get details about a document associated with a bill.

        From the response, use ``downloadLink`` in a GET request to download the document.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
        ```

        Args:
            document_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get document details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_document(
                document_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_documents(
        self,
        bill_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoDocumentResponseDto:
        """Get a list of documents associated with a bill.

        From the response, use ``downloadLink`` in a GET request to download the document.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
        ```

        Args:
            bill_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of documents response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_documents(
                bill_id, max_=max_, page=page, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def upload_status(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[DocumentUploadStatusResponseDto]:
        """Get status of a document upload. Use this endpoint to identify when a document upload is complete.
        * BILL generates an ``uploadId`` for the document when the upload is in progress (``IN_PROGRESS``). The value
            begins with ``0du``.
        * BILL generates a ``documentId`` for the document when the upload is complete (``UPLOADED``). The value begins
            with ``00h``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get document upload status response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.upload_status(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDocumentsWithRawResponse:
        return self._with_raw_response


class DocumentsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_bill_document(
        self,
        bill_id: str,
        name: str,
        body: list[str],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DocumentCreateResponseDto, CreateBillDocumentErrorBody]:
        """Upload a document for an existing bill. The file size limit is 6 MB. When you upload a bill document, the
        uploaded document is available on the bill details page in the BILL web app.

        In the response, the ``name``, ``createdTime``, and ``downloadLink`` is available when the upload is complete.

        When you upload a document, it takes a few minutes for BILL to complete the upload process.
        * **Upload in-progress**: A temporary BILL-generated ID is available for the document when the upload is in
            progress. The value begins with ``0du``. You can get the document upload status with ``GET
            /v3/documents/upload-status``.
        * **Upload complete**: A BILL-generated ID is available for the document when the upload is complete. The value
            begins with ``00h``. You can get details about the uploaded document with ``GET
            /v3/documents/bills/{billId}``.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            bill_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/documents/bills/{billId}"),
            path_params=[param[str]("billId", bill_id)],
            query_params=[param[str]("name", name)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[str]](body),
            decoder=json_decoder[DocumentCreateResponseDto],
            error_mapper=create_bill_document_error_mapper,
            request_options=request_options,
        )

    def get_document(
        self,
        document_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DocumentResponseDto, GetDocumentErrorBody]:
        """Get details about a document associated with a bill.

        From the response, use ``downloadLink`` in a GET request to download the document.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
        ```

        Args:
            document_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/documents/{documentId}"),
            path_params=[param[str]("documentId", document_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[DocumentResponseDto],
            error_mapper=get_document_error_mapper,
            request_options=request_options,
        )

    def list_documents(
        self,
        bill_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoDocumentResponseDto, ListDocumentsErrorBody]:
        """Get a list of documents associated with a bill.

        From the response, use ``downloadLink`` in a GET request to download the document.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
        ```

        Args:
            bill_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/documents/bills/{billId}"),
            path_params=[param[str]("billId", bill_id)],
            query_params=[param[int | None]("max", max_), param[str | None]("page", page)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoDocumentResponseDto],
            error_mapper=list_documents_error_mapper,
            request_options=request_options,
        )

    def upload_status(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[DocumentUploadStatusResponseDto], UploadStatusErrorBody]:
        """Get status of a document upload. Use this endpoint to identify when a document upload is complete.
        * BILL generates an ``uploadId`` for the document when the upload is in progress (``IN_PROGRESS``). The value
            begins with ``0du``.
        * BILL generates a ``documentId`` for the document when the upload is complete (``UPLOADED``). The value begins
            with ``00h``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/documents/upload-status"),
            query_params=[param[str]("ids", ids)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[list[DocumentUploadStatusResponseDto]],
            error_mapper=upload_status_error_mapper,
            request_options=request_options,
        )


class AsyncDocumentsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_bill_document(
        self,
        bill_id: str,
        name: str,
        body: list[str],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DocumentCreateResponseDto, CreateBillDocumentErrorBody]:
        """Upload a document for an existing bill. The file size limit is 6 MB. When you upload a bill document, the
        uploaded document is available on the bill details page in the BILL web app.

        In the response, the ``name``, ``createdTime``, and ``downloadLink`` is available when the upload is complete.

        When you upload a document, it takes a few minutes for BILL to complete the upload process.
        * **Upload in-progress**: A temporary BILL-generated ID is available for the document when the upload is in
            progress. The value begins with ``0du``. You can get the document upload status with ``GET
            /v3/documents/upload-status``.
        * **Upload complete**: A BILL-generated ID is available for the document when the upload is complete. The value
            begins with ``00h``. You can get details about the uploaded document with ``GET
            /v3/documents/bills/{billId}``.

        See Documents and attachments in the Guides section for more information, sample requests, and responses.

        Args:
            bill_id: Value sent with the request.
            name: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/documents/bills/{billId}"),
            path_params=[param[str]("billId", bill_id)],
            query_params=[param[str]("name", name)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[str]](body),
            decoder=async_json_decoder[DocumentCreateResponseDto],
            error_mapper=create_bill_document_error_mapper,
            request_options=request_options,
        )

    async def get_document(
        self,
        document_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DocumentResponseDto, GetDocumentErrorBody]:
        """Get details about a document associated with a bill.

        From the response, use ``downloadLink`` in a GET request to download the document.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
        ```

        Args:
            document_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/documents/{documentId}"),
            path_params=[param[str]("documentId", document_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[DocumentResponseDto],
            error_mapper=get_document_error_mapper,
            request_options=request_options,
        )

    async def list_documents(
        self,
        bill_id: str,
        *,
        max_: int | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoDocumentResponseDto, ListDocumentsErrorBody]:
        """Get a list of documents associated with a bill.

        From the response, use ``downloadLink`` in a GET request to download the document.

        ```
        curl '{downloadLink}' --header 'sessionId: {session_id}' --output {document_name}
        ```

        Args:
            bill_id: Value sent with the request.
            max_: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/documents/bills/{billId}"),
            path_params=[param[str]("billId", bill_id)],
            query_params=[param[int | None]("max", max_), param[str | None]("page", page)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoDocumentResponseDto],
            error_mapper=list_documents_error_mapper,
            request_options=request_options,
        )

    async def upload_status(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[DocumentUploadStatusResponseDto], UploadStatusErrorBody]:
        """Get status of a document upload. Use this endpoint to identify when a document upload is complete.
        * BILL generates an ``uploadId`` for the document when the upload is in progress (``IN_PROGRESS``). The value
            begins with ``0du``.
        * BILL generates a ``documentId`` for the document when the upload is complete (``UPLOADED``). The value begins
            with ``00h``.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/documents/upload-status"),
            query_params=[param[str]("ids", ids)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[list[DocumentUploadStatusResponseDto]],
            error_mapper=upload_status_error_mapper,
            request_options=request_options,
        )
