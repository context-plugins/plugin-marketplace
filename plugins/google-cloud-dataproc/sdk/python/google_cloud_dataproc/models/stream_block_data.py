from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StreamBlockData(SdkBaseModel):
    """Stream Block Data."""

    deserialized: Optional[bool] = UNSET
    disk_size: Optional[str] = Field(default=UNSET, alias="diskSize")
    use_memory: Optional[bool] = Field(default=UNSET, alias="useMemory")
    name: Optional[str] = UNSET
    use_disk: Optional[bool] = Field(default=UNSET, alias="useDisk")
    host_port: Optional[str] = Field(default=UNSET, alias="hostPort")
    executor_id: Optional[str] = Field(default=UNSET, alias="executorId")
    mem_size: Optional[str] = Field(default=UNSET, alias="memSize")
    storage_level: Optional[str] = Field(default=UNSET, alias="storageLevel")


class StreamBlockDataDict(TypedDict):
    deserialized: NotRequired[bool]
    disk_size: NotRequired[str]
    use_memory: NotRequired[bool]
    name: NotRequired[str]
    use_disk: NotRequired[bool]
    host_port: NotRequired[str]
    executor_id: NotRequired[str]
    mem_size: NotRequired[str]
    storage_level: NotRequired[str]
