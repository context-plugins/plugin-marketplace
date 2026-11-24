from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.status_transcriptfetch_transcripts_api import StatusTranscriptfetchTranscriptsApiOrStr
from .error_transcriptfetch_transcripts_api import (
    ErrorTranscriptfetchTranscriptsApi,
    ErrorTranscriptfetchTranscriptsApiDict,
)
from .transcript_data import TranscriptData, TranscriptDataDict
from .usage import Usage, UsageDict


class JobStatusEnvelope(SdkBaseModel):
    """Response of the job poll endpoint. data holds the transcript once status is completed and is null while
    processing (usage is absent then); a failed job has ok:false and an error block instead."""

    ok: bool
    request_id: str
    status: StatusTranscriptfetchTranscriptsApiOrStr
    job_id: str
    data: OptionalNullable[TranscriptData] = UNSET
    """The finished transcript; null until the job completes."""

    usage: Optional[Usage] = UNSET
    error: Optional[ErrorTranscriptfetchTranscriptsApi] = UNSET
    """Present when status is failed."""


class JobStatusEnvelopeDict(TypedDict):
    ok: bool
    request_id: str
    status: StatusTranscriptfetchTranscriptsApiOrStr
    job_id: str
    data: NotRequired[TranscriptDataDict | None]
    usage: NotRequired[UsageDict]
    error: NotRequired[ErrorTranscriptfetchTranscriptsApiDict]
