from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .model_task_score_point import ModelTaskScorePoint, ModelTaskScorePointDict


class ModelTasksetResultRow(SdkBaseModel):
    """A model's performance on one taskset, aggregated from its graded traces."""

    taskset_id: UUID
    taskset_name: str
    is_public: bool
    purpose: Optional[str] = UNSET
    total_tasks: int
    tasks_with_traces: int
    avg_score: float
    tasks_in_range_0_99: int
    tasks_in_range_5_75: int
    tasks_in_range_15_40: int
    min_traces_per_task: int
    max_traces_per_task: int
    per_task_scores: list[ModelTaskScorePoint]


class ModelTasksetResultRowDict(TypedDict):
    taskset_id: UUID
    taskset_name: str
    is_public: bool
    purpose: NotRequired[str]
    total_tasks: int
    tasks_with_traces: int
    avg_score: float
    tasks_in_range_0_99: int
    tasks_in_range_5_75: int
    tasks_in_range_15_40: int
    min_traces_per_task: int
    max_traces_per_task: int
    per_task_scores: list[ModelTaskScorePointDict]
