from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RadarSentiment(SdkBaseModel):
    value: float
    usable_stories: int
    coverage: float
    reason: str


class RadarSentimentDict(TypedDict):
    value: float
    usable_stories: int
    coverage: float
    reason: str
