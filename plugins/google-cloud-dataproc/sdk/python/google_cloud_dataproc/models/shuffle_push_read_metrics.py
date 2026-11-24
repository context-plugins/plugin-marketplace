from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ShufflePushReadMetrics(SdkBaseModel):
    remote_merged_chunks_fetched: Optional[str] = Field(default=UNSET, alias="remoteMergedChunksFetched")
    remote_merged_bytes_read: Optional[str] = Field(default=UNSET, alias="remoteMergedBytesRead")
    merged_fetch_fallback_count: Optional[str] = Field(default=UNSET, alias="mergedFetchFallbackCount")
    local_merged_bytes_read: Optional[str] = Field(default=UNSET, alias="localMergedBytesRead")
    corrupt_merged_block_chunks: Optional[str] = Field(default=UNSET, alias="corruptMergedBlockChunks")
    local_merged_blocks_fetched: Optional[str] = Field(default=UNSET, alias="localMergedBlocksFetched")
    remote_merged_blocks_fetched: Optional[str] = Field(default=UNSET, alias="remoteMergedBlocksFetched")
    local_merged_chunks_fetched: Optional[str] = Field(default=UNSET, alias="localMergedChunksFetched")
    remote_merged_reqs_duration: Optional[str] = Field(default=UNSET, alias="remoteMergedReqsDuration")


class ShufflePushReadMetricsDict(TypedDict):
    remote_merged_chunks_fetched: NotRequired[str]
    remote_merged_bytes_read: NotRequired[str]
    merged_fetch_fallback_count: NotRequired[str]
    local_merged_bytes_read: NotRequired[str]
    corrupt_merged_block_chunks: NotRequired[str]
    local_merged_blocks_fetched: NotRequired[str]
    remote_merged_blocks_fetched: NotRequired[str]
    local_merged_chunks_fetched: NotRequired[str]
    remote_merged_reqs_duration: NotRequired[str]
