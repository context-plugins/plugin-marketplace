from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .attendee import Attendee, AttendeeDict


class Note(SdkBaseModel):
    id: Optional[str] = UNSET
    created_at: OptionalNullable[RFC3339DateTime] = UNSET
    updated_at: OptionalNullable[RFC3339DateTime] = UNSET
    title: OptionalNullable[str] = UNSET
    event_guid: OptionalNullable[str] = UNSET
    event_start: OptionalNullable[RFC3339DateTime] = UNSET
    event_end: OptionalNullable[RFC3339DateTime] = UNSET
    event_is_all_day: Optional[bool] = UNSET
    recording_ids: Optional[list[str]] = UNSET
    event_attendees: OptionalNullable[list[Attendee]] = UNSET
    organizer_email: OptionalNullable[str] = UNSET
    """Email of the meeting organizer, as read from the calendar event linked to this note. Null when the note has no
    meeting, when the matching calendar event cannot be found, or when the event has no known organizer. The organizer
    is read from one attendee's copy of the event, chosen automatically, so it may change between requests and may
    differ from the organizer shown elsewhere for the same meeting."""

    content_markdown: OptionalNullable[str] = UNSET
    """A simplified, read-only markdown rendering of the note content, for display and export. Lossy, and not valid
    input for the agenda write endpoint; to edit content, use content_fellow_markdown instead."""

    content_fellow_markdown: OptionalNullable[str] = UNSET
    """The note content as Fellow Markdown, the editable round-trip format: what you read here is what you can write
    back via POST /note/{note_id}/agenda. Null when the note exceeds the serialization limits."""


class NoteDict(TypedDict):
    id: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime | None]
    updated_at: NotRequired[RFC3339DateTime | None]
    title: NotRequired[str | None]
    event_guid: NotRequired[str | None]
    event_start: NotRequired[RFC3339DateTime | None]
    event_end: NotRequired[RFC3339DateTime | None]
    event_is_all_day: NotRequired[bool]
    recording_ids: NotRequired[list[str]]
    event_attendees: NotRequired[list[AttendeeDict] | None]
    organizer_email: NotRequired[str | None]
    content_markdown: NotRequired[str | None]
    content_fellow_markdown: NotRequired[str | None]
