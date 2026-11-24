from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .quantiles import Quantiles, QuantilesDict


class ShufflePushReadQuantileMetrics(SdkBaseModel):
    corrupt_merged_block_chunks: Optional[Quantiles] = Field(default=UNSET, alias="corruptMergedBlockChunks")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    local_merged_blocks_fetched: Optional[Quantiles] = Field(default=UNSET, alias="localMergedBlocksFetched")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    local_merged_bytes_read: Optional[Quantiles] = Field(default=UNSET, alias="localMergedBytesRead")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    local_merged_chunks_fetched: Optional[Quantiles] = Field(default=UNSET, alias="localMergedChunksFetched")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    remote_merged_reqs_duration: Optional[Quantiles] = Field(default=UNSET, alias="remoteMergedReqsDuration")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    remote_merged_chunks_fetched: Optional[Quantiles] = Field(default=UNSET, alias="remoteMergedChunksFetched")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    remote_merged_bytes_read: Optional[Quantiles] = Field(default=UNSET, alias="remoteMergedBytesRead")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    merged_fetch_fallback_count: Optional[Quantiles] = Field(default=UNSET, alias="mergedFetchFallbackCount")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""

    remote_merged_blocks_fetched: Optional[Quantiles] = Field(default=UNSET, alias="remoteMergedBlocksFetched")
    """Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message
    type."""


class ShufflePushReadQuantileMetricsDict(TypedDict):
    corrupt_merged_block_chunks: NotRequired[QuantilesDict]
    local_merged_blocks_fetched: NotRequired[QuantilesDict]
    local_merged_bytes_read: NotRequired[QuantilesDict]
    local_merged_chunks_fetched: NotRequired[QuantilesDict]
    remote_merged_reqs_duration: NotRequired[QuantilesDict]
    remote_merged_chunks_fetched: NotRequired[QuantilesDict]
    remote_merged_bytes_read: NotRequired[QuantilesDict]
    merged_fetch_fallback_count: NotRequired[QuantilesDict]
    remote_merged_blocks_fetched: NotRequired[QuantilesDict]
