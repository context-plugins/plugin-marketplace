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
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_file_decoder,
    async_json_decoder,
    file_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.inline_document import InlineDocument, InlineDocumentDict
from ..models.message_sent import MessageSent
from ..models.payment_model import PaymentModel, PaymentModelDict
from ..models.simple_document import SimpleDocument, SimpleDocumentDict
from ..server.server import Server


class DebitNote:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DebitNoteWithRawResponse(client, server, auth)

    def debit_note_change_status_by_key(
        self,
        document_id: int,
        status_key: str | None,
        culture: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Send a ``POST`` request.

        Args:
            document_id: Value sent with the request.
            status_key: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.debit_note_change_status_by_key(
                document_id, status_key, culture, request_options=request_options
            ),
        )

    def debit_note_create(
        self,
        culture: str,
        body: SimpleDocument | SimpleDocumentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MessageSent:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MessageSent`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.debit_note_create(culture, body, request_options=request_options))

    def debit_note_create2(
        self,
        culture: str,
        body: InlineDocument | InlineDocumentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MessageSent:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MessageSent`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.debit_note_create2(culture, body, request_options=request_options))

    def debit_note_delete(
        self, id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.debit_note_delete(id_, culture, request_options=request_options))

    def debit_note_details(
        self, id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            id_: Sql DocumentId
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.debit_note_details(id_, culture, request_options=request_options))

    def debit_note_edit(
        self,
        id_: int,
        culture: str,
        body: SimpleDocument | SimpleDocumentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.debit_note_edit(id_, culture, body, request_options=request_options))

    def debit_note_edit2(
        self,
        id_: int,
        culture: str,
        body: InlineDocument | InlineDocumentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.debit_note_edit2(id_, culture, body, request_options=request_options))

    def debit_note_get_cumulative_document_reference_list(
        self, culture: str, *, ids: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            ids: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.debit_note_get_cumulative_document_reference_list(
                culture, ids=ids, request_options=request_options
            ),
        )

    def debit_note_index(
        self,
        culture: str,
        *,
        sort_by: str | None = None,
        current_page: str | None = None,
        page_size: str | None = None,
        filter_: str | None = None,
        search_string: str | None = None,
        custom_document_models: str | None = None,
        range_: str | None = None,
        month: str | None = None,
        year: str | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            sort_by: Value sent with the request.
            current_page: Value sent with the request.
            page_size: Value sent with the request.
            filter_: Value sent with the request.
            search_string: Value sent with the request.
            custom_document_models: Value sent with the request.
            range_: Value sent with the request.
            month: Value sent with the request.
            year: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.debit_note_index(
                culture,
                sort_by=sort_by,
                current_page=current_page,
                page_size=page_size,
                filter_=filter_,
                search_string=search_string,
                custom_document_models=custom_document_models,
                range_=range_,
                month=month,
                year=year,
                start_date=start_date,
                end_date=end_date,
                request_options=request_options,
            ),
        )

    def debit_note_receive_payment(
        self,
        id_: int,
        culture: str,
        body: PaymentModel | PaymentModelDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.debit_note_receive_payment(id_, culture, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> DebitNoteWithRawResponse:
        return self._with_raw_response


class AsyncDebitNote:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDebitNoteWithRawResponse(client, server, auth)

    async def debit_note_change_status_by_key(
        self,
        document_id: int,
        status_key: str | None,
        culture: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Send a ``POST`` request.

        Args:
            document_id: Value sent with the request.
            status_key: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.debit_note_change_status_by_key(
                document_id, status_key, culture, request_options=request_options
            ),
        )

    async def debit_note_create(
        self,
        culture: str,
        body: SimpleDocument | SimpleDocumentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MessageSent:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MessageSent`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.debit_note_create(culture, body, request_options=request_options))

    async def debit_note_create2(
        self,
        culture: str,
        body: InlineDocument | InlineDocumentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MessageSent:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``MessageSent`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.debit_note_create2(culture, body, request_options=request_options))

    async def debit_note_delete(
        self, id_: int, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.debit_note_delete(id_, culture, request_options=request_options))

    async def debit_note_details(
        self, id_: int, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            id_: Sql DocumentId
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.debit_note_details(id_, culture, request_options=request_options))

    async def debit_note_edit(
        self,
        id_: int,
        culture: str,
        body: SimpleDocument | SimpleDocumentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.debit_note_edit(id_, culture, body, request_options=request_options)
        )

    async def debit_note_edit2(
        self,
        id_: int,
        culture: str,
        body: InlineDocument | InlineDocumentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.debit_note_edit2(id_, culture, body, request_options=request_options)
        )

    async def debit_note_get_cumulative_document_reference_list(
        self, culture: str, *, ids: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            ids: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.debit_note_get_cumulative_document_reference_list(
                culture, ids=ids, request_options=request_options
            ),
        )

    async def debit_note_index(
        self,
        culture: str,
        *,
        sort_by: str | None = None,
        current_page: str | None = None,
        page_size: str | None = None,
        filter_: str | None = None,
        search_string: str | None = None,
        custom_document_models: str | None = None,
        range_: str | None = None,
        month: str | None = None,
        year: str | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            sort_by: Value sent with the request.
            current_page: Value sent with the request.
            page_size: Value sent with the request.
            filter_: Value sent with the request.
            search_string: Value sent with the request.
            custom_document_models: Value sent with the request.
            range_: Value sent with the request.
            month: Value sent with the request.
            year: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.debit_note_index(
                culture,
                sort_by=sort_by,
                current_page=current_page,
                page_size=page_size,
                filter_=filter_,
                search_string=search_string,
                custom_document_models=custom_document_models,
                range_=range_,
                month=month,
                year=year,
                start_date=start_date,
                end_date=end_date,
                request_options=request_options,
            ),
        )

    async def debit_note_receive_payment(
        self,
        id_: int,
        culture: str,
        body: PaymentModel | PaymentModelDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.debit_note_receive_payment(
                id_, culture, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDebitNoteWithRawResponse:
        return self._with_raw_response


class DebitNoteWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def debit_note_change_status_by_key(
        self,
        document_id: int,
        status_key: str | None,
        culture: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            document_id: Value sent with the request.
            status_key: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/debit-notes/{documentId}/status-key/{statusKey}"),
            path_params=[
                param[int]("documentId", document_id),
                param[str | None]("statusKey", status_key),
                param[str]("culture", culture),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def debit_note_create(
        self,
        culture: str,
        body: SimpleDocument | SimpleDocumentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MessageSent, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/debit-notes/simple-document"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SimpleDocument | SimpleDocumentDict](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[MessageSent],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def debit_note_create2(
        self,
        culture: str,
        body: InlineDocument | InlineDocumentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MessageSent, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/debit-notes/inline-document"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InlineDocument | InlineDocumentDict](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[MessageSent],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def debit_note_delete(
        self, id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{culture}/debit-notes/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def debit_note_details(
        self, id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Sql DocumentId
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/debit-notes/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def debit_note_edit(
        self,
        id_: int,
        culture: str,
        body: SimpleDocument | SimpleDocumentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/{culture}/debit-notes/simple-document/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SimpleDocument | SimpleDocumentDict](body),
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def debit_note_edit2(
        self,
        id_: int,
        culture: str,
        body: InlineDocument | InlineDocumentDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/{culture}/debit-notes/inline-document/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InlineDocument | InlineDocumentDict](body),
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def debit_note_get_cumulative_document_reference_list(
        self, culture: str, *, ids: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            ids: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/debit-notes/cumulative-references"),
            path_params=[param[str]("culture", culture)],
            query_params=[param[str | None]("ids", ids)],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def debit_note_index(
        self,
        culture: str,
        *,
        sort_by: str | None = None,
        current_page: str | None = None,
        page_size: str | None = None,
        filter_: str | None = None,
        search_string: str | None = None,
        custom_document_models: str | None = None,
        range_: str | None = None,
        month: str | None = None,
        year: str | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            sort_by: Value sent with the request.
            current_page: Value sent with the request.
            page_size: Value sent with the request.
            filter_: Value sent with the request.
            search_string: Value sent with the request.
            custom_document_models: Value sent with the request.
            range_: Value sent with the request.
            month: Value sent with the request.
            year: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/debit-notes"),
            path_params=[param[str]("culture", culture)],
            query_params=[
                param[str | None]("SortBy", sort_by),
                param[str | None]("CurrentPage", current_page),
                param[str | None]("PageSize", page_size),
                param[str | None]("Filter", filter_),
                param[str | None]("SearchString", search_string),
                param[str | None]("CustomDocumentModels", custom_document_models),
                param[str | None]("Range", range_),
                param[str | None]("Month", month),
                param[str | None]("Year", year),
                param[str | None]("StartDate", start_date),
                param[str | None]("EndDate", end_date),
            ],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def debit_note_receive_payment(
        self,
        id_: int,
        culture: str,
        body: PaymentModel | PaymentModelDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/debit-notes/{id}/payments"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentModel | PaymentModelDict](body),
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncDebitNoteWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def debit_note_change_status_by_key(
        self,
        document_id: int,
        status_key: str | None,
        culture: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            document_id: Value sent with the request.
            status_key: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/debit-notes/{documentId}/status-key/{statusKey}"),
            path_params=[
                param[int]("documentId", document_id),
                param[str | None]("statusKey", status_key),
                param[str]("culture", culture),
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def debit_note_create(
        self,
        culture: str,
        body: SimpleDocument | SimpleDocumentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MessageSent, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/debit-notes/simple-document"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SimpleDocument | SimpleDocumentDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[MessageSent],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def debit_note_create2(
        self,
        culture: str,
        body: InlineDocument | InlineDocumentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MessageSent, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/debit-notes/inline-document"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InlineDocument | InlineDocumentDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[MessageSent],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def debit_note_delete(
        self, id_: int, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{culture}/debit-notes/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def debit_note_details(
        self, id_: int, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Sql DocumentId
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/debit-notes/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def debit_note_edit(
        self,
        id_: int,
        culture: str,
        body: SimpleDocument | SimpleDocumentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/{culture}/debit-notes/simple-document/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SimpleDocument | SimpleDocumentDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def debit_note_edit2(
        self,
        id_: int,
        culture: str,
        body: InlineDocument | InlineDocumentDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/{culture}/debit-notes/inline-document/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InlineDocument | InlineDocumentDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def debit_note_get_cumulative_document_reference_list(
        self, culture: str, *, ids: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            ids: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/debit-notes/cumulative-references"),
            path_params=[param[str]("culture", culture)],
            query_params=[param[str | None]("ids", ids)],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def debit_note_index(
        self,
        culture: str,
        *,
        sort_by: str | None = None,
        current_page: str | None = None,
        page_size: str | None = None,
        filter_: str | None = None,
        search_string: str | None = None,
        custom_document_models: str | None = None,
        range_: str | None = None,
        month: str | None = None,
        year: str | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            sort_by: Value sent with the request.
            current_page: Value sent with the request.
            page_size: Value sent with the request.
            filter_: Value sent with the request.
            search_string: Value sent with the request.
            custom_document_models: Value sent with the request.
            range_: Value sent with the request.
            month: Value sent with the request.
            year: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/debit-notes"),
            path_params=[param[str]("culture", culture)],
            query_params=[
                param[str | None]("SortBy", sort_by),
                param[str | None]("CurrentPage", current_page),
                param[str | None]("PageSize", page_size),
                param[str | None]("Filter", filter_),
                param[str | None]("SearchString", search_string),
                param[str | None]("CustomDocumentModels", custom_document_models),
                param[str | None]("Range", range_),
                param[str | None]("Month", month),
                param[str | None]("Year", year),
                param[str | None]("StartDate", start_date),
                param[str | None]("EndDate", end_date),
            ],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def debit_note_receive_payment(
        self,
        id_: int,
        culture: str,
        body: PaymentModel | PaymentModelDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/debit-notes/{id}/payments"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentModel | PaymentModelDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
