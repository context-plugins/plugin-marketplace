from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RddDataDistribution(SdkBaseModel):
    """Details about RDD usage."""

    on_heap_memory_remaining: Optional[str] = Field(default=UNSET, alias="onHeapMemoryRemaining")
    off_heap_memory_used: Optional[str] = Field(default=UNSET, alias="offHeapMemoryUsed")
    off_heap_memory_remaining: Optional[str] = Field(default=UNSET, alias="offHeapMemoryRemaining")
    address: Optional[str] = UNSET
    disk_used: Optional[str] = Field(default=UNSET, alias="diskUsed")
    on_heap_memory_used: Optional[str] = Field(default=UNSET, alias="onHeapMemoryUsed")
    memory_remaining: Optional[str] = Field(default=UNSET, alias="memoryRemaining")
    memory_used: Optional[str] = Field(default=UNSET, alias="memoryUsed")


class RddDataDistributionDict(TypedDict):
    on_heap_memory_remaining: NotRequired[str]
    off_heap_memory_used: NotRequired[str]
    off_heap_memory_remaining: NotRequired[str]
    address: NotRequired[str]
    disk_used: NotRequired[str]
    on_heap_memory_used: NotRequired[str]
    memory_remaining: NotRequired[str]
    memory_used: NotRequired[str]
