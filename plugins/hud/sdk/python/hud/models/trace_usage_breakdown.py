from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class TraceUsageBreakdown(SdkBaseModel):
    trace_id: UUID
    created_at: Optional[RFC3339DateTime] = UNSET
    end_time: Optional[RFC3339DateTime] = UNSET
    status: Optional[str] = UNSET
    environment_id: Optional[UUID] = UNSET
    environment_cost: float = 0.0
    environment_transactions: int = 0
    environment_hourly_rate: Optional[float] = UNSET
    environment_still_running: bool = False
    environment_baseline_cost: float = 0.0
    environment_additional_cost: float = 0.0
    environment_baseline_minutes: int = 5
    environment_additional_minutes: int = 0
    environment_total_runtime_seconds: Optional[float] = UNSET
    inference_cost: float = 0.0
    inference_calls: int = 0
    inference_cost_incomplete: bool = False
    agent_actions: int = 0
    total_cost: float = 0.0


class TraceUsageBreakdownDict(TypedDict):
    trace_id: UUID
    created_at: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    status: NotRequired[str]
    environment_id: NotRequired[UUID]
    environment_cost: NotRequired[float]
    environment_transactions: NotRequired[int]
    environment_hourly_rate: NotRequired[float]
    environment_still_running: NotRequired[bool]
    environment_baseline_cost: NotRequired[float]
    environment_additional_cost: NotRequired[float]
    environment_baseline_minutes: NotRequired[int]
    environment_additional_minutes: NotRequired[int]
    environment_total_runtime_seconds: NotRequired[float]
    inference_cost: NotRequired[float]
    inference_calls: NotRequired[int]
    inference_cost_incomplete: NotRequired[bool]
    agent_actions: NotRequired[int]
    total_cost: NotRequired[float]
