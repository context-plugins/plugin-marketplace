from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stage_input_metrics import StageInputMetrics, StageInputMetricsDict
from .stage_output_metrics import StageOutputMetrics, StageOutputMetricsDict
from .stage_shuffle_read_metrics import StageShuffleReadMetrics, StageShuffleReadMetricsDict
from .stage_shuffle_write_metrics import StageShuffleWriteMetrics, StageShuffleWriteMetricsDict


class StageMetrics(SdkBaseModel):
    """Stage Level Aggregated Metrics"""

    peak_execution_memory_bytes: Optional[str] = Field(default=UNSET, alias="peakExecutionMemoryBytes")
    executor_deserialize_cpu_time_nanos: Optional[str] = Field(default=UNSET, alias="executorDeserializeCpuTimeNanos")
    disk_bytes_spilled: Optional[str] = Field(default=UNSET, alias="diskBytesSpilled")
    executor_cpu_time_nanos: Optional[str] = Field(default=UNSET, alias="executorCpuTimeNanos")
    executor_run_time_millis: Optional[str] = Field(default=UNSET, alias="executorRunTimeMillis")
    memory_bytes_spilled: Optional[str] = Field(default=UNSET, alias="memoryBytesSpilled")
    stage_input_metrics: Optional[StageInputMetrics] = Field(default=UNSET, alias="stageInputMetrics")
    """Metrics about the input read by the stage."""

    stage_shuffle_read_metrics: Optional[StageShuffleReadMetrics] = Field(
        default=UNSET, alias="stageShuffleReadMetrics"
    )
    """Shuffle data read for the stage."""

    stage_shuffle_write_metrics: Optional[StageShuffleWriteMetrics] = Field(
        default=UNSET, alias="stageShuffleWriteMetrics"
    )
    """Shuffle data written for the stage."""

    result_serialization_time_millis: Optional[str] = Field(default=UNSET, alias="resultSerializationTimeMillis")
    jvm_gc_time_millis: Optional[str] = Field(default=UNSET, alias="jvmGcTimeMillis")
    stage_output_metrics: Optional[StageOutputMetrics] = Field(default=UNSET, alias="stageOutputMetrics")
    """Metrics about the output written by the stage."""

    result_size: Optional[str] = Field(default=UNSET, alias="resultSize")
    executor_deserialize_time_millis: Optional[str] = Field(default=UNSET, alias="executorDeserializeTimeMillis")


class StageMetricsDict(TypedDict):
    peak_execution_memory_bytes: NotRequired[str]
    executor_deserialize_cpu_time_nanos: NotRequired[str]
    disk_bytes_spilled: NotRequired[str]
    executor_cpu_time_nanos: NotRequired[str]
    executor_run_time_millis: NotRequired[str]
    memory_bytes_spilled: NotRequired[str]
    stage_input_metrics: NotRequired[StageInputMetricsDict]
    stage_shuffle_read_metrics: NotRequired[StageShuffleReadMetricsDict]
    stage_shuffle_write_metrics: NotRequired[StageShuffleWriteMetricsDict]
    result_serialization_time_millis: NotRequired[str]
    jvm_gc_time_millis: NotRequired[str]
    stage_output_metrics: NotRequired[StageOutputMetricsDict]
    result_size: NotRequired[str]
    executor_deserialize_time_millis: NotRequired[str]
