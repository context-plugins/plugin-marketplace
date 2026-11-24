from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .executor_peak_metrics_distributions import ExecutorPeakMetricsDistributions, ExecutorPeakMetricsDistributionsDict


class ExecutorMetricsDistributions(SdkBaseModel):
    quantiles: Optional[list[float]] = UNSET
    killed_tasks: Optional[list[float]] = Field(default=UNSET, alias="killedTasks")
    shuffle_write: Optional[list[float]] = Field(default=UNSET, alias="shuffleWrite")
    shuffle_read_records: Optional[list[float]] = Field(default=UNSET, alias="shuffleReadRecords")
    shuffle_write_records: Optional[list[float]] = Field(default=UNSET, alias="shuffleWriteRecords")
    task_time_millis: Optional[list[float]] = Field(default=UNSET, alias="taskTimeMillis")
    input_bytes: Optional[list[float]] = Field(default=UNSET, alias="inputBytes")
    disk_bytes_spilled: Optional[list[float]] = Field(default=UNSET, alias="diskBytesSpilled")
    input_records: Optional[list[float]] = Field(default=UNSET, alias="inputRecords")
    failed_tasks: Optional[list[float]] = Field(default=UNSET, alias="failedTasks")
    output_records: Optional[list[float]] = Field(default=UNSET, alias="outputRecords")
    peak_memory_metrics: Optional[ExecutorPeakMetricsDistributions] = Field(default=UNSET, alias="peakMemoryMetrics")
    output_bytes: Optional[list[float]] = Field(default=UNSET, alias="outputBytes")
    memory_bytes_spilled: Optional[list[float]] = Field(default=UNSET, alias="memoryBytesSpilled")
    succeeded_tasks: Optional[list[float]] = Field(default=UNSET, alias="succeededTasks")
    shuffle_read: Optional[list[float]] = Field(default=UNSET, alias="shuffleRead")


class ExecutorMetricsDistributionsDict(TypedDict):
    quantiles: NotRequired[list[float]]
    killed_tasks: NotRequired[list[float]]
    shuffle_write: NotRequired[list[float]]
    shuffle_read_records: NotRequired[list[float]]
    shuffle_write_records: NotRequired[list[float]]
    task_time_millis: NotRequired[list[float]]
    input_bytes: NotRequired[list[float]]
    disk_bytes_spilled: NotRequired[list[float]]
    input_records: NotRequired[list[float]]
    failed_tasks: NotRequired[list[float]]
    output_records: NotRequired[list[float]]
    peak_memory_metrics: NotRequired[ExecutorPeakMetricsDistributionsDict]
    output_bytes: NotRequired[list[float]]
    memory_bytes_spilled: NotRequired[list[float]]
    succeeded_tasks: NotRequired[list[float]]
    shuffle_read: NotRequired[list[float]]
