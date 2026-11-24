from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dga_score import DgaScore, DgaScoreDict
from .domain_reputation_input import DomainReputationInput, DomainReputationInputDict
from .evidence_summary import EvidenceSummary, EvidenceSummaryDict
from .reputation_intelligence import ReputationIntelligence, ReputationIntelligenceDict
from .risk_category import RiskCategory, RiskCategoryDict
from .trust_signals import TrustSignals, TrustSignalsDict


class DomainReputationResponse(SdkBaseModel):
    input: Optional[DomainReputationInput] = UNSET
    assessed_at: Optional[str] = UNSET
    version: Optional[str] = UNSET
    processing_time_ms: Optional[int] = UNSET
    risk_category: Optional[RiskCategory] = UNSET
    dga_score: Optional[DgaScore] = UNSET
    trust_signals: Optional[TrustSignals] = UNSET
    intelligence: Optional[ReputationIntelligence] = UNSET
    evidence_summary: Optional[EvidenceSummary] = UNSET
    errors: Optional[list[str]] = UNSET


class DomainReputationResponseDict(TypedDict):
    input: NotRequired[DomainReputationInputDict]
    assessed_at: NotRequired[str]
    version: NotRequired[str]
    processing_time_ms: NotRequired[int]
    risk_category: NotRequired[RiskCategoryDict]
    dga_score: NotRequired[DgaScoreDict]
    trust_signals: NotRequired[TrustSignalsDict]
    intelligence: NotRequired[ReputationIntelligenceDict]
    evidence_summary: NotRequired[EvidenceSummaryDict]
    errors: NotRequired[list[str]]
