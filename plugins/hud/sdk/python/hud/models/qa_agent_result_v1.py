from __future__ import annotations

from typing import Any, Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.verdict import VerdictOrStr
from .qa_agent_finding import QaAgentFinding, QaAgentFindingDict
from .qa_execution_error import QaExecutionError, QaExecutionErrorDict


class QaAgentResultV1(SdkBaseModel):
    """Versioned result every QA agent must emit."""

    schema_version: Literal["qa_agent_result.v1"] = "qa_agent_result.v1"
    verdict: VerdictOrStr
    findings: list[QaAgentFinding]
    summary: Optional[str] = UNSET
    metadata: Optional[Any] = UNSET
    execution_error: Optional[QaExecutionError] = UNSET


class QaAgentResultV1Dict(TypedDict):
    schema_version: Literal["qa_agent_result.v1"]
    verdict: VerdictOrStr
    findings: list[QaAgentFindingDict]
    summary: NotRequired[str]
    metadata: NotRequired[Any]
    execution_error: NotRequired[QaExecutionErrorDict]
