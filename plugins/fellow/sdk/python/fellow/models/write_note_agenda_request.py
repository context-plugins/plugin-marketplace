from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class WriteNoteAgendaRequest(SdkBaseModel):
    """Request body for writing a note's agenda and/or renaming the note."""

    content_fellow_markdown: OptionalNullable[str] = UNSET
    """The full agenda body in Fellow Markdown, the same format the note object's content_fellow_markdown field returns.
    When provided, replaces the existing agenda content."""

    title: OptionalNullable[str] = UNSET
    """New title for the note. When provided, renames the note."""


class WriteNoteAgendaRequestDict(TypedDict):
    content_fellow_markdown: NotRequired[str | None]
    title: NotRequired[str | None]
