from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .input_quantile_metrics import InputQuantileMetrics, InputQuantileMetricsDict
from .output_quantile_metrics import OutputQuantileMetrics, OutputQuantileMetricsDict
from .quantiles import Quantiles, QuantilesDict
from .shuffle_read_quantile_metrics import ShuffleReadQuantileMetrics, ShuffleReadQuantileMetricsDict
from .shuffle_write_quantile_metrics import ShuffleWriteQuantileMetrics, ShuffleWriteQuantileMetricsDict


class TaskQuantileMetrics(SdkBaseModel):
    scheduler_delay_millis: Optional[Quantiles] = Field(default=UNSET, alias="schedulerDelayMillis")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    executor_cpu_time_nanos: Optional[Quantiles] = Field(default=UNSET, alias="executorCpuTimeNanos")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    input_metrics: Optional[InputQuantileMetrics] = Field(default=UNSET, alias="inputMetrics")
    disk_bytes_spilled: Optional[Quantiles] = Field(default=UNSET, alias="diskBytesSpilled")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    executor_run_time_millis: Optional[Quantiles] = Field(default=UNSET, alias="executorRunTimeMillis")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    result_size: Optional[Quantiles] = Field(default=UNSET, alias="resultSize")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    shuffle_read_metrics: Optional[ShuffleReadQuantileMetrics] = Field(default=UNSET, alias="shuffleReadMetrics")
    executor_deserialize_time_millis: Optional[Quantiles] = Field(default=UNSET, alias="executorDeserializeTimeMillis")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    jvm_gc_time_millis: Optional[Quantiles] = Field(default=UNSET, alias="jvmGcTimeMillis")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    result_serialization_time_millis: Optional[Quantiles] = Field(default=UNSET, alias="resultSerializationTimeMillis")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    output_metrics: Optional[OutputQuantileMetrics] = Field(default=UNSET, alias="outputMetrics")
    executor_deserialize_cpu_time_nanos: Optional[Quantiles] = Field(
        default=UNSET, alias="executorDeserializeCpuTimeNanos"
    )
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    duration_millis: Optional[Quantiles] = Field(default=UNSET, alias="durationMillis")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    peak_execution_memory_bytes: Optional[Quantiles] = Field(default=UNSET, alias="peakExecutionMemoryBytes")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    getting_result_time_millis: Optional[Quantiles] = Field(default=UNSET, alias="gettingResultTimeMillis")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    memory_bytes_spilled: Optional[Quantiles] = Field(default=UNSET, alias="memoryBytesSpilled")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    shuffle_write_metrics: Optional[ShuffleWriteQuantileMetrics] = Field(default=UNSET, alias="shuffleWriteMetrics")


class TaskQuantileMetricsDict(TypedDict):
    scheduler_delay_millis: NotRequired[QuantilesDict]
    executor_cpu_time_nanos: NotRequired[QuantilesDict]
    input_metrics: NotRequired[InputQuantileMetricsDict]
    disk_bytes_spilled: NotRequired[QuantilesDict]
    executor_run_time_millis: NotRequired[QuantilesDict]
    result_size: NotRequired[QuantilesDict]
    shuffle_read_metrics: NotRequired[ShuffleReadQuantileMetricsDict]
    executor_deserialize_time_millis: NotRequired[QuantilesDict]
    jvm_gc_time_millis: NotRequired[QuantilesDict]
    result_serialization_time_millis: NotRequired[QuantilesDict]
    output_metrics: NotRequired[OutputQuantileMetricsDict]
    executor_deserialize_cpu_time_nanos: NotRequired[QuantilesDict]
    duration_millis: NotRequired[QuantilesDict]
    peak_execution_memory_bytes: NotRequired[QuantilesDict]
    getting_result_time_millis: NotRequired[QuantilesDict]
    memory_bytes_spilled: NotRequired[QuantilesDict]
    shuffle_write_metrics: NotRequired[ShuffleWriteQuantileMetricsDict]
