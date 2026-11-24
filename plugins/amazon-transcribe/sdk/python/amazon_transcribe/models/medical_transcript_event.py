from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .transcribestreaming_medical_transcript import (
    TranscribestreamingMedicalTranscript,
    TranscribestreamingMedicalTranscriptDict,
)


class MedicalTranscriptEvent(SdkBaseModel):
    transcript: Optional[TranscribestreamingMedicalTranscript] = Field(default=UNSET, alias="Transcript")


class MedicalTranscriptEventDict(TypedDict):
    transcript: NotRequired[TranscribestreamingMedicalTranscriptDict]
