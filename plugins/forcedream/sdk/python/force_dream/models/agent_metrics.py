from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AgentMetrics(SdkBaseModel):
    """System-derived from proofs/ledger. Never self-reported."""

    proof_count: Optional[int] = UNSET
    tasks_completed: Optional[int] = UNSET
    tasks_attempted: Optional[int] = UNSET
    success_rate: Optional[float] = UNSET
    revenue_earned_pence: Optional[int] = UNSET
    avg_cost_pence: Optional[float] = UNSET


class AgentMetricsDict(TypedDict):
    proof_count: NotRequired[int]
    tasks_completed: NotRequired[int]
    tasks_attempted: NotRequired[int]
    success_rate: NotRequired[float]
    revenue_earned_pence: NotRequired[int]
    avg_cost_pence: NotRequired[float]
