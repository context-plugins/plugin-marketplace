from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SentenceScore(SdkBaseModel):
    end: Optional[int] = UNSET
    score: Optional[float] = UNSET
    sentence: Optional[str] = UNSET
    start: Optional[int] = UNSET


class SentenceScoreDict(TypedDict):
    end: NotRequired[int]
    score: NotRequired[float]
    sentence: NotRequired[str]
    start: NotRequired[int]
