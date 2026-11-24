from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .gke_node_pool_accelerator_config import GkeNodePoolAcceleratorConfig, GkeNodePoolAcceleratorConfigDict


class GkeNodeConfig2(SdkBaseModel):
    """Optional. The node pool configuration."""

    local_ssd_count: Optional[int] = Field(default=UNSET, alias="localSsdCount")
    """Optional. The number of local SSD disks to attach to the node, which is limited by the maximum number of disks
    allowable per zone (see Adding Local SSDs (https://cloud.google.com/compute/docs/disks/local-ssd))."""

    boot_disk_kms_key: Optional[str] = Field(default=UNSET, alias="bootDiskKmsKey")
    """Optional. The Customer Managed Encryption Key (CMEK)
    (https://cloud.google.com/kubernetes-engine/docs/how-to/using-cmek) used to encrypt the boot disk attached to each
    node in the node pool. Specify the key using the following format:
    projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}"""

    service_account: Optional[str] = Field(default=UNSET, alias="serviceAccount")
    """Optional. Specifies the service account (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam) to
    be used by the node pools. Specify the email address of the service account or its full resource name.Format:
    projects/{project}/serviceAccounts/{service_account_email} or {service_account_email}."""

    accelerators: Optional[list[GkeNodePoolAcceleratorConfig]] = UNSET
    """Optional. A list of hardware accelerators (https://cloud.google.com/compute/docs/gpus) to attach to each node."""

    preemptible: Optional[bool] = UNSET
    """Optional. Whether the nodes are created as legacy preemptible VM instances
    (https://cloud.google.com/compute/docs/instances/preemptible). Also see Spot VMs, preemptible VM instances without a
    maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the
    DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role)."""

    spot: Optional[bool] = UNSET
    """Optional. Whether the nodes are created as Spot VM instances
    (https://cloud.google.com/compute/docs/instances/spot). Spot VMs are the latest update to legacy preemptible VMs.
    Spot VMs do not have a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the
    CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will
    assume the CONTROLLER role)."""

    min_cpu_platform: Optional[str] = Field(default=UNSET, alias="minCpuPlatform")
    """Optional. Minimum CPU platform (https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform) to be
    used by this instance. The instance may be scheduled on the specified or a newer CPU platform. Specify the friendly
    names of CPU platforms, such as "Intel Haswell"` or Intel Sandy Bridge"."""

    machine_type: Optional[str] = Field(default=UNSET, alias="machineType")
    """Optional. The name of a Compute Engine machine type (https://cloud.google.com/compute/docs/machine-types)."""


class GkeNodeConfig2Dict(TypedDict):
    local_ssd_count: NotRequired[int]
    boot_disk_kms_key: NotRequired[str]
    service_account: NotRequired[str]
    accelerators: NotRequired[list[GkeNodePoolAcceleratorConfigDict]]
    preemptible: NotRequired[bool]
    spot: NotRequired[bool]
    min_cpu_platform: NotRequired[str]
    machine_type: NotRequired[str]
