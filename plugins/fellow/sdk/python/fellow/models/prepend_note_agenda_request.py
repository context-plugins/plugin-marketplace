from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PrependNoteAgendaRequest(SdkBaseModel):
    """Request body for prepending Fellow Markdown to the start of a note's agenda."""

    content_fellow_markdown: str
    """Fellow Markdown to add at the start of the agenda, in the same format the note object's content_fellow_markdown
    field returns."""


class PrependNoteAgendaRequestDict(TypedDict):
    content_fellow_markdown: str
