from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .evidence import Evidence, EvidenceDict
from .explanation import Explanation, ExplanationDict
from .facts import Facts, FactsDict


class AnomaliesV1ExplanationResponse(SdkBaseModel):
    facts: Facts
    """Deterministic facts about the anomaly, not AI-generated."""

    evidence: list[Evidence]
    """Customer-scoped identifiers the explanation was grounded in."""

    explanation: Explanation
    """The AI-generated portion of the response."""


class AnomaliesV1ExplanationResponseDict(TypedDict):
    facts: FactsDict
    evidence: list[EvidenceDict]
    explanation: ExplanationDict
