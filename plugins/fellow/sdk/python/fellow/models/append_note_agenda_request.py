from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AppendNoteAgendaRequest(SdkBaseModel):
    """Request body for appending Fellow Markdown to the end of a note's agenda."""

    content_fellow_markdown: str
    """Fellow Markdown to add at the end of the agenda, in the same format the note object's content_fellow_markdown
    field returns."""


class AppendNoteAgendaRequestDict(TypedDict):
    content_fellow_markdown: str
