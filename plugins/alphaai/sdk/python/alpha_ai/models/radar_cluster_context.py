from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import Date, RFC3339DateTime, SdkBaseModel
from .enums.pattern_alph_ai_rest_radar_api import PatternAlphAiRestRadarApi, PatternAlphAiRestRadarApiOrStr
from .radar_cluster_filing import RadarClusterFiling, RadarClusterFilingDict


class RadarClusterContext(SdkBaseModel):
    window_start: Date
    window_end: Date
    known_at: RFC3339DateTime
    buyers: int
    officer_director_buyers: int
    pattern: PatternAlphAiRestRadarApiOrStr = PatternAlphAiRestRadarApi.OPEN_MARKET
    filings_count: int
    evidence: list[RadarClusterFiling]
    evidence_truncated: bool


class RadarClusterContextDict(TypedDict):
    window_start: Date
    window_end: Date
    known_at: RFC3339DateTime
    buyers: int
    officer_director_buyers: int
    pattern: NotRequired[PatternAlphAiRestRadarApiOrStr]
    filings_count: int
    evidence: list[RadarClusterFilingDict]
    evidence_truncated: bool
