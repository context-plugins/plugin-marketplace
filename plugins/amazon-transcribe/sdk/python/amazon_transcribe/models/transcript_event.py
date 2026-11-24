from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .transcribestreaming_transcript import TranscribestreamingTranscript, TranscribestreamingTranscriptDict


class TranscriptEvent(SdkBaseModel):
    transcript: Optional[TranscribestreamingTranscript] = Field(default=UNSET, alias="Transcript")


class TranscriptEventDict(TypedDict):
    transcript: NotRequired[TranscribestreamingTranscriptDict]
