from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StateOperatorProgress(SdkBaseModel):
    num_rows_removed: Optional[str] = Field(default=UNSET, alias="numRowsRemoved")
    num_shuffle_partitions: Optional[str] = Field(default=UNSET, alias="numShufflePartitions")
    num_rows_total: Optional[str] = Field(default=UNSET, alias="numRowsTotal")
    commit_time_ms: Optional[str] = Field(default=UNSET, alias="commitTimeMs")
    num_state_store_instances: Optional[str] = Field(default=UNSET, alias="numStateStoreInstances")
    operator_name: Optional[str] = Field(default=UNSET, alias="operatorName")
    num_rows_dropped_by_watermark: Optional[str] = Field(default=UNSET, alias="numRowsDroppedByWatermark")
    num_rows_updated: Optional[str] = Field(default=UNSET, alias="numRowsUpdated")
    memory_used_bytes: Optional[str] = Field(default=UNSET, alias="memoryUsedBytes")
    custom_metrics: Optional[dict[str, str]] = Field(default=UNSET, alias="customMetrics")
    all_updates_time_ms: Optional[str] = Field(default=UNSET, alias="allUpdatesTimeMs")
    all_removals_time_ms: Optional[str] = Field(default=UNSET, alias="allRemovalsTimeMs")


class StateOperatorProgressDict(TypedDict):
    num_rows_removed: NotRequired[str]
    num_shuffle_partitions: NotRequired[str]
    num_rows_total: NotRequired[str]
    commit_time_ms: NotRequired[str]
    num_state_store_instances: NotRequired[str]
    operator_name: NotRequired[str]
    num_rows_dropped_by_watermark: NotRequired[str]
    num_rows_updated: NotRequired[str]
    memory_used_bytes: NotRequired[str]
    custom_metrics: NotRequired[dict[str, str]]
    all_updates_time_ms: NotRequired[str]
    all_removals_time_ms: NotRequired[str]
