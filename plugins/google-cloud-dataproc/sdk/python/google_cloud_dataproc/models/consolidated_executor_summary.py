from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .memory_metrics import MemoryMetrics, MemoryMetricsDict


class ConsolidatedExecutorSummary(SdkBaseModel):
    """Consolidated summary about executors used by the application."""

    active_tasks: Optional[int] = Field(default=UNSET, alias="activeTasks")
    total_tasks: Optional[int] = Field(default=UNSET, alias="totalTasks")
    rdd_blocks: Optional[int] = Field(default=UNSET, alias="rddBlocks")
    memory_metrics: Optional[MemoryMetrics] = Field(default=UNSET, alias="memoryMetrics")
    failed_tasks: Optional[int] = Field(default=UNSET, alias="failedTasks")
    total_cores: Optional[int] = Field(default=UNSET, alias="totalCores")
    is_excluded: Optional[int] = Field(default=UNSET, alias="isExcluded")
    disk_used: Optional[str] = Field(default=UNSET, alias="diskUsed")
    total_duration_millis: Optional[str] = Field(default=UNSET, alias="totalDurationMillis")
    total_shuffle_read: Optional[str] = Field(default=UNSET, alias="totalShuffleRead")
    total_shuffle_write: Optional[str] = Field(default=UNSET, alias="totalShuffleWrite")
    total_gc_time_millis: Optional[str] = Field(default=UNSET, alias="totalGcTimeMillis")
    total_input_bytes: Optional[str] = Field(default=UNSET, alias="totalInputBytes")
    memory_used: Optional[str] = Field(default=UNSET, alias="memoryUsed")
    count: Optional[int] = UNSET
    max_memory: Optional[str] = Field(default=UNSET, alias="maxMemory")
    completed_tasks: Optional[int] = Field(default=UNSET, alias="completedTasks")


class ConsolidatedExecutorSummaryDict(TypedDict):
    active_tasks: NotRequired[int]
    total_tasks: NotRequired[int]
    rdd_blocks: NotRequired[int]
    memory_metrics: NotRequired[MemoryMetricsDict]
    failed_tasks: NotRequired[int]
    total_cores: NotRequired[int]
    is_excluded: NotRequired[int]
    disk_used: NotRequired[str]
    total_duration_millis: NotRequired[str]
    total_shuffle_read: NotRequired[str]
    total_shuffle_write: NotRequired[str]
    total_gc_time_millis: NotRequired[str]
    total_input_bytes: NotRequired[str]
    memory_used: NotRequired[str]
    count: NotRequired[int]
    max_memory: NotRequired[str]
    completed_tasks: NotRequired[int]
