from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteMedicalTranscriptionJobRequest(SdkBaseModel):
    medical_transcription_job_name: str = Field(alias="MedicalTranscriptionJobName")
    """The name of the medical transcription job you want to delete. Job names are case sensitive."""


class DeleteMedicalTranscriptionJobRequestDict(TypedDict):
    medical_transcription_job_name: str
