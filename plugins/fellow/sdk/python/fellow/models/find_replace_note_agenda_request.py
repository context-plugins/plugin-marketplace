from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FindReplaceNoteAgendaRequest(SdkBaseModel):
    """Request body for replacing a single occurrence of text in a note's agenda."""

    find: str
    """Existing agenda text to replace. Must appear exactly once, or the request is rejected."""

    content_fellow_markdown: str
    """Fellow Markdown to substitute for the matched text, in the same format the note object's content_fellow_markdown
    field returns. An empty string deletes the matched text."""


class FindReplaceNoteAgendaRequestDict(TypedDict):
    find: str
    content_fellow_markdown: str
