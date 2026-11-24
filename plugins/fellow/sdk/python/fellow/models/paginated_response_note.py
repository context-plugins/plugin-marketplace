from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .note import Note, NoteDict
from .page_info import PageInfo, PageInfoDict


class PaginatedResponseNote(SdkBaseModel):
    page_info: PageInfo
    """Information about a page returned in a paginated response."""

    data: list[Note]


class PaginatedResponseNoteDict(TypedDict):
    page_info: PageInfoDict
    data: list[NoteDict]
