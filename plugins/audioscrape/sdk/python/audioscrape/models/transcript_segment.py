from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class TranscriptSegment(SdkBaseModel):
    end: float
    speaker: OptionalNullable[str] = UNSET
    start: float
    text: str


class TranscriptSegmentDict(TypedDict):
    end: float
    speaker: NotRequired[str | None]
    start: float
    text: str
