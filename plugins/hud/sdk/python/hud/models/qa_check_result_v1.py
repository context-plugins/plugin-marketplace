from __future__ import annotations

from typing import Any, Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.verdict import VerdictOrStr
from .qa_check_finding_v1 import QaCheckFindingV1, QaCheckFindingV1Dict
from .qa_execution_error import QaExecutionError, QaExecutionErrorDict


class QaCheckResultV1(SdkBaseModel):
    """The result every QA check yields.

    A check fails on a confirmed problem and otherwise passes; ``unknown`` remains for results recorded before
    ``execution_error``. A check whose input leaves nothing to judge passes and names that stage in ``execution_error``.
    A failure a rerun may fix, such as input that did not load or an answer that did not parse, ends the run with an
    error instead of yielding a result."""

    schema_version: Literal["qa_agent_result.v1"] = "qa_agent_result.v1"
    verdict: VerdictOrStr
    findings: list[QaCheckFindingV1]
    summary: Optional[str] = UNSET
    metadata: Optional[dict[str, Any]] = UNSET
    execution_error: Optional[QaExecutionError] = UNSET


class QaCheckResultV1Dict(TypedDict):
    schema_version: Literal["qa_agent_result.v1"]
    verdict: VerdictOrStr
    findings: list[QaCheckFindingV1Dict]
    summary: NotRequired[str]
    metadata: NotRequired[dict[str, Any]]
    execution_error: NotRequired[QaExecutionErrorDict]
