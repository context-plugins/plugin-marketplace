from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MemoryMetrics(SdkBaseModel):
    used_on_heap_storage_memory: Optional[str] = Field(default=UNSET, alias="usedOnHeapStorageMemory")
    total_off_heap_storage_memory: Optional[str] = Field(default=UNSET, alias="totalOffHeapStorageMemory")
    used_off_heap_storage_memory: Optional[str] = Field(default=UNSET, alias="usedOffHeapStorageMemory")
    total_on_heap_storage_memory: Optional[str] = Field(default=UNSET, alias="totalOnHeapStorageMemory")


class MemoryMetricsDict(TypedDict):
    used_on_heap_storage_memory: NotRequired[str]
    total_off_heap_storage_memory: NotRequired[str]
    used_off_heap_storage_memory: NotRequired[str]
    total_on_heap_storage_memory: NotRequired[str]
