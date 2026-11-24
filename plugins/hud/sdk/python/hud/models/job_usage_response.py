from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .job_usage_cost_breakdown import JobUsageCostBreakdown, JobUsageCostBreakdownDict
from .trace_usage_breakdown import TraceUsageBreakdown, TraceUsageBreakdownDict
from .training_cost_info import TrainingCostInfo, TrainingCostInfoDict


class JobUsageResponse(SdkBaseModel):
    job_id: UUID
    job_name: Optional[str] = UNSET
    trace_count: int = 0
    environment_cost: Optional[JobUsageCostBreakdown] = UNSET
    inference_cost: Optional[JobUsageCostBreakdown] = UNSET
    inference_cost_incomplete: bool = False
    total_cost: float = 0.0
    training_cost: Optional[TrainingCostInfo] = UNSET
    traces: Optional[list[TraceUsageBreakdown]] = UNSET
    environments_still_running: int = 0
    calculated_at: RFC3339DateTime
    note: Optional[str] = UNSET


class JobUsageResponseDict(TypedDict):
    job_id: UUID
    job_name: NotRequired[str]
    trace_count: NotRequired[int]
    environment_cost: NotRequired[JobUsageCostBreakdownDict]
    inference_cost: NotRequired[JobUsageCostBreakdownDict]
    inference_cost_incomplete: NotRequired[bool]
    total_cost: NotRequired[float]
    training_cost: NotRequired[TrainingCostInfoDict]
    traces: NotRequired[list[TraceUsageBreakdownDict]]
    environments_still_running: NotRequired[int]
    calculated_at: RFC3339DateTime
    note: NotRequired[str]
