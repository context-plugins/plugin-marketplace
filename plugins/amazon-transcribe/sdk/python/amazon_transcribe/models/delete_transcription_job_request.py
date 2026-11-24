from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteTranscriptionJobRequest(SdkBaseModel):
    transcription_job_name: str = Field(alias="TranscriptionJobName")
    """The name of the transcription job you want to delete. Job names are case sensitive."""


class DeleteTranscriptionJobRequestDict(TypedDict):
    transcription_job_name: str
