from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .duration_metrics import DurationMetrics, DurationMetricsDict


class Metrics(SdkBaseModel):
    """Job metrics"""

    total_runs: Optional[int] = UNSET
    """Total number of runs"""

    successful_runs: Optional[int] = UNSET
    """Number of successful runs"""

    failed_runs: Optional[int] = UNSET
    """Number of failed runs"""

    success_rate: Optional[float] = UNSET
    """Success rate as a decimal"""

    duration_metrics: Optional[DurationMetrics] = UNSET
    """Duration statistics"""

    total_credits_used: Optional[int] = UNSET
    """Total credits consumed"""


class MetricsDict(TypedDict):
    total_runs: NotRequired[int]
    successful_runs: NotRequired[int]
    failed_runs: NotRequired[int]
    success_rate: NotRequired[float]
    duration_metrics: NotRequired[DurationMetricsDict]
    total_credits_used: NotRequired[int]
