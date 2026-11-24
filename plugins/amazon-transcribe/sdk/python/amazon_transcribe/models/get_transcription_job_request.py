from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetTranscriptionJobRequest(SdkBaseModel):
    transcription_job_name: str = Field(alias="TranscriptionJobName")
    """The name of the transcription job you want information about. Job names are case sensitive."""


class GetTranscriptionJobRequestDict(TypedDict):
    transcription_job_name: str
