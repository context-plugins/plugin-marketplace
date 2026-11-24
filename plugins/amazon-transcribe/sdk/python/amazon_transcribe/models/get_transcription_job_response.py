from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .transcription_job import TranscriptionJob, TranscriptionJobDict


class GetTranscriptionJobResponse(SdkBaseModel):
    transcription_job: Optional[TranscriptionJob] = Field(default=UNSET, alias="TranscriptionJob")


class GetTranscriptionJobResponseDict(TypedDict):
    transcription_job: NotRequired[TranscriptionJobDict]
