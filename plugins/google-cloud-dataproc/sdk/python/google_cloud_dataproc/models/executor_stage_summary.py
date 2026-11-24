from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .executor_metrics import ExecutorMetrics, ExecutorMetricsDict


class ExecutorStageSummary(SdkBaseModel):
    """Executor resources consumed by a stage."""

    shuffle_read: Optional[str] = Field(default=UNSET, alias="shuffleRead")
    shuffle_write_records: Optional[str] = Field(default=UNSET, alias="shuffleWriteRecords")
    shuffle_write: Optional[str] = Field(default=UNSET, alias="shuffleWrite")
    executor_id: Optional[str] = Field(default=UNSET, alias="executorId")
    output_bytes: Optional[str] = Field(default=UNSET, alias="outputBytes")
    failed_tasks: Optional[int] = Field(default=UNSET, alias="failedTasks")
    succeeded_tasks: Optional[int] = Field(default=UNSET, alias="succeededTasks")
    memory_bytes_spilled: Optional[str] = Field(default=UNSET, alias="memoryBytesSpilled")
    stage_attempt_id: Optional[int] = Field(default=UNSET, alias="stageAttemptId")
    stage_id: Optional[str] = Field(default=UNSET, alias="stageId")
    shuffle_read_records: Optional[str] = Field(default=UNSET, alias="shuffleReadRecords")
    is_excluded_for_stage: Optional[bool] = Field(default=UNSET, alias="isExcludedForStage")
    disk_bytes_spilled: Optional[str] = Field(default=UNSET, alias="diskBytesSpilled")
    input_records: Optional[str] = Field(default=UNSET, alias="inputRecords")
    input_bytes: Optional[str] = Field(default=UNSET, alias="inputBytes")
    task_time_millis: Optional[str] = Field(default=UNSET, alias="taskTimeMillis")
    killed_tasks: Optional[int] = Field(default=UNSET, alias="killedTasks")
    peak_memory_metrics: Optional[ExecutorMetrics] = Field(default=UNSET, alias="peakMemoryMetrics")
    output_records: Optional[str] = Field(default=UNSET, alias="outputRecords")


class ExecutorStageSummaryDict(TypedDict):
    shuffle_read: NotRequired[str]
    shuffle_write_records: NotRequired[str]
    shuffle_write: NotRequired[str]
    executor_id: NotRequired[str]
    output_bytes: NotRequired[str]
    failed_tasks: NotRequired[int]
    succeeded_tasks: NotRequired[int]
    memory_bytes_spilled: NotRequired[str]
    stage_attempt_id: NotRequired[int]
    stage_id: NotRequired[str]
    shuffle_read_records: NotRequired[str]
    is_excluded_for_stage: NotRequired[bool]
    disk_bytes_spilled: NotRequired[str]
    input_records: NotRequired[str]
    input_bytes: NotRequired[str]
    task_time_millis: NotRequired[str]
    killed_tasks: NotRequired[int]
    peak_memory_metrics: NotRequired[ExecutorMetricsDict]
    output_records: NotRequired[str]
