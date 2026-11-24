from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .medical_transcription_job import MedicalTranscriptionJob, MedicalTranscriptionJobDict


class StartMedicalTranscriptionJobResponse(SdkBaseModel):
    medical_transcription_job: Optional[MedicalTranscriptionJob] = Field(default=UNSET, alias="MedicalTranscriptionJob")


class StartMedicalTranscriptionJobResponseDict(TypedDict):
    medical_transcription_job: NotRequired[MedicalTranscriptionJobDict]
