from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GkeNodePoolAcceleratorConfig(SdkBaseModel):
    """A GkeNodeConfigAcceleratorConfig represents a Hardware Accelerator request for a node pool."""

    accelerator_count: Optional[str] = Field(default=UNSET, alias="acceleratorCount")
    """The number of accelerator cards exposed to an instance."""

    accelerator_type: Optional[str] = Field(default=UNSET, alias="acceleratorType")
    """The accelerator type resource namename (see GPUs on Compute Engine)."""

    gpu_partition_size: Optional[str] = Field(default=UNSET, alias="gpuPartitionSize")
    """Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide
    (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)."""


class GkeNodePoolAcceleratorConfigDict(TypedDict):
    accelerator_count: NotRequired[str]
    accelerator_type: NotRequired[str]
    gpu_partition_size: NotRequired[str]
