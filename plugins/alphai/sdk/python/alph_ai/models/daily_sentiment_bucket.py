from __future__ import annotations

from typing_extensions import TypedDict

from ..core import Date, SdkBaseModel


class DailySentimentBucket(SdkBaseModel):
    day: Date
    bullish: int
    neutral: int
    bearish: int


class DailySentimentBucketDict(TypedDict):
    day: Date
    bullish: int
    neutral: int
    bearish: int
