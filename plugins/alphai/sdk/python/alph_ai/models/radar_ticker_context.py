from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.reason1_alph_ai_rest_radar_api import Reason1AlphAiRestRadarApiOrStr
from .enums.status2 import Status2OrStr
from .radar_cluster_context import RadarClusterContext, RadarClusterContextDict
from .radar_filing_context import RadarFilingContext, RadarFilingContextDict


class RadarTickerContext(SdkBaseModel):
    ticker: str
    cik: int
    status: Status2OrStr
    reason: Optional[Reason1AlphAiRestRadarApiOrStr] = UNSET
    filings_count: Optional[int] = UNSET
    filings: Optional[list[RadarFilingContext]] = UNSET
    cluster_buys_count: Optional[int] = UNSET
    cluster_buys: Optional[list[RadarClusterContext]] = UNSET


class RadarTickerContextDict(TypedDict):
    ticker: str
    cik: int
    status: Status2OrStr
    reason: NotRequired[Reason1AlphAiRestRadarApiOrStr]
    filings_count: NotRequired[int]
    filings: NotRequired[list[RadarFilingContextDict]]
    cluster_buys_count: NotRequired[int]
    cluster_buys: NotRequired[list[RadarClusterContextDict]]
