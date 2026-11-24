from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pivot_match import PivotMatch, PivotMatchDict
from .threat_source import ThreatSource, ThreatSourceDict


class RiskCategory(SdkBaseModel):
    verdict: Optional[str] = UNSET
    confidence: Optional[float] = UNSET
    primary_threat: Optional[str] = UNSET
    severity: Optional[str] = UNSET
    threat_types: Optional[list[str]] = UNSET
    sources: Optional[list[ThreatSource]] = UNSET
    pivot_matches: Optional[list[PivotMatch]] = UNSET


class RiskCategoryDict(TypedDict):
    verdict: NotRequired[str]
    confidence: NotRequired[float]
    primary_threat: NotRequired[str]
    severity: NotRequired[str]
    threat_types: NotRequired[list[str]]
    sources: NotRequired[list[ThreatSourceDict]]
    pivot_matches: NotRequired[list[PivotMatchDict]]
