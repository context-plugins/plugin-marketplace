from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity import SeverityOrStr


class QaAgentFinding(SdkBaseModel):
    """One actionable issue identified by a QA agent."""

    model_config = ConfigDict(extra="forbid")

    finding_type: str
    severity: SeverityOrStr
    summary: str
    confidence: Optional[float] = UNSET
    evidence_refs: Optional[list[str]] = UNSET
    recommended_action: Optional[str] = UNSET
    metadata: Optional[Any] = UNSET


class QaAgentFindingDict(TypedDict):
    finding_type: str
    severity: SeverityOrStr
    summary: str
    confidence: NotRequired[float]
    evidence_refs: NotRequired[list[str]]
    recommended_action: NotRequired[str]
    metadata: NotRequired[Any]
