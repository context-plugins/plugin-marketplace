from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class NoteIncludableExpensiveField(SdkBaseModel):
    event_attendees: bool = False
    organizer_email: bool = False
    content_markdown: bool = False
    content_fellow_markdown: bool = False


class NoteIncludableExpensiveFieldDict(TypedDict):
    event_attendees: NotRequired[bool]
    organizer_email: NotRequired[bool]
    content_markdown: NotRequired[bool]
    content_fellow_markdown: NotRequired[bool]
