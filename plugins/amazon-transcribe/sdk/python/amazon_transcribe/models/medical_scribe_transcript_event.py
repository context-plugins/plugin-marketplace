from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .medical_scribe_transcript_segment import MedicalScribeTranscriptSegment, MedicalScribeTranscriptSegmentDict


class MedicalScribeTranscriptEvent(SdkBaseModel):
    transcript_segment: Optional[MedicalScribeTranscriptSegment] = Field(default=UNSET, alias="TranscriptSegment")


class MedicalScribeTranscriptEventDict(TypedDict):
    transcript_segment: NotRequired[MedicalScribeTranscriptSegmentDict]
