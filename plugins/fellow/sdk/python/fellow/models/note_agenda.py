from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class NoteAgenda(SdkBaseModel):
    """A note's agenda content in Fellow Markdown.

    Fellow Markdown is the editable format: what you read can be modified and written back as-is. It is not the same
    format as the note object's read-only ``content_markdown`` field."""

    note_id: str
    title: str | None
    content_fellow_markdown: str


class NoteAgendaDict(TypedDict):
    note_id: str
    title: str | None
    content_fellow_markdown: str
