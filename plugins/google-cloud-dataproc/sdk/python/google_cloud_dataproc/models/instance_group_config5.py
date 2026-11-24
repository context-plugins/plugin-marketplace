from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .accelerator_config import AcceleratorConfig, AcceleratorConfigDict
from .disk_config1 import DiskConfig1, DiskConfig1Dict
from .enums.preemptibility import PreemptibilityOrStr
from .instance_flexibility_policy2 import InstanceFlexibilityPolicy2, InstanceFlexibilityPolicy2Dict
from .instance_reference import InstanceReference, InstanceReferenceDict
from .managed_group_config2 import ManagedGroupConfig2, ManagedGroupConfig2Dict
from .startup_config2 import StartupConfig2, StartupConfig2Dict


class InstanceGroupConfig5(SdkBaseModel):
    """Optional. The Compute Engine config settings for the cluster's master instance."""

    disk_config: Optional[DiskConfig1] = Field(default=UNSET, alias="diskConfig")
    """Optional. Disk option config settings."""

    is_preemptible: Optional[bool] = Field(default=UNSET, alias="isPreemptible")
    """Output only. Specifies that this instance group contains preemptible instances."""

    instance_flexibility_policy: Optional[InstanceFlexibilityPolicy2] = Field(
        default=UNSET, alias="instanceFlexibilityPolicy"
    )
    """Optional. Instance flexibility Policy allowing a mixture of VM shapes and provisioning models."""

    min_num_instances: Optional[int] = Field(default=UNSET, alias="minNumInstances")
    """Optional. The minimum number of primary worker instances to create. If min_num_instances is set, cluster creation
    will succeed if the number of primary workers created is at least equal to the min_num_instances number.Example:
    Cluster creation request with num_instances = 5 and min_num_instances = 3: If 4 VMs are created and 1 instance
    fails, the failed VM is deleted. The cluster is resized to 4 instances and placed in a RUNNING state. If 2 instances
    are created and 3 instances fail, the cluster in placed in an ERROR state. The failed VMs are not deleted."""

    preemptibility: Optional[PreemptibilityOrStr] = UNSET
    """Optional. Specifies the preemptibility of the instance group.The default value for master and worker groups is
    NON_PREEMPTIBLE. This default cannot be changed.The default value for secondary instances is PREEMPTIBLE."""

    min_cpu_platform: Optional[str] = Field(default=UNSET, alias="minCpuPlatform")
    """Optional. Specifies the minimum cpu platform for the Instance Group. See Minimum CPU Platform
    (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu)."""

    accelerators: Optional[list[AcceleratorConfig]] = UNSET
    """Optional. The Compute Engine accelerator configuration for these instances."""

    machine_type_uri: Optional[str] = Field(default=UNSET, alias="machineTypeUri")
    """Optional. The Compute Engine machine type used for cluster instances.A full URL, partial URI, or short name are
    valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2
    projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 n1-standard-2Auto Zone Exception: If you are using
    Auto Zone Placement
    (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement), you must
    use the short name of the machine type resource, for example, n1-standard-2."""

    managed_group_config: Optional[ManagedGroupConfig2] = Field(default=UNSET, alias="managedGroupConfig")
    """Output only. The config for Compute Engine Instance Group Manager that manages this group. This is only used for
    preemptible instance groups."""

    instance_references: Optional[list[InstanceReference]] = Field(default=UNSET, alias="instanceReferences")
    """Output only. List of references to Compute Engine instances."""

    num_instances: Optional[int] = Field(default=UNSET, alias="numInstances")
    """Optional. The number of VM instances in the instance group. For HA cluster master_config groups, must be set to
    3. For standard cluster master_config groups, must be set to 1."""

    image_uri: Optional[str] = Field(default=UNSET, alias="imageUri")
    """Optional. The Compute Engine image resource used for cluster instances.The URI can represent an image or image
    family.Image examples: https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/[image-id]
    projects/[project_id]/global/images/[image-id] image-idImage family examples. The service will use the most recent
    image from the family:
    https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/family/[custom-image-family-name]
    projects/[project_id]/global/images/family/[custom-image-family-name]If the URI is unspecified, it will be inferred
    from SoftwareConfig.image_version or the system default."""

    startup_config: Optional[StartupConfig2] = Field(default=UNSET, alias="startupConfig")
    """Optional. Configuration to handle the startup of instances during cluster create and update process."""

    instance_names: Optional[list[str]] = Field(default=UNSET, alias="instanceNames")
    """Output only. The list of instance names, derived from cluster_name, num_instances, and the instance group."""


class InstanceGroupConfig5Dict(TypedDict):
    disk_config: NotRequired[DiskConfig1Dict]
    is_preemptible: NotRequired[bool]
    instance_flexibility_policy: NotRequired[InstanceFlexibilityPolicy2Dict]
    min_num_instances: NotRequired[int]
    preemptibility: NotRequired[PreemptibilityOrStr]
    min_cpu_platform: NotRequired[str]
    accelerators: NotRequired[list[AcceleratorConfigDict]]
    machine_type_uri: NotRequired[str]
    managed_group_config: NotRequired[ManagedGroupConfig2Dict]
    instance_references: NotRequired[list[InstanceReferenceDict]]
    num_instances: NotRequired[int]
    image_uri: NotRequired[str]
    startup_config: NotRequired[StartupConfig2Dict]
    instance_names: NotRequired[list[str]]
