from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RddPartitionInfo(SdkBaseModel):
    """Information about RDD partitions."""

    block_name: Optional[str] = Field(default=UNSET, alias="blockName")
    memory_used: Optional[str] = Field(default=UNSET, alias="memoryUsed")
    executors: Optional[list[str]] = UNSET
    disk_used: Optional[str] = Field(default=UNSET, alias="diskUsed")
    storage_level: Optional[str] = Field(default=UNSET, alias="storageLevel")


class RddPartitionInfoDict(TypedDict):
    block_name: NotRequired[str]
    memory_used: NotRequired[str]
    executors: NotRequired[list[str]]
    disk_used: NotRequired[str]
    storage_level: NotRequired[str]
