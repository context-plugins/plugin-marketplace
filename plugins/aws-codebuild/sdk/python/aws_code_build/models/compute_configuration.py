from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.machine_type import MachineTypeOrStr


class ComputeConfiguration(SdkBaseModel):
    v_cpu: Optional[int] = Field(default=UNSET, alias="vCpu")
    """The number of vCPUs of the instance type included in your fleet."""

    memory: Optional[int] = UNSET
    """The amount of memory of the instance type included in your fleet."""

    disk: Optional[int] = UNSET
    """The amount of disk space of the instance type included in your fleet."""

    machine_type: Optional[MachineTypeOrStr] = Field(default=UNSET, alias="machineType")
    """The machine type of the instance type included in your fleet."""

    instance_type: Optional[str] = Field(default=UNSET, alias="instanceType")
    """The EC2 instance type to be launched in your fleet."""


class ComputeConfigurationDict(TypedDict):
    v_cpu: NotRequired[int]
    memory: NotRequired[int]
    disk: NotRequired[int]
    machine_type: NotRequired[MachineTypeOrStr]
    instance_type: NotRequired[str]
