from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .accumulable_info import AccumulableInfo, AccumulableInfoDict
from .task_metrics import TaskMetrics, TaskMetricsDict


class TaskData(SdkBaseModel):
    """Data corresponding to tasks created by spark."""

    partition_id: Optional[int] = Field(default=UNSET, alias="partitionId")
    task_id: Optional[str] = Field(default=UNSET, alias="taskId")
    launch_time: Optional[str] = Field(default=UNSET, alias="launchTime")
    host: Optional[str] = UNSET
    result_fetch_start: Optional[str] = Field(default=UNSET, alias="resultFetchStart")
    status: Optional[str] = UNSET
    stage_attempt_id: Optional[int] = Field(default=UNSET, alias="stageAttemptId")
    task_locality: Optional[str] = Field(default=UNSET, alias="taskLocality")
    task_metrics: Optional[TaskMetrics] = Field(default=UNSET, alias="taskMetrics")
    """Executor Task Metrics"""

    getting_result_time_millis: Optional[str] = Field(default=UNSET, alias="gettingResultTimeMillis")
    executor_logs: Optional[dict[str, str]] = Field(default=UNSET, alias="executorLogs")
    index: Optional[int] = UNSET
    scheduler_delay_millis: Optional[str] = Field(default=UNSET, alias="schedulerDelayMillis")
    accumulator_updates: Optional[list[AccumulableInfo]] = Field(default=UNSET, alias="accumulatorUpdates")
    duration_millis: Optional[str] = Field(default=UNSET, alias="durationMillis")
    error_message: Optional[str] = Field(default=UNSET, alias="errorMessage")
    stage_id: Optional[str] = Field(default=UNSET, alias="stageId")
    speculative: Optional[bool] = UNSET
    has_metrics: Optional[bool] = Field(default=UNSET, alias="hasMetrics")
    attempt: Optional[int] = UNSET
    executor_id: Optional[str] = Field(default=UNSET, alias="executorId")


class TaskDataDict(TypedDict):
    partition_id: NotRequired[int]
    task_id: NotRequired[str]
    launch_time: NotRequired[str]
    host: NotRequired[str]
    result_fetch_start: NotRequired[str]
    status: NotRequired[str]
    stage_attempt_id: NotRequired[int]
    task_locality: NotRequired[str]
    task_metrics: NotRequired[TaskMetricsDict]
    getting_result_time_millis: NotRequired[str]
    executor_logs: NotRequired[dict[str, str]]
    index: NotRequired[int]
    scheduler_delay_millis: NotRequired[str]
    accumulator_updates: NotRequired[list[AccumulableInfoDict]]
    duration_millis: NotRequired[str]
    error_message: NotRequired[str]
    stage_id: NotRequired[str]
    speculative: NotRequired[bool]
    has_metrics: NotRequired[bool]
    attempt: NotRequired[int]
    executor_id: NotRequired[str]
