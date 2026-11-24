from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity import SeverityOrStr


class QaCheckFindingV1(SdkBaseModel):
    """One actionable issue a QA check identified."""

    model_config = ConfigDict(extra="forbid")

    finding_type: str
    severity: SeverityOrStr
    summary: str
    confidence: Optional[float] = UNSET
    evidence_refs: Optional[list[str]] = UNSET
    recommended_action: Optional[str] = UNSET
    metadata: Optional[dict[str, Any]] = UNSET


class QaCheckFindingV1Dict(TypedDict):
    finding_type: str
    severity: SeverityOrStr
    summary: str
    confidence: NotRequired[float]
    evidence_refs: NotRequired[list[str]]
    recommended_action: NotRequired[str]
    metadata: NotRequired[dict[str, Any]]
