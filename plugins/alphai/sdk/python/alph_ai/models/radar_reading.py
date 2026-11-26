from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .radar_collection import RadarCollection, RadarCollectionDict
from .radar_evidence import RadarEvidence, RadarEvidenceDict
from .radar_sentiment import RadarSentiment, RadarSentimentDict
from .radar_ticker_context import RadarTickerContext, RadarTickerContextDict


class RadarReading(SdkBaseModel):
    ticker: str
    sector: str
    market: str
    market_exposure_baseline: int
    market_exposure_current: int
    collection: RadarCollection
    stories: int
    articles: int
    outlets: int
    model_stories: int
    model_outlets: int
    baseline_stories: int
    baseline_active_days: int
    stories_per_window_unadjusted: float
    stories_expected: float
    tail_probability: float
    news_z: float
    anomaly_reason: str
    candidate_news_spike: bool
    sent: RadarSentiment
    sent_prev: RadarSentiment
    sent_delta: float
    evidence_uids: list[str]
    name: str
    evidence: list[RadarEvidence]
    event_context: Optional[RadarTickerContext] = UNSET


class RadarReadingDict(TypedDict):
    ticker: str
    sector: str
    market: str
    market_exposure_baseline: int
    market_exposure_current: int
    collection: RadarCollectionDict
    stories: int
    articles: int
    outlets: int
    model_stories: int
    model_outlets: int
    baseline_stories: int
    baseline_active_days: int
    stories_per_window_unadjusted: float
    stories_expected: float
    tail_probability: float
    news_z: float
    anomaly_reason: str
    candidate_news_spike: bool
    sent: RadarSentimentDict
    sent_prev: RadarSentimentDict
    sent_delta: float
    evidence_uids: list[str]
    name: str
    evidence: list[RadarEvidenceDict]
    event_context: NotRequired[RadarTickerContextDict]
