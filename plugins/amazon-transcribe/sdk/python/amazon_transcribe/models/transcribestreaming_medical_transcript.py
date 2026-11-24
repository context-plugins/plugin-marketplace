from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .medical_result import MedicalResult, MedicalResultDict


class TranscribestreamingMedicalTranscript(SdkBaseModel):
    results: Optional[list[MedicalResult]] = Field(default=UNSET, alias="Results")
    """Contains a set of transcription results from one or more audio segments, along with additional information per
    your request parameters. This can include information relating to alternative transcriptions, channel
    identification, partial result stabilization, language identification, and other transcription-related data."""


class TranscribestreamingMedicalTranscriptDict(TypedDict):
    results: NotRequired[list[MedicalResultDict]]
