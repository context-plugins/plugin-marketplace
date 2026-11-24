from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .executor_metrics import ExecutorMetrics, ExecutorMetricsDict
from .memory_metrics import MemoryMetrics, MemoryMetricsDict
from .resource_information import ResourceInformation, ResourceInformationDict


class ExecutorSummary(SdkBaseModel):
    """Details about executors used by the application."""

    host_port: Optional[str] = Field(default=UNSET, alias="hostPort")
    total_tasks: Optional[int] = Field(default=UNSET, alias="totalTasks")
    memory_metrics: Optional[MemoryMetrics] = Field(default=UNSET, alias="memoryMetrics")
    attributes: Optional[dict[str, str]] = UNSET
    total_duration_millis: Optional[str] = Field(default=UNSET, alias="totalDurationMillis")
    max_tasks: Optional[int] = Field(default=UNSET, alias="maxTasks")
    rdd_blocks: Optional[int] = Field(default=UNSET, alias="rddBlocks")
    resources: Optional[dict[str, ResourceInformation]] = UNSET
    peak_memory_metrics: Optional[ExecutorMetrics] = Field(default=UNSET, alias="peakMemoryMetrics")
    memory_used: Optional[str] = Field(default=UNSET, alias="memoryUsed")
    active_tasks: Optional[int] = Field(default=UNSET, alias="activeTasks")
    total_shuffle_write: Optional[str] = Field(default=UNSET, alias="totalShuffleWrite")
    remove_time: Optional[str] = Field(default=UNSET, alias="removeTime")
    disk_used: Optional[str] = Field(default=UNSET, alias="diskUsed")
    max_memory: Optional[str] = Field(default=UNSET, alias="maxMemory")
    add_time: Optional[str] = Field(default=UNSET, alias="addTime")
    total_shuffle_read: Optional[str] = Field(default=UNSET, alias="totalShuffleRead")
    total_cores: Optional[int] = Field(default=UNSET, alias="totalCores")
    total_input_bytes: Optional[str] = Field(default=UNSET, alias="totalInputBytes")
    completed_tasks: Optional[int] = Field(default=UNSET, alias="completedTasks")
    is_active: Optional[bool] = Field(default=UNSET, alias="isActive")
    executor_id: Optional[str] = Field(default=UNSET, alias="executorId")
    remove_reason: Optional[str] = Field(default=UNSET, alias="removeReason")
    excluded_in_stages: Optional[list[str]] = Field(default=UNSET, alias="excludedInStages")
    total_gc_time_millis: Optional[str] = Field(default=UNSET, alias="totalGcTimeMillis")
    is_excluded: Optional[bool] = Field(default=UNSET, alias="isExcluded")
    resource_profile_id: Optional[int] = Field(default=UNSET, alias="resourceProfileId")
    failed_tasks: Optional[int] = Field(default=UNSET, alias="failedTasks")
    executor_logs: Optional[dict[str, str]] = Field(default=UNSET, alias="executorLogs")


class ExecutorSummaryDict(TypedDict):
    host_port: NotRequired[str]
    total_tasks: NotRequired[int]
    memory_metrics: NotRequired[MemoryMetricsDict]
    attributes: NotRequired[dict[str, str]]
    total_duration_millis: NotRequired[str]
    max_tasks: NotRequired[int]
    rdd_blocks: NotRequired[int]
    resources: NotRequired[dict[str, ResourceInformationDict]]
    peak_memory_metrics: NotRequired[ExecutorMetricsDict]
    memory_used: NotRequired[str]
    active_tasks: NotRequired[int]
    total_shuffle_write: NotRequired[str]
    remove_time: NotRequired[str]
    disk_used: NotRequired[str]
    max_memory: NotRequired[str]
    add_time: NotRequired[str]
    total_shuffle_read: NotRequired[str]
    total_cores: NotRequired[int]
    total_input_bytes: NotRequired[str]
    completed_tasks: NotRequired[int]
    is_active: NotRequired[bool]
    executor_id: NotRequired[str]
    remove_reason: NotRequired[str]
    excluded_in_stages: NotRequired[list[str]]
    total_gc_time_millis: NotRequired[str]
    is_excluded: NotRequired[bool]
    resource_profile_id: NotRequired[int]
    failed_tasks: NotRequired[int]
    executor_logs: NotRequired[dict[str, str]]
