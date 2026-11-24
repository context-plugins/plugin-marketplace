from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .quantiles import Quantiles, QuantilesDict
from .shuffle_push_read_quantile_metrics import ShufflePushReadQuantileMetrics, ShufflePushReadQuantileMetricsDict


class ShuffleReadQuantileMetrics(SdkBaseModel):
    remote_reqs_duration: Optional[Quantiles] = Field(default=UNSET, alias="remoteReqsDuration")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    read_bytes: Optional[Quantiles] = Field(default=UNSET, alias="readBytes")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    remote_bytes_read: Optional[Quantiles] = Field(default=UNSET, alias="remoteBytesRead")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    remote_bytes_read_to_disk: Optional[Quantiles] = Field(default=UNSET, alias="remoteBytesReadToDisk")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    remote_blocks_fetched: Optional[Quantiles] = Field(default=UNSET, alias="remoteBlocksFetched")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    fetch_wait_time_millis: Optional[Quantiles] = Field(default=UNSET, alias="fetchWaitTimeMillis")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    read_records: Optional[Quantiles] = Field(default=UNSET, alias="readRecords")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    shuffle_push_read_metrics: Optional[ShufflePushReadQuantileMetrics] = Field(
        default=UNSET, alias="shufflePushReadMetrics"
    )
    local_blocks_fetched: Optional[Quantiles] = Field(default=UNSET, alias="localBlocksFetched")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    total_blocks_fetched: Optional[Quantiles] = Field(default=UNSET, alias="totalBlocksFetched")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""


class ShuffleReadQuantileMetricsDict(TypedDict):
    remote_reqs_duration: NotRequired[QuantilesDict]
    read_bytes: NotRequired[QuantilesDict]
    remote_bytes_read: NotRequired[QuantilesDict]
    remote_bytes_read_to_disk: NotRequired[QuantilesDict]
    remote_blocks_fetched: NotRequired[QuantilesDict]
    fetch_wait_time_millis: NotRequired[QuantilesDict]
    read_records: NotRequired[QuantilesDict]
    shuffle_push_read_metrics: NotRequired[ShufflePushReadQuantileMetricsDict]
    local_blocks_fetched: NotRequired[QuantilesDict]
    total_blocks_fetched: NotRequired[QuantilesDict]
