from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RadarSnapshotSummary(SdkBaseModel):
    active_tickers: int
    scored_tickers: int
    elevated_tickers: int
    verified_candidates: int
    collection_unverified: int


class RadarSnapshotSummaryDict(TypedDict):
    active_tickers: int
    scored_tickers: int
    elevated_tickers: int
    verified_candidates: int
    collection_unverified: int
