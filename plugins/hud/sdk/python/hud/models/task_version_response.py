from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.task_state import TaskStateOrStr
from .task_brief import TaskBrief, TaskBriefDict
from .task_environment_brief import TaskEnvironmentBrief, TaskEnvironmentBriefDict
from .task_scenario_brief import TaskScenarioBrief, TaskScenarioBriefDict


class TaskVersionResponse(SdkBaseModel):
    id: UUID
    task_id: UUID
    scenario_id: Optional[UUID] = UNSET
    build_id: Optional[UUID] = UNSET
    scenario_name: Optional[str] = UNSET
    version: int
    validation: Optional[list[Any]] = UNSET
    scenario_args: Optional[Any] = UNSET
    system_prompt: Optional[str] = UNSET
    agent_config: Optional[Any] = UNSET
    metadata: Optional[Any] = UNSET
    status: str = "active"
    current_state: Optional[TaskStateOrStr] = UNSET
    """Canonical task workflow state.

    Lives in the kernel so both the DB layer (orm.py pg enum) and the decision core (tasks.state) depend downward on
    it."""

    lifecycle_stage: Optional[str] = UNSET
    brief: Optional[TaskBrief] = UNSET
    internally_reviewed_at: Optional[RFC3339DateTime] = UNSET
    internally_reviewed_by: Optional[UUID] = UNSET
    previous_review_decision: Optional[TaskStateOrStr] = UNSET
    previous_review_decision_version_number: Optional[int] = UNSET
    revision_requested_at: Optional[RFC3339DateTime] = UNSET
    scenario: Optional[TaskScenarioBrief] = UNSET
    environment: Optional[TaskEnvironmentBrief] = UNSET
    created_at: RFC3339DateTime


class TaskVersionResponseDict(TypedDict):
    id: UUID
    task_id: UUID
    scenario_id: NotRequired[UUID]
    build_id: NotRequired[UUID]
    scenario_name: NotRequired[str]
    version: int
    validation: NotRequired[list[Any]]
    scenario_args: NotRequired[Any]
    system_prompt: NotRequired[str]
    agent_config: NotRequired[Any]
    metadata: NotRequired[Any]
    status: NotRequired[str]
    current_state: NotRequired[TaskStateOrStr]
    lifecycle_stage: NotRequired[str]
    brief: NotRequired[TaskBriefDict]
    internally_reviewed_at: NotRequired[RFC3339DateTime]
    internally_reviewed_by: NotRequired[UUID]
    previous_review_decision: NotRequired[TaskStateOrStr]
    previous_review_decision_version_number: NotRequired[int]
    revision_requested_at: NotRequired[RFC3339DateTime]
    scenario: NotRequired[TaskScenarioBriefDict]
    environment: NotRequired[TaskEnvironmentBriefDict]
    created_at: RFC3339DateTime
