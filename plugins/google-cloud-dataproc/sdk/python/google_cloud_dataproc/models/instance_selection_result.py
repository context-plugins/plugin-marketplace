from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InstanceSelectionResult(SdkBaseModel):
    """Defines a mapping from machine types to the number of VMs that are created with each machine type."""

    machine_type: Optional[str] = Field(default=UNSET, alias="machineType")
    """Output only. Full machine-type names, e.g. "n1-standard-16"."""

    vm_count: Optional[int] = Field(default=UNSET, alias="vmCount")
    """Output only. Number of VM provisioned with the machine_type."""


class InstanceSelectionResultDict(TypedDict):
    machine_type: NotRequired[str]
    vm_count: NotRequired[int]
