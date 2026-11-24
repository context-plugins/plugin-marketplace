from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .transcript_job_data import TranscriptJobData, TranscriptJobDataDict


class JobAcceptedEnvelope2(SdkBaseModel):
    """Returned with HTTP 202 when a request escalates to audio transcription. Poll poll_url (or wait for the
    callback_url delivery); credits are charged on delivery, not here."""

    ok: Literal["True"] = "True"
    request_id: str
    status: Literal["processing"] = "processing"
    job_id: str
    poll_url: str
    """Path of the job endpoint to poll."""

    data: Optional[TranscriptJobData] = UNSET
    """Placeholder data block on a 202: identifies what is being transcribed while the job runs."""


class JobAcceptedEnvelope2Dict(TypedDict):
    ok: Literal["True"]
    request_id: str
    status: Literal["processing"]
    job_id: str
    poll_url: str
    data: NotRequired[TranscriptJobDataDict]
