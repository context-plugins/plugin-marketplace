from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProvisioningModelMix2(SdkBaseModel):
    """Optional. Defines how the Group selects the provisioning model to ensure required reliability."""

    standard_capacity_percent_above_base: Optional[int] = Field(default=UNSET, alias="standardCapacityPercentAboveBase")
    """Optional. The percentage of target capacity that should use Standard VM. The remaining percentage will use Spot
    VMs. The percentage applies only to the capacity above standard_capacity_base. eg. If 15 instances are requested and
    standard_capacity_base is 5 and standard_capacity_percent_above_base is 30, the service will create 5 standard VMs
    and then start mixing spot and standard VMs for remaining 10 instances. The mix will be 30% standard and 70%
    spot."""

    standard_capacity_base: Optional[int] = Field(default=UNSET, alias="standardCapacityBase")
    """Optional. The base capacity that will always use Standard VMs to avoid risk of more preemption than the minimum
    capacity you need. The service will create only standard VMs until it reaches standard_capacity_base, then it will
    start using standard_capacity_percent_above_base to mix Spot with Standard VMs. eg. If 15 instances are requested
    and standard_capacity_base is 5, the service will create 5 standard VMs and thenstart mixing spot and standard VMs
    for remaining 10 instances."""


class ProvisioningModelMix2Dict(TypedDict):
    standard_capacity_percent_above_base: NotRequired[int]
    standard_capacity_base: NotRequired[int]
