from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RiskAggregations(SdkBaseModel):
    """Aggregate counts of risk statuses across the full filtered result set (all pages), not just the current page."""

    total: int
    at_risk: int = Field(alias="atRisk")
    on_track: int = Field(alias="onTrack")
    unknown: int


class RiskAggregationsDict(TypedDict):
    total: int
    at_risk: int
    on_track: int
    unknown: int
