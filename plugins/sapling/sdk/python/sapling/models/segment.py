from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Segment(SdkBaseModel):
    end: Optional[int] = UNSET
    score: Optional[float] = UNSET
    start: Optional[int] = UNSET


class SegmentDict(TypedDict):
    end: NotRequired[int]
    score: NotRequired[float]
    start: NotRequired[int]
