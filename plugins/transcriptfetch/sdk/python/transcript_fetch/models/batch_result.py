from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.outcome import OutcomeOrStr
from .segment import Segment, SegmentDict


class BatchResult(SdkBaseModel):
    video_id: Optional[str] = UNSET
    outcome: OptionalNullable[OutcomeOrStr] = UNSET
    reason: OptionalNullable[str] = UNSET
    """Structured failure reason (no_captions, unavailable, upstream_error, …); null on success."""

    job_id: OptionalNullable[str] = UNSET
    """Set on outcome "processing": the audio-transcription job started for a captionless entry. Re-send the batch later
    or poll poll_url."""

    poll_url: OptionalNullable[str] = UNSET
    """Set on outcome "processing": path to poll for the finished transcript."""

    message: OptionalNullable[str] = UNSET
    """Human-readable explanation of the failure; null on success."""

    title: OptionalNullable[str] = UNSET
    text: OptionalNullable[str] = UNSET
    segments: OptionalNullable[list[Segment]] = UNSET
    bytes_: Optional[int] = Field(default=UNSET, alias="bytes")


class BatchResultDict(TypedDict):
    video_id: NotRequired[str]
    outcome: NotRequired[OutcomeOrStr | None]
    reason: NotRequired[str | None]
    job_id: NotRequired[str | None]
    poll_url: NotRequired[str | None]
    message: NotRequired[str | None]
    title: NotRequired[str | None]
    text: NotRequired[str | None]
    segments: NotRequired[list[SegmentDict] | None]
    bytes_: NotRequired[int]
