from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Disk(SdkBaseModel):
    disk_id: Optional[str] = Field(default=UNSET, alias="DiskId")
    """The unique device ID or other distinguishing data that identifies a local disk."""

    disk_path: Optional[str] = Field(default=UNSET, alias="DiskPath")
    """The path of a local disk in the gateway virtual machine (VM)."""

    disk_node: Optional[str] = Field(default=UNSET, alias="DiskNode")
    """The device node of a local disk as assigned by the virtualization environment."""

    disk_status: Optional[str] = Field(default=UNSET, alias="DiskStatus")
    """A value that represents the status of a local disk."""

    disk_size_in_bytes: Optional[int] = Field(default=UNSET, alias="DiskSizeInBytes")
    """The local disk size in bytes."""

    disk_allocation_type: Optional[str] = Field(default=UNSET, alias="DiskAllocationType")
    disk_allocation_resource: Optional[str] = Field(default=UNSET, alias="DiskAllocationResource")
    """The iSCSI qualified name (IQN) that is defined for a disk. This field is not included in the response if the
    local disk is not defined as an iSCSI target. The format of this field is targetIqn::LUNNumber::region-volumeId."""

    disk_attribute_list: Optional[list[str]] = Field(default=UNSET, alias="DiskAttributeList")


class DiskDict(TypedDict):
    disk_id: NotRequired[str]
    disk_path: NotRequired[str]
    disk_node: NotRequired[str]
    disk_status: NotRequired[str]
    disk_size_in_bytes: NotRequired[int]
    disk_allocation_type: NotRequired[str]
    disk_allocation_resource: NotRequired[str]
    disk_attribute_list: NotRequired[list[str]]
