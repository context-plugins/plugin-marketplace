from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StageAttemptTasksSummary2(SdkBaseModel):
    """Summary of tasks for a Spark Application Stage Attempt"""

    num_running_tasks: Optional[int] = Field(default=UNSET, alias="numRunningTasks")
    num_pending_tasks: Optional[int] = Field(default=UNSET, alias="numPendingTasks")
    num_failed_tasks: Optional[int] = Field(default=UNSET, alias="numFailedTasks")
    num_killed_tasks: Optional[int] = Field(default=UNSET, alias="numKilledTasks")
    num_tasks: Optional[int] = Field(default=UNSET, alias="numTasks")
    application_id: Optional[str] = Field(default=UNSET, alias="applicationId")
    stage_id: Optional[str] = Field(default=UNSET, alias="stageId")
    stage_attempt_id: Optional[int] = Field(default=UNSET, alias="stageAttemptId")
    num_success_tasks: Optional[int] = Field(default=UNSET, alias="numSuccessTasks")


class StageAttemptTasksSummary2Dict(TypedDict):
    num_running_tasks: NotRequired[int]
    num_pending_tasks: NotRequired[int]
    num_failed_tasks: NotRequired[int]
    num_killed_tasks: NotRequired[int]
    num_tasks: NotRequired[int]
    application_id: NotRequired[str]
    stage_id: NotRequired[str]
    stage_attempt_id: NotRequired[int]
    num_success_tasks: NotRequired[int]
