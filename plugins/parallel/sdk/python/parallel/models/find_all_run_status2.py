from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr
from .enums.termination_reason import TerminationReasonOrStr
from .find_all_candidate_metrics1 import FindAllCandidateMetrics1, FindAllCandidateMetrics1Dict


class FindAllRunStatus2(SdkBaseModel):
    """Status object for the FindAll run."""

    status: StatusOrStr
    """Status of the FindAll run."""

    is_active: bool
    """Whether the FindAll run is active"""

    metrics: FindAllCandidateMetrics1
    """Candidate metrics for the FindAll run."""

    termination_reason: Optional[TerminationReasonOrStr] = UNSET
    """Reason for termination when FindAll run is in terminal status."""


class FindAllRunStatus2Dict(TypedDict):
    status: StatusOrStr
    is_active: bool
    metrics: FindAllCandidateMetrics1Dict
    termination_reason: NotRequired[TerminationReasonOrStr]
