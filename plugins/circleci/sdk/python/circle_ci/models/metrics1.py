from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .duration_metrics1 import DurationMetrics1, DurationMetrics1Dict


class Metrics1(SdkBaseModel):
    """Workflow metrics"""

    total_runs: Optional[int] = UNSET
    """Total number of runs"""

    successful_runs: Optional[int] = UNSET
    """Number of successful runs"""

    failed_runs: Optional[int] = UNSET
    """Number of failed runs"""

    success_rate: Optional[float] = UNSET
    """Success rate as a decimal"""

    duration_metrics: Optional[DurationMetrics1] = UNSET
    """Duration statistics"""

    total_credits_used: Optional[int] = UNSET
    """Total credits consumed"""


class Metrics1Dict(TypedDict):
    total_runs: NotRequired[int]
    successful_runs: NotRequired[int]
    failed_runs: NotRequired[int]
    success_rate: NotRequired[float]
    duration_metrics: NotRequired[DurationMetrics1Dict]
    total_credits_used: NotRequired[int]
