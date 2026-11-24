from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetMedicalTranscriptionJobRequest(SdkBaseModel):
    medical_transcription_job_name: str = Field(alias="MedicalTranscriptionJobName")
    """The name of the medical transcription job you want information about. Job names are case sensitive."""


class GetMedicalTranscriptionJobRequestDict(TypedDict):
    medical_transcription_job_name: str
