from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .attached_disk_config import AttachedDiskConfig, AttachedDiskConfigDict


class DiskConfig2(SdkBaseModel):
    """Optional. Disk configuration to apply to the instances in this instance selection. If specified on any entry in
    instanceSelectionList, then it must be specified on every entry in instanceSelectionList and the instanceGroupConfig
    must not specify any diskConfig."""

    boot_disk_size_gb: Optional[int] = Field(default=UNSET, alias="bootDiskSizeGb")
    """Optional. Size in GB of the boot disk (default is 500GB)."""

    boot_disk_provisioned_iops: Optional[str] = Field(default=UNSET, alias="bootDiskProvisionedIops")
    """Optional. Indicates how many IOPS to provision for the disk. This sets the number of I/O operations per second
    that the disk can handle. This field is supported only if boot_disk_type is hyperdisk-balanced."""

    boot_disk_type: Optional[str] = Field(default=UNSET, alias="bootDiskType")
    """Optional. Type of the boot disk (default is pd-standard). Valid values: pd-balanced (Persistent Disk Balanced
    Solid State Drive), pd-ssd (Persistent Disk Solid State Drive), or pd-standard (Persistent Disk Hard Disk Drive).
    See Disk types (https://cloud.google.com/compute/docs/disks#disk-types)."""

    num_local_ssds: Optional[int] = Field(default=UNSET, alias="numLocalSsds")
    """Optional. Number of attached SSDs, from 0 to 8 (default is 0). If SSDs are not attached, the boot disk is used to
    store runtime logs and HDFS (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs
    are attached, this runtime bulk data is spread across them, and the boot disk contains only basic config and
    installed binaries.Note: Local SSD options may vary by machine type and number of vCPUs selected."""

    boot_disk_provisioned_throughput: Optional[str] = Field(default=UNSET, alias="bootDiskProvisionedThroughput")
    """Optional. Indicates how much throughput to provision for the disk. This sets the number of throughput mb per
    second that the disk can handle. Values must be greater than or equal to 1. This field is supported only if
    boot_disk_type is hyperdisk-balanced."""

    attached_disk_configs: Optional[list[AttachedDiskConfig]] = Field(default=UNSET, alias="attachedDiskConfigs")
    """Optional. A list of attached disk configs for a group of VM instances."""

    local_ssd_interface: Optional[str] = Field(default=UNSET, alias="localSsdInterface")
    """Optional. Interface type of local SSDs (default is scsi). Valid values: scsi (Small Computer System Interface),
    nvme (Non-Volatile Memory Express). See local SSD performance
    (https://cloud.google.com/compute/docs/disks/local-ssd#performance)."""


class DiskConfig2Dict(TypedDict):
    boot_disk_size_gb: NotRequired[int]
    boot_disk_provisioned_iops: NotRequired[str]
    boot_disk_type: NotRequired[str]
    num_local_ssds: NotRequired[int]
    boot_disk_provisioned_throughput: NotRequired[str]
    attached_disk_configs: NotRequired[list[AttachedDiskConfigDict]]
    local_ssd_interface: NotRequired[str]
