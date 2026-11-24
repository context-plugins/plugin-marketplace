from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SpeculationStageSummary(SdkBaseModel):
    """Details of the speculation task when speculative execution is enabled."""

    num_active_tasks: Optional[int] = Field(default=UNSET, alias="numActiveTasks")
    num_completed_tasks: Optional[int] = Field(default=UNSET, alias="numCompletedTasks")
    stage_id: Optional[str] = Field(default=UNSET, alias="stageId")
    num_killed_tasks: Optional[int] = Field(default=UNSET, alias="numKilledTasks")
    stage_attempt_id: Optional[int] = Field(default=UNSET, alias="stageAttemptId")
    num_tasks: Optional[int] = Field(default=UNSET, alias="numTasks")
    num_failed_tasks: Optional[int] = Field(default=UNSET, alias="numFailedTasks")


class SpeculationStageSummaryDict(TypedDict):
    num_active_tasks: NotRequired[int]
    num_completed_tasks: NotRequired[int]
    stage_id: NotRequired[str]
    num_killed_tasks: NotRequired[int]
    stage_attempt_id: NotRequired[int]
    num_tasks: NotRequired[int]
    num_failed_tasks: NotRequired[int]
