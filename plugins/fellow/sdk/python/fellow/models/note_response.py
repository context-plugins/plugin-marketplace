from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .note import Note, NoteDict


class NoteResponse(SdkBaseModel):
    """Response containing a single note."""

    note: Note


class NoteResponseDict(TypedDict):
    note: NoteDict
