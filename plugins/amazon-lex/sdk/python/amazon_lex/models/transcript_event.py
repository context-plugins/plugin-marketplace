from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TranscriptEvent(SdkBaseModel):
    transcript: Optional[str] = UNSET
    """The transcript of the voice audio from the user."""

    event_id: Optional[str] = Field(default=UNSET, alias="eventId")
    """A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form RESPONSE-N, where N is a
    number starting with one and incremented for each event sent by Amazon Lex V2 in the current session."""


class TranscriptEventDict(TypedDict):
    transcript: NotRequired[str]
    event_id: NotRequired[str]
