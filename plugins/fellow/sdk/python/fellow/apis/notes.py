from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.append_note_agenda_request import AppendNoteAgendaRequest, AppendNoteAgendaRequestDict
from ..models.find_replace_note_agenda_request import FindReplaceNoteAgendaRequest, FindReplaceNoteAgendaRequestDict
from ..models.get_notes_request import GetNotesRequest, GetNotesRequestDict
from ..models.message_response import MessageResponse
from ..models.note_agenda_response import NoteAgendaResponse
from ..models.note_response import NoteResponse
from ..models.notes_list_response import NotesListResponse
from ..models.prepend_note_agenda_request import PrependNoteAgendaRequest, PrependNoteAgendaRequestDict
from ..models.write_note_agenda_request import WriteNoteAgendaRequest, WriteNoteAgendaRequestDict
from ..server.server import Server


class Notes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = NotesWithRawResponse(client, server, auth)

    def apps_developer_api_api_append_note_agenda(
        self,
        note_id: str,
        body: AppendNoteAgendaRequest | AppendNoteAgendaRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NoteAgendaResponse:
        """Add Fellow Markdown to the end of a note's agenda, leaving the rest of the content in place.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_append_note_agenda(
                note_id, body, request_options=request_options
            ),
        )

    def apps_developer_api_api_delete_note(
        self, note_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Delete a note by its ID.

        **Super Admin Access Required**: This endpoint is restricted to API keys with privileged access. Only users with
        super admin privileges can delete notes through the API.

        Args:
            note_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_delete_note(note_id, request_options=request_options)
        )

    def apps_developer_api_api_find_replace_note_agenda(
        self,
        note_id: str,
        body: FindReplaceNoteAgendaRequest | FindReplaceNoteAgendaRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NoteAgendaResponse:
        """Replace the single occurrence of ``find`` in a note's agenda with Fellow Markdown.

        ``find`` must match exactly once. A missing or ambiguous match is a 422 and changes nothing.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_find_replace_note_agenda(
                note_id, body, request_options=request_options
            ),
        )

    def apps_developer_api_api_get_note_by_id(
        self, note_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> NoteResponse:
        """Retrieve a note by its ID.

        Args:
            note_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_get_note_by_id(note_id, request_options=request_options)
        )

    def apps_developer_api_api_get_notes(
        self, body: GetNotesRequest | GetNotesRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> NotesListResponse:
        """List notes with optional filters and pagination. Privileged access allows you to get notes for the account.
        Non-privileged access allows you to get notes for the authenticated user only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.apps_developer_api_api_get_notes(body, request_options=request_options))

    def apps_developer_api_api_prepend_note_agenda(
        self,
        note_id: str,
        body: PrependNoteAgendaRequest | PrependNoteAgendaRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NoteAgendaResponse:
        """Add Fellow Markdown to the start of a note's agenda, leaving the rest of the content in place.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_prepend_note_agenda(
                note_id, body, request_options=request_options
            ),
        )

    def apps_developer_api_api_write_note_agenda(
        self,
        note_id: str,
        body: WriteNoteAgendaRequest | WriteNoteAgendaRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NoteAgendaResponse:
        """Write a note's agenda and/or rename the note. Provide ``content_fellow_markdown``, ``title``, or both.

        ``content_fellow_markdown`` replaces the entire agenda with the provided Fellow Markdown.

        ``title`` renames the note, the same as renaming it in the Fellow app.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_write_note_agenda(
                note_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> NotesWithRawResponse:
        return self._with_raw_response


class AsyncNotes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncNotesWithRawResponse(client, server, auth)

    async def apps_developer_api_api_append_note_agenda(
        self,
        note_id: str,
        body: AppendNoteAgendaRequest | AppendNoteAgendaRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NoteAgendaResponse:
        """Add Fellow Markdown to the end of a note's agenda, leaving the rest of the content in place.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_append_note_agenda(
                note_id, body, request_options=request_options
            ),
        )

    async def apps_developer_api_api_delete_note(
        self, note_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Delete a note by its ID.

        **Super Admin Access Required**: This endpoint is restricted to API keys with privileged access. Only users with
        super admin privileges can delete notes through the API.

        Args:
            note_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_delete_note(note_id, request_options=request_options)
        )

    async def apps_developer_api_api_find_replace_note_agenda(
        self,
        note_id: str,
        body: FindReplaceNoteAgendaRequest | FindReplaceNoteAgendaRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NoteAgendaResponse:
        """Replace the single occurrence of ``find`` in a note's agenda with Fellow Markdown.

        ``find`` must match exactly once. A missing or ambiguous match is a 422 and changes nothing.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_find_replace_note_agenda(
                note_id, body, request_options=request_options
            ),
        )

    async def apps_developer_api_api_get_note_by_id(
        self, note_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> NoteResponse:
        """Retrieve a note by its ID.

        Args:
            note_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_get_note_by_id(
                note_id, request_options=request_options
            ),
        )

    async def apps_developer_api_api_get_notes(
        self, body: GetNotesRequest | GetNotesRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> NotesListResponse:
        """List notes with optional filters and pagination. Privileged access allows you to get notes for the account.
        Non-privileged access allows you to get notes for the authenticated user only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_get_notes(body, request_options=request_options)
        )

    async def apps_developer_api_api_prepend_note_agenda(
        self,
        note_id: str,
        body: PrependNoteAgendaRequest | PrependNoteAgendaRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NoteAgendaResponse:
        """Add Fellow Markdown to the start of a note's agenda, leaving the rest of the content in place.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_prepend_note_agenda(
                note_id, body, request_options=request_options
            ),
        )

    async def apps_developer_api_api_write_note_agenda(
        self,
        note_id: str,
        body: WriteNoteAgendaRequest | WriteNoteAgendaRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NoteAgendaResponse:
        """Write a note's agenda and/or rename the note. Provide ``content_fellow_markdown``, ``title``, or both.

        ``content_fellow_markdown`` replaces the entire agenda with the provided Fellow Markdown.

        ``title`` renames the note, the same as renaming it in the Fellow app.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_write_note_agenda(
                note_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncNotesWithRawResponse:
        return self._with_raw_response


class NotesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def apps_developer_api_api_append_note_agenda(
        self,
        note_id: str,
        body: AppendNoteAgendaRequest | AppendNoteAgendaRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NoteAgendaResponse, RawError]:
        """Add Fellow Markdown to the end of a note's agenda, leaving the rest of the content in place.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/note/{note_id}/agenda/append"),
            path_params=[param[str]("note_id", note_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AppendNoteAgendaRequest | AppendNoteAgendaRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[NoteAgendaResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_delete_note(
        self, note_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, RawError]:
        """Delete a note by its ID.

        **Super Admin Access Required**: This endpoint is restricted to API keys with privileged access. Only users with
        super admin privileges can delete notes through the API.

        Args:
            note_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/note/{note_id}"),
            path_params=[param[str]("note_id", note_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[MessageResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_find_replace_note_agenda(
        self,
        note_id: str,
        body: FindReplaceNoteAgendaRequest | FindReplaceNoteAgendaRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NoteAgendaResponse, RawError]:
        """Replace the single occurrence of ``find`` in a note's agenda with Fellow Markdown.

        ``find`` must match exactly once. A missing or ambiguous match is a 422 and changes nothing.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/note/{note_id}/agenda/find-replace"),
            path_params=[param[str]("note_id", note_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindReplaceNoteAgendaRequest | FindReplaceNoteAgendaRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[NoteAgendaResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_get_note_by_id(
        self, note_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[NoteResponse, RawError]:
        """Retrieve a note by its ID.

        Args:
            note_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/note/{note_id}"),
            path_params=[param[str]("note_id", note_id)],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[NoteResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_get_notes(
        self, body: GetNotesRequest | GetNotesRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[NotesListResponse, RawError]:
        """List notes with optional filters and pagination. Privileged access allows you to get notes for the account.
        Non-privileged access allows you to get notes for the authenticated user only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/notes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetNotesRequest | GetNotesRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[NotesListResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_prepend_note_agenda(
        self,
        note_id: str,
        body: PrependNoteAgendaRequest | PrependNoteAgendaRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NoteAgendaResponse, RawError]:
        """Add Fellow Markdown to the start of a note's agenda, leaving the rest of the content in place.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/note/{note_id}/agenda/prepend"),
            path_params=[param[str]("note_id", note_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PrependNoteAgendaRequest | PrependNoteAgendaRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[NoteAgendaResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_write_note_agenda(
        self,
        note_id: str,
        body: WriteNoteAgendaRequest | WriteNoteAgendaRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NoteAgendaResponse, RawError]:
        """Write a note's agenda and/or rename the note. Provide ``content_fellow_markdown``, ``title``, or both.

        ``content_fellow_markdown`` replaces the entire agenda with the provided Fellow Markdown.

        ``title`` renames the note, the same as renaming it in the Fellow app.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/note/{note_id}/agenda"),
            path_params=[param[str]("note_id", note_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WriteNoteAgendaRequest | WriteNoteAgendaRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[NoteAgendaResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncNotesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def apps_developer_api_api_append_note_agenda(
        self,
        note_id: str,
        body: AppendNoteAgendaRequest | AppendNoteAgendaRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NoteAgendaResponse, RawError]:
        """Add Fellow Markdown to the end of a note's agenda, leaving the rest of the content in place.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/note/{note_id}/agenda/append"),
            path_params=[param[str]("note_id", note_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AppendNoteAgendaRequest | AppendNoteAgendaRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[NoteAgendaResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_delete_note(
        self, note_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, RawError]:
        """Delete a note by its ID.

        **Super Admin Access Required**: This endpoint is restricted to API keys with privileged access. Only users with
        super admin privileges can delete notes through the API.

        Args:
            note_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/note/{note_id}"),
            path_params=[param[str]("note_id", note_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_find_replace_note_agenda(
        self,
        note_id: str,
        body: FindReplaceNoteAgendaRequest | FindReplaceNoteAgendaRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NoteAgendaResponse, RawError]:
        """Replace the single occurrence of ``find`` in a note's agenda with Fellow Markdown.

        ``find`` must match exactly once. A missing or ambiguous match is a 422 and changes nothing.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/note/{note_id}/agenda/find-replace"),
            path_params=[param[str]("note_id", note_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindReplaceNoteAgendaRequest | FindReplaceNoteAgendaRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[NoteAgendaResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_get_note_by_id(
        self, note_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[NoteResponse, RawError]:
        """Retrieve a note by its ID.

        Args:
            note_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/note/{note_id}"),
            path_params=[param[str]("note_id", note_id)],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[NoteResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_get_notes(
        self, body: GetNotesRequest | GetNotesRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[NotesListResponse, RawError]:
        """List notes with optional filters and pagination. Privileged access allows you to get notes for the account.
        Non-privileged access allows you to get notes for the authenticated user only.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/notes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GetNotesRequest | GetNotesRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[NotesListResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_prepend_note_agenda(
        self,
        note_id: str,
        body: PrependNoteAgendaRequest | PrependNoteAgendaRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NoteAgendaResponse, RawError]:
        """Add Fellow Markdown to the start of a note's agenda, leaving the rest of the content in place.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/note/{note_id}/agenda/prepend"),
            path_params=[param[str]("note_id", note_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PrependNoteAgendaRequest | PrependNoteAgendaRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[NoteAgendaResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_write_note_agenda(
        self,
        note_id: str,
        body: WriteNoteAgendaRequest | WriteNoteAgendaRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NoteAgendaResponse, RawError]:
        """Write a note's agenda and/or rename the note. Provide ``content_fellow_markdown``, ``title``, or both.

        ``content_fellow_markdown`` replaces the entire agenda with the provided Fellow Markdown.

        ``title`` renames the note, the same as renaming it in the Fellow app.

        Args:
            note_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/note/{note_id}/agenda"),
            path_params=[param[str]("note_id", note_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WriteNoteAgendaRequest | WriteNoteAgendaRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[NoteAgendaResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
