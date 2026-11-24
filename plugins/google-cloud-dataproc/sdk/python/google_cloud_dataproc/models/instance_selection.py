from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .disk_config2 import DiskConfig2, DiskConfig2Dict


class InstanceSelection(SdkBaseModel):
    """Defines machines types and a rank to which the machines types belong."""

    machine_types: Optional[list[str]] = Field(default=UNSET, alias="machineTypes")
    """Optional. Full machine-type names, e.g. "n1-standard-16"."""

    disk_config: Optional[DiskConfig2] = Field(default=UNSET, alias="diskConfig")
    """Optional. Disk configuration to apply to the instances in this instance selection. If specified on any entry in
    instanceSelectionList, then it must be specified on every entry in instanceSelectionList and the instanceGroupConfig
    must not specify any diskConfig."""

    rank: Optional[int] = UNSET
    """Optional. Preference of this instance selection. Lower number means higher preference. The service will first try
    to create a VM based on the machine-type with priority rank and fallback to next rank based on availability. Machine
    types and instance selections with the same priority have the same preference."""


class InstanceSelectionDict(TypedDict):
    machine_types: NotRequired[list[str]]
    disk_config: NotRequired[DiskConfig2Dict]
    rank: NotRequired[int]
