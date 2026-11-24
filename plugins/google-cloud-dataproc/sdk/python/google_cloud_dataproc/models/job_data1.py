from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status1 import Status1OrStr


class JobData1(SdkBaseModel):
    """Output only. Data corresponding to a spark job."""

    num_active_stages: Optional[int] = Field(default=UNSET, alias="numActiveStages")
    num_failed_stages: Optional[int] = Field(default=UNSET, alias="numFailedStages")
    submission_time: Optional[str] = Field(default=UNSET, alias="submissionTime")
    num_failed_tasks: Optional[int] = Field(default=UNSET, alias="numFailedTasks")
    status: Optional[Status1OrStr] = UNSET
    job_id: Optional[str] = Field(default=UNSET, alias="jobId")
    num_killed_tasks: Optional[int] = Field(default=UNSET, alias="numKilledTasks")
    num_tasks: Optional[int] = Field(default=UNSET, alias="numTasks")
    name: Optional[str] = UNSET
    completion_time: Optional[str] = Field(default=UNSET, alias="completionTime")
    num_active_tasks: Optional[int] = Field(default=UNSET, alias="numActiveTasks")
    num_skipped_tasks: Optional[int] = Field(default=UNSET, alias="numSkippedTasks")
    job_group: Optional[str] = Field(default=UNSET, alias="jobGroup")
    sql_execution_id: Optional[str] = Field(default=UNSET, alias="sqlExecutionId")
    stage_ids: Optional[list[str]] = Field(default=UNSET, alias="stageIds")
    skipped_stages: Optional[list[int]] = Field(default=UNSET, alias="skippedStages")
    num_completed_stages: Optional[int] = Field(default=UNSET, alias="numCompletedStages")
    num_completed_indices: Optional[int] = Field(default=UNSET, alias="numCompletedIndices")
    num_skipped_stages: Optional[int] = Field(default=UNSET, alias="numSkippedStages")
    kill_tasks_summary: Optional[dict[str, int]] = Field(default=UNSET, alias="killTasksSummary")
    description: Optional[str] = UNSET
    num_completed_tasks: Optional[int] = Field(default=UNSET, alias="numCompletedTasks")


class JobData1Dict(TypedDict):
    num_active_stages: NotRequired[int]
    num_failed_stages: NotRequired[int]
    submission_time: NotRequired[str]
    num_failed_tasks: NotRequired[int]
    status: NotRequired[Status1OrStr]
    job_id: NotRequired[str]
    num_killed_tasks: NotRequired[int]
    num_tasks: NotRequired[int]
    name: NotRequired[str]
    completion_time: NotRequired[str]
    num_active_tasks: NotRequired[int]
    num_skipped_tasks: NotRequired[int]
    job_group: NotRequired[str]
    sql_execution_id: NotRequired[str]
    stage_ids: NotRequired[list[str]]
    skipped_stages: NotRequired[list[int]]
    num_completed_stages: NotRequired[int]
    num_completed_indices: NotRequired[int]
    num_skipped_stages: NotRequired[int]
    kill_tasks_summary: NotRequired[dict[str, int]]
    description: NotRequired[str]
    num_completed_tasks: NotRequired[int]
