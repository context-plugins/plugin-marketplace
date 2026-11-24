from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.event_reason import EventReasonOrStr


class PlaybackInterruptionEvent(SdkBaseModel):
    event_reason: Optional[EventReasonOrStr] = Field(default=UNSET, alias="eventReason")
    """Indicates the type of user input that Amazon Lex V2 detected."""

    caused_by_event_id: Optional[str] = Field(default=UNSET, alias="causedByEventId")
    """The identifier of the event that contained the audio, DTMF, or text that caused the interruption."""

    event_id: Optional[str] = Field(default=UNSET, alias="eventId")
    """A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form RESPONSE-N, where N is a
    number starting with one and incremented for each event sent by Amazon Lex V2 in the current session."""


class PlaybackInterruptionEventDict(TypedDict):
    event_reason: NotRequired[EventReasonOrStr]
    caused_by_event_id: NotRequired[str]
    event_id: NotRequired[str]
