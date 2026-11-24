from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .recap import Recap, RecapDict
from .transcript import Transcript, TranscriptDict


class Recording(SdkBaseModel):
    id: Optional[str] = UNSET
    title: OptionalNullable[str] = UNSET
    created_at: OptionalNullable[RFC3339DateTime] = UNSET
    updated_at: OptionalNullable[RFC3339DateTime] = UNSET
    started_at: Optional[RFC3339DateTime] = UNSET
    ended_at: OptionalNullable[RFC3339DateTime] = UNSET
    event_call_url: OptionalNullable[str] = UNSET
    event_guid: OptionalNullable[str] = UNSET
    note_id: OptionalNullable[str] = UNSET
    user_has_calendar_event: OptionalNullable[bool] = UNSET
    transcript: Optional[Transcript] = UNSET
    ai_notes: OptionalNullable[list[Recap]] = UNSET
    media_url: OptionalNullable[str] = UNSET
    """Pre-signed URL for the recording media file. Requires privileged API key."""


class RecordingDict(TypedDict):
    id: NotRequired[str]
    title: NotRequired[str | None]
    created_at: NotRequired[RFC3339DateTime | None]
    updated_at: NotRequired[RFC3339DateTime | None]
    started_at: NotRequired[RFC3339DateTime]
    ended_at: NotRequired[RFC3339DateTime | None]
    event_call_url: NotRequired[str | None]
    event_guid: NotRequired[str | None]
    note_id: NotRequired[str | None]
    user_has_calendar_event: NotRequired[bool | None]
    transcript: NotRequired[TranscriptDict]
    ai_notes: NotRequired[list[RecapDict] | None]
    media_url: NotRequired[str | None]
