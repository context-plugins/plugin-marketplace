from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .requirement_check import RequirementCheck, RequirementCheckDict


class ReadyRequirementsEvaluation(SdkBaseModel):
    """``evaluated_trace_ids`` is the K traces actually scored.

    ``candidate_count`` is the total eligible pool. When ``candidate_count < k`` the count check fails and per-K checks
    score whatever candidates exist."""

    passed: bool
    k: int
    candidate_count: int
    evaluated_trace_ids: Optional[list[str]] = UNSET
    requirements_version: int = 1
    checks: Optional[list[RequirementCheck]] = UNSET
    can_override: bool = True
    has_requirements: bool = True
    evaluated_at: RFC3339DateTime


class ReadyRequirementsEvaluationDict(TypedDict):
    passed: bool
    k: int
    candidate_count: int
    evaluated_trace_ids: NotRequired[list[str]]
    requirements_version: NotRequired[int]
    checks: NotRequired[list[RequirementCheckDict]]
    can_override: NotRequired[bool]
    has_requirements: NotRequired[bool]
    evaluated_at: RFC3339DateTime
