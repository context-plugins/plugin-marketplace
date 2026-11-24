from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .stage_shuffle_push_read_metrics import StageShufflePushReadMetrics, StageShufflePushReadMetricsDict


class StageShuffleReadMetrics(SdkBaseModel):
    """Shuffle data read for the stage."""

    records_read: Optional[str] = Field(default=UNSET, alias="recordsRead")
    remote_reqs_duration: Optional[str] = Field(default=UNSET, alias="remoteReqsDuration")
    remote_blocks_fetched: Optional[str] = Field(default=UNSET, alias="remoteBlocksFetched")
    fetch_wait_time_millis: Optional[str] = Field(default=UNSET, alias="fetchWaitTimeMillis")
    local_bytes_read: Optional[str] = Field(default=UNSET, alias="localBytesRead")
    bytes_read: Optional[str] = Field(default=UNSET, alias="bytesRead")
    remote_bytes_read_to_disk: Optional[str] = Field(default=UNSET, alias="remoteBytesReadToDisk")
    local_blocks_fetched: Optional[str] = Field(default=UNSET, alias="localBlocksFetched")
    remote_bytes_read: Optional[str] = Field(default=UNSET, alias="remoteBytesRead")
    stage_shuffle_push_read_metrics: Optional[StageShufflePushReadMetrics] = Field(
        default=UNSET, alias="stageShufflePushReadMetrics"
    )


class StageShuffleReadMetricsDict(TypedDict):
    records_read: NotRequired[str]
    remote_reqs_duration: NotRequired[str]
    remote_blocks_fetched: NotRequired[str]
    fetch_wait_time_millis: NotRequired[str]
    local_bytes_read: NotRequired[str]
    bytes_read: NotRequired[str]
    remote_bytes_read_to_disk: NotRequired[str]
    local_blocks_fetched: NotRequired[str]
    remote_bytes_read: NotRequired[str]
    stage_shuffle_push_read_metrics: NotRequired[StageShufflePushReadMetricsDict]
