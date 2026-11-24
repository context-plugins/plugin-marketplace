from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Segment(SdkBaseModel):
    start: Optional[float] = UNSET
    """Start time in seconds."""

    duration: Optional[float] = UNSET
    """Cue duration in seconds."""

    text: Optional[str] = UNSET
    speaker: Optional[int] = UNSET
    """Speaker id (0, 1, …) on diarized podcast transcripts only; absent everywhere else."""


class SegmentDict(TypedDict):
    start: NotRequired[float]
    duration: NotRequired[float]
    text: NotRequired[str]
    speaker: NotRequired[int]
