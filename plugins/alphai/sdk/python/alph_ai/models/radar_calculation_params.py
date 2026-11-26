from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RadarCalculationParams(SdkBaseModel):
    effective_at: int
    window_seconds: int
    baseline_seconds: int
    half_life_seconds: int
    min_relevance: int
    max_story_tickers: int
    prior_stories: float
    min_baseline_stories: int
    min_baseline_days: int
    min_sentiment_stories: int
    min_sentiment_coverage: float
    spike_tail: float


class RadarCalculationParamsDict(TypedDict):
    effective_at: int
    window_seconds: int
    baseline_seconds: int
    half_life_seconds: int
    min_relevance: int
    max_story_tickers: int
    prior_stories: float
    min_baseline_stories: int
    min_baseline_days: int
    min_sentiment_stories: int
    min_sentiment_coverage: float
    spike_tail: float
