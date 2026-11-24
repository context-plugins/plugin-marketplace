from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.status_transcriptfetch_transcripts_api import StatusTranscriptfetchTranscriptsApiOrStr
from .error_block import ErrorBlock, ErrorBlockDict
from .transcript_data2 import TranscriptData2, TranscriptData2Dict
from .usage import Usage, UsageDict


class JobStatusEnvelope2(SdkBaseModel):
    """Response of the job poll endpoint. data holds the transcript once status is completed and is null while
    processing (usage is absent then); a failed job has ok:false and an error block instead."""

    ok: bool
    request_id: str
    status: StatusTranscriptfetchTranscriptsApiOrStr
    job_id: str
    data: OptionalNullable[TranscriptData2] = UNSET
    """The finished transcript; null until the job completes."""

    usage: Optional[Usage] = UNSET
    error: Optional[ErrorBlock] = UNSET
    """Every failure carries this block. Branch on code (a stable string) or number (a stable integer whose thousands
    digit is the family: 1 request, 2 account, 3 input, 4 content, 5 transient, 9 ours; 5xxx means retry with backoff).
    At most one of retry_with, details, issues is present. Failures are never charged."""


class JobStatusEnvelope2Dict(TypedDict):
    ok: bool
    request_id: str
    status: StatusTranscriptfetchTranscriptsApiOrStr
    job_id: str
    data: NotRequired[TranscriptData2Dict | None]
    usage: NotRequired[UsageDict]
    error: NotRequired[ErrorBlockDict]
