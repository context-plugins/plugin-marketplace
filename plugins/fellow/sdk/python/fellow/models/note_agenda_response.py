from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .note_agenda import NoteAgenda, NoteAgendaDict


class NoteAgendaResponse(SdkBaseModel):
    """Response containing a note's agenda as Fellow Markdown."""

    agenda: NoteAgenda
    """A note's agenda content in Fellow Markdown.

    Fellow Markdown is the editable format: what you read can be modified and written back as-is. It is not the same
    format as the note object's read-only ``content_markdown`` field."""


class NoteAgendaResponseDict(TypedDict):
    agenda: NoteAgendaDict
