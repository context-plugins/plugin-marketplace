from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .daily_sentiment_bucket import DailySentimentBucket, DailySentimentBucketDict


class TickerSentimentSummary(SdkBaseModel):
    ticker: str
    days: int
    total: int
    """Articles with a sentiment call in the window — the sum of the ``daily`` buckets."""

    bullish: int
    neutral: int
    bearish: int
    daily: list[DailySentimentBucket]


class TickerSentimentSummaryDict(TypedDict):
    ticker: str
    days: int
    total: int
    bullish: int
    neutral: int
    bearish: int
    daily: list[DailySentimentBucketDict]
