from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AudioResponseEvent(SdkBaseModel):
    audio_chunk: Optional[str] = Field(default=UNSET, alias="audioChunk")
    """A chunk of the audio to play."""

    content_type: Optional[str] = Field(default=UNSET, alias="contentType")
    """The encoding of the audio chunk. This is the same as the encoding configure in the contentType field of the
    ConfigurationEvent."""

    event_id: Optional[str] = Field(default=UNSET, alias="eventId")
    """A unique identifier of the event sent by Amazon Lex V2. The identifier is in the form RESPONSE-N, where N is a
    number starting with one and incremented for each event sent by Amazon Lex V2 in the current session."""


class AudioResponseEventDict(TypedDict):
    audio_chunk: NotRequired[str]
    content_type: NotRequired[str]
    event_id: NotRequired[str]
