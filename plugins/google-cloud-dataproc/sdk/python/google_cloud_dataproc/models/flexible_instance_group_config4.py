from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.hardware_class import HardwareClassOrStr


class FlexibleInstanceGroupConfig4(SdkBaseModel):
    """Optional. The High Obtainability (HO) config settings for the cluster's worker instances.In High Obtainability
    (HO) mode, flexible configs are the single source of truth for desired cluster configuration. num_instances
    represents the desired capacity of the worker group and is mutable via cluster updates and autoscaling.Only one of
    worker_config or worker_flexible_config can be set.In High Obtainability (HO) mode, for multi-node (standard)
    clusters, both master_flexible_config and worker_flexible_config must be specified. Mixing standard and flexible
    configs across node groups is not allowed. Single-node clusters do not specify worker configs."""

    boot_disk_size_gb: Optional[int] = Field(default=UNSET, alias="bootDiskSizeGb")
    """Optional. The boot disk size in GB. This is a create-time specification and is not currently mutable via update
    masks."""

    core_count: Optional[int] = Field(default=UNSET, alias="coreCount")
    """Optional. The number of vCPUs per instance. Must be a power of 2 (2, 4, 8, 16, 32). This is a create-time
    specification and is not currently mutable via update masks."""

    hardware_class: Optional[HardwareClassOrStr] = Field(default=UNSET, alias="hardwareClass")
    """Optional. The hardware class of the instances. This is a create-time specification and is not currently mutable
    via update masks."""

    num_instances: Optional[int] = Field(default=UNSET, alias="numInstances")
    """Optional. The number of VM instances requested.For master instances, this must be 1. For worker and secondary
    worker instances, this represents the desired capacity of the group and is mutable via cluster update operations and
    autoscaling."""


class FlexibleInstanceGroupConfig4Dict(TypedDict):
    boot_disk_size_gb: NotRequired[int]
    core_count: NotRequired[int]
    hardware_class: NotRequired[HardwareClassOrStr]
    num_instances: NotRequired[int]
