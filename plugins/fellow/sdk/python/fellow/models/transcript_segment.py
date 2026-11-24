from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TranscriptSegment(SdkBaseModel):
    start: float
    end: float
    speaker: str | None
    text: str


class TranscriptSegmentDict(TypedDict):
    start: float
    end: float
    speaker: str | None
    text: str
