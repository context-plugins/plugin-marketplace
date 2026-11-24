from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .paginated_response_note import PaginatedResponseNote, PaginatedResponseNoteDict


class NotesListResponse(SdkBaseModel):
    """Response containing a paginated list of notes."""

    notes: PaginatedResponseNote


class NotesListResponseDict(TypedDict):
    notes: PaginatedResponseNoteDict
