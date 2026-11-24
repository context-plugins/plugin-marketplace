from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .input_metrics import InputMetrics, InputMetricsDict
from .output_metrics import OutputMetrics, OutputMetricsDict
from .shuffle_read_metrics import ShuffleReadMetrics, ShuffleReadMetricsDict
from .shuffle_write_metrics import ShuffleWriteMetrics, ShuffleWriteMetricsDict


class TaskMetrics(SdkBaseModel):
    """Executor Task Metrics"""

    result_size: Optional[str] = Field(default=UNSET, alias="resultSize")
    shuffle_write_metrics: Optional[ShuffleWriteMetrics] = Field(default=UNSET, alias="shuffleWriteMetrics")
    """Shuffle data written by task."""

    executor_cpu_time_nanos: Optional[str] = Field(default=UNSET, alias="executorCpuTimeNanos")
    executor_deserialize_cpu_time_nanos: Optional[str] = Field(default=UNSET, alias="executorDeserializeCpuTimeNanos")
    input_metrics: Optional[InputMetrics] = Field(default=UNSET, alias="inputMetrics")
    """Metrics about the input data read by the task."""

    disk_bytes_spilled: Optional[str] = Field(default=UNSET, alias="diskBytesSpilled")
    executor_run_time_millis: Optional[str] = Field(default=UNSET, alias="executorRunTimeMillis")
    shuffle_read_metrics: Optional[ShuffleReadMetrics] = Field(default=UNSET, alias="shuffleReadMetrics")
    """Shuffle data read by the task."""

    peak_execution_memory_bytes: Optional[str] = Field(default=UNSET, alias="peakExecutionMemoryBytes")
    output_metrics: Optional[OutputMetrics] = Field(default=UNSET, alias="outputMetrics")
    """Metrics about the data written by the task."""

    memory_bytes_spilled: Optional[str] = Field(default=UNSET, alias="memoryBytesSpilled")
    executor_deserialize_time_millis: Optional[str] = Field(default=UNSET, alias="executorDeserializeTimeMillis")
    jvm_gc_time_millis: Optional[str] = Field(default=UNSET, alias="jvmGcTimeMillis")
    result_serialization_time_millis: Optional[str] = Field(default=UNSET, alias="resultSerializationTimeMillis")


class TaskMetricsDict(TypedDict):
    result_size: NotRequired[str]
    shuffle_write_metrics: NotRequired[ShuffleWriteMetricsDict]
    executor_cpu_time_nanos: NotRequired[str]
    executor_deserialize_cpu_time_nanos: NotRequired[str]
    input_metrics: NotRequired[InputMetricsDict]
    disk_bytes_spilled: NotRequired[str]
    executor_run_time_millis: NotRequired[str]
    shuffle_read_metrics: NotRequired[ShuffleReadMetricsDict]
    peak_execution_memory_bytes: NotRequired[str]
    output_metrics: NotRequired[OutputMetricsDict]
    memory_bytes_spilled: NotRequired[str]
    executor_deserialize_time_millis: NotRequired[str]
    jvm_gc_time_millis: NotRequired[str]
    result_serialization_time_millis: NotRequired[str]
