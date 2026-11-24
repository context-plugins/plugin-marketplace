from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AudioInputEvent(SdkBaseModel):
    audio_chunk: Optional[str] = Field(default=UNSET, alias="audioChunk")
    """An encoded stream of audio."""

    content_type: str = Field(alias="contentType")
    """The encoding used for the audio chunk. You must use 8 KHz PCM 16-bit mono-channel little-endian format. The value
    of the field should be: audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false"""

    event_id: Optional[str] = Field(default=UNSET, alias="eventId")
    """A unique identifier that your application assigns to the event. You can use this to identify events in logs."""

    client_timestamp_millis: Optional[int] = Field(default=UNSET, alias="clientTimestampMillis")
    """A timestamp set by the client of the date and time that the event was sent to Amazon Lex V2."""


class AudioInputEventDict(TypedDict):
    audio_chunk: NotRequired[str]
    content_type: str
    event_id: NotRequired[str]
    client_timestamp_millis: NotRequired[int]
