from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .rdd_data_distribution import RddDataDistribution, RddDataDistributionDict
from .rdd_partition_info import RddPartitionInfo, RddPartitionInfoDict


class RddStorageInfo(SdkBaseModel):
    """Overall data about RDD storage."""

    num_cached_partitions: Optional[int] = Field(default=UNSET, alias="numCachedPartitions")
    data_distribution: Optional[list[RddDataDistribution]] = Field(default=UNSET, alias="dataDistribution")
    memory_used: Optional[str] = Field(default=UNSET, alias="memoryUsed")
    rdd_storage_id: Optional[int] = Field(default=UNSET, alias="rddStorageId")
    storage_level: Optional[str] = Field(default=UNSET, alias="storageLevel")
    disk_used: Optional[str] = Field(default=UNSET, alias="diskUsed")
    partitions: Optional[list[RddPartitionInfo]] = UNSET
    num_partitions: Optional[int] = Field(default=UNSET, alias="numPartitions")
    name: Optional[str] = UNSET


class RddStorageInfoDict(TypedDict):
    num_cached_partitions: NotRequired[int]
    data_distribution: NotRequired[list[RddDataDistributionDict]]
    memory_used: NotRequired[str]
    rdd_storage_id: NotRequired[int]
    storage_level: NotRequired[str]
    disk_used: NotRequired[str]
    partitions: NotRequired[list[RddPartitionInfoDict]]
    num_partitions: NotRequired[int]
    name: NotRequired[str]
