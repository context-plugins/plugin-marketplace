from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.outcome1 import Outcome1OrStr
from .enums.source1 import Source1OrStr
from .error_block import ErrorBlock, ErrorBlockDict
from .segment import Segment, SegmentDict


class BatchResult2(SdkBaseModel):
    """One entry per requested video. Exactly three outcomes: "ok" carries the transcript, "processing" carries the
    audio-transcription job to poll, "error" carries the same error block a request-level failure does."""

    video_id: str
    outcome: Outcome1OrStr
    title: OptionalNullable[str] = UNSET
    """outcome "ok" only."""

    source: Optional[Source1OrStr] = UNSET
    """outcome "ok" only."""

    text: OptionalNullable[str] = UNSET
    """outcome "ok" only."""

    segments: OptionalNullable[list[Segment]] = UNSET
    """outcome "ok" only."""

    bytes_: Optional[int] = Field(default=UNSET, alias="bytes")
    """outcome "ok" only."""

    job_id: Optional[str] = UNSET
    """outcome "processing" only: the audio-transcription job started for a captionless entry. Re-send the batch later
    or poll poll_url."""

    poll_url: Optional[str] = UNSET
    """outcome "processing" only: path to poll for the finished transcript."""

    error: Optional[ErrorBlock] = UNSET
    """Every failure carries this block. Branch on code (a stable string) or number (a stable integer whose thousands
    digit is the family: 1 request, 2 account, 3 input, 4 content, 5 transient, 9 ours; 5xxx means retry with backoff).
    At most one of retry_with, details, issues is present. Failures are never charged."""


class BatchResult2Dict(TypedDict):
    video_id: str
    outcome: Outcome1OrStr
    title: NotRequired[str | None]
    source: NotRequired[Source1OrStr]
    text: NotRequired[str | None]
    segments: NotRequired[list[SegmentDict] | None]
    bytes_: NotRequired[int]
    job_id: NotRequired[str]
    poll_url: NotRequired[str]
    error: NotRequired[ErrorBlockDict]
