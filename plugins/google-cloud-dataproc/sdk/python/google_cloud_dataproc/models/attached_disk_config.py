from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.disk_type import DiskTypeOrStr


class AttachedDiskConfig(SdkBaseModel):
    """Specifies the config of attached disk options for single VM instance."""

    provisioned_iops: Optional[str] = Field(default=UNSET, alias="provisionedIops")
    """Optional. Indicates how many IOPS to provision for the attached disk. This sets the number of I/O operations per
    second that the disk can handle. See https://cloud.google.com/compute/docs/disks/hyperdisks#hyperdisk-features"""

    disk_size_gb: Optional[int] = Field(default=UNSET, alias="diskSizeGb")
    """Optional. Disk size in GB."""

    disk_type: Optional[DiskTypeOrStr] = Field(default=UNSET, alias="diskType")
    """Optional. Deprecated: Use type instead."""

    provisioned_throughput: Optional[str] = Field(default=UNSET, alias="provisionedThroughput")
    """Optional. Indicates how much throughput to provision for the attached disk. This sets the number of throughput mb
    per second that the disk can handle. See
    https://cloud.google.com/compute/docs/disks/hyperdisks#hyperdisk-features"""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Optional. Attached disk type. Currently only supports Hyperdisks. See
    https://cloud.google.com/compute/docs/disks/hyperdisks. Note: Hyperdisk Balanced High Availability is not
    supported.Allowed values are: hyperdisk-balanced hyperdisk-extreme hyperdisk-ml hyperdisk-throughput"""


class AttachedDiskConfigDict(TypedDict):
    provisioned_iops: NotRequired[str]
    disk_size_gb: NotRequired[int]
    disk_type: NotRequired[DiskTypeOrStr]
    provisioned_throughput: NotRequired[str]
    type_: NotRequired[str]
