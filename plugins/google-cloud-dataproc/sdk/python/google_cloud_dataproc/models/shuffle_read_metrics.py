from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .shuffle_push_read_metrics import ShufflePushReadMetrics, ShufflePushReadMetricsDict


class ShuffleReadMetrics(SdkBaseModel):
    """Shuffle data read by the task."""

    shuffle_push_read_metrics: Optional[ShufflePushReadMetrics] = Field(default=UNSET, alias="shufflePushReadMetrics")
    local_bytes_read: Optional[str] = Field(default=UNSET, alias="localBytesRead")
    local_blocks_fetched: Optional[str] = Field(default=UNSET, alias="localBlocksFetched")
    remote_reqs_duration: Optional[str] = Field(default=UNSET, alias="remoteReqsDuration")
    records_read: Optional[str] = Field(default=UNSET, alias="recordsRead")
    remote_bytes_read: Optional[str] = Field(default=UNSET, alias="remoteBytesRead")
    remote_blocks_fetched: Optional[str] = Field(default=UNSET, alias="remoteBlocksFetched")
    fetch_wait_time_millis: Optional[str] = Field(default=UNSET, alias="fetchWaitTimeMillis")
    remote_bytes_read_to_disk: Optional[str] = Field(default=UNSET, alias="remoteBytesReadToDisk")


class ShuffleReadMetricsDict(TypedDict):
    shuffle_push_read_metrics: NotRequired[ShufflePushReadMetricsDict]
    local_bytes_read: NotRequired[str]
    local_blocks_fetched: NotRequired[str]
    remote_reqs_duration: NotRequired[str]
    records_read: NotRequired[str]
    remote_bytes_read: NotRequired[str]
    remote_blocks_fetched: NotRequired[str]
    fetch_wait_time_millis: NotRequired[str]
    remote_bytes_read_to_disk: NotRequired[str]
